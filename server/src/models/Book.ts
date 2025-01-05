import { Schema } from 'mongoose';

export const bookSchema = new Schema({
  bookId: { type: String, required: true },
  authors: [String],
  description: String,
  title: { type: String, required: true },
  image: String,
  link: String,
});

