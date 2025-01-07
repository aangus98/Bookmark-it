import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

import bookSchema from './Book';
import type { BookDocument } from './Book';

// Define the UserDocument interface
interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  savedBooks: BookDocument[];
  isCorrectPassword(password: string): Promise<boolean>;
}

// Create the user schema
const userSchema = new Schema<UserDocument>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    // Set savedBooks to be an array of data adhering to bookSchema
    savedBooks: [bookSchema],
  },
  {
    toJSON: {
      virtuals: true, // Enable virtual properties in JSON responses
    },
  }
);

// Pre-save hook for password hashing
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Only hash if password is modified
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Instance method to compare passwords
userSchema.methods.isCorrectPassword = async function (password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

// Virtual property for book count
userSchema.virtual('bookCount').get(function () {
  return this.savedBooks.length;
});

// Create the User model
const User = model<UserDocument>('User', userSchema);

export default User;
