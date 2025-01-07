# Bookmark-it

## Description

**Bookmark-it** is a full-stack web application that allows users to search for books using the Google Books API, save their favorite books to a personalized account, and manage their book collection. The application has been refactored to replace the RESTful API with a GraphQL API using Apollo Server for improved performance and flexibility.

Built with the **MERN stack**, this project features:
- **MongoDB** for data storage.
- **Express.js** and **Node.js** for the backend.
- **React** for the front-end user interface.
- **Apollo Server** for GraphQL API implementation.

This project is designed to provide users with an intuitive and engaging experience for discovering and saving books.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Deployment](#deployment)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To set up the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mern-book-search-engine.git
   cd mern-book-search-engine
2. Install dependencies for both the server and client:
    ```bash
    npm install
    cd client
    npm install
    cd ..
3. Create a .env file in the root directory and provide the following environment variables:
    ```bash
    MONGODB_URI=your-mongodb-uri
    SECRET=your-secret-key
4. Start the development server:
    ```bash
    npm run develop
    ```

## Usage
The application consists of the following features:

- Search Books:
    - Search for books by title, author, or keyword using the Google Books API.
    - View book details such as title, author, description, image, and a link to purchase.
- Save Books:
    - Logged-in users can save books to their personal account for later reference.
- Manage Saved Books:
    - View saved books in a personalized list.
    - Remove books from the saved list.

## Features
- GraphQL Integration:

    - Refactored from RESTful API to GraphQL API for efficient querying and data management.
    - Queries and mutations implemented for managing user data and book searches.
- Authentication:

    - JWT-based authentication for secure user login and signup.
- Responsive Design:

    - Optimized for both desktop and mobile devices.

## Deployment
- Github: https://github.com/aangus98/Bookmark-it

## License 
This project is licensed under the MIT License.

## Contributing 
Contributions are welcome! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature-name
3. Make your changes and commit them:
    ```bash
    git commit -m "Add your feature"
4. Push to your fork
    ```bash
    git push origin feature/your-feature-name
5. Submit a pull request

## Tests
To run tests for the application, use the following command:
    ```bash
    npm test

## Questions
For any questions or feedback, feel free to reach out:
    - GitHub: aangus98
    - Email: mrangus298@gmail.com
    