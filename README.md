# Blog-App

## Overview

This project is a robust blogging platform that allows users to create accounts, publish blogs, and interact with other users through comments. The platform is built using the EJS templating engine for the frontend, and Node.js and Express.js for the backend. Data is stored in MongoDB databases, with three main collections: `blogs`, `users`, and `comments`. The authentication and authorization mechanisms are implemented using JSON Web Tokens (JWT) generated with the help of the crypto library.

## Features

- **User Management**
  - Users can create accounts securely.
  - Passwords are encrypted and stored in the database for security.
  - JSON Web Tokens (JWT) are used for authentication and authorization.

- **Blog Creation and Management**
  - Authenticated users can create and edit their blogs.
  - Blogs are stored in the MongoDB `blogs` collection.

- **Comments System**
  - Users can comment on blogs.
  - Comments are stored in the MongoDB `comments` collection.

## Technologies Used

- **Frontend**
  - EJS (Embedded JavaScript) for dynamic HTML templates.

- **Backend**
  - Node.js for server-side JavaScript.
  - Express.js for building the web application and APIs.

- **Database**
  - MongoDB for storing user data, blogs, and comments.

- **Authentication**
  - JSON Web Tokens (JWT) for secure user authentication and authorization.
  - Crypto library for generating tokens securely.

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ansh2822/Blog-App.git
   cd blog-app
   
2. Install Dependencies
   ```bash
   npm install

3. Set Up Environment Variables
   - Create a .env file in the root directory.
   - Add the following variables:
     ```bash
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/blogging-platform
     JWT_SECRET=your_jwt_secret_key

4. Run Application
  ```bash
  npm start

## API Endpoints

GET /blogs - Get a list of all blogs.

GET /blogs/:id - Get details of a specific blog by ID.

POST /blogs - Create a new blog. Requires authentication.

PUT /blogs/:id - Delete a blog by ID. Requires authentication.

POST /comments/:blogId - Add a comment to a specific blog. Requires authentication.

POST /users/register - Register a new user account.

POST /users/login - User login to generate JWT token for authentication.
