import { gql } from 'graphql-tag';
import * as userController from '../../controllers/user-controller';

export const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
  }

  type Book {
    bookId: String!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }

  type Auth {
    token: String!
    user: User
  }

  type Query {
    me: User
  }

  input BookInput {
    bookId: String!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: BookInput!): User
    removeBook(bookId: String!): User
  }
`;

export const resolvers = {
  Query: {
    me: userController.getMe,
  },
  Mutation: {
    login: userController.login,
    addUser: userController.addUser,
    saveBook: userController.saveBook,
    removeBook: userController.removeBook,
  },
};
