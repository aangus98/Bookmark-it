import { User } from '../models';
import { signToken } from '../services/auth';
import { AuthenticationError } from 'apollo-server-express';

export const getMe = async (_, __, context) => {
  if (!context.user) throw new AuthenticationError('You need to be logged in!');
  return User.findById(context.user._id);
};

export const login = async (_, { email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.isCorrectPassword(password))) {
    throw new AuthenticationError('Invalid credentials');
  }
  const token = signToken(user);
  return { token, user };
};

export const addUser = async (_, { username, email, password }) => {
  const user = await User.create({ username, email, password });
  const token = signToken(user);
  return { token, user };
};

export const saveBook = async (_, { book }, context) => {
  if (!context.user) throw new AuthenticationError('You need to be logged in!');
  return User.findByIdAndUpdate(
    context.user._id,
    { $addToSet: { savedBooks: book } },
    { new: true }
  );
};

export const removeBook = async (_, { bookId }, context) => {
  if (!context.user) throw new AuthenticationError('You need to be logged in!');
  return User.findByIdAndUpdate(
    context.user._id,
    { $pull: { savedBooks: { bookId } } },
    { new: true }
  );
};
