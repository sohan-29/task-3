# CRUD operations using Nodejs

## Description
This project is a simple Express.js backend API for managing a library of books. It provides CRUD (Create, Read, Update, Delete) operations on book data.

## Installation
To install the project dependencies, run:

```bash
npm install
```

## Usage
To start the server, run:

```bash
node Node.js
```

The server will start on port 3000. You can access it at `http://localhost:3000`.

## API Endpoints

- `GET /`  
  Returns a welcome message.

- `POST /books`  
  Adds a new book.  
  Request body should be JSON with fields: `id` (number), `title` (string), `author` (string).  
  Example:  
  ```json
  {
    "id": 4,
    "title": "Book-4",
    "author": "Author-4"
  }
  ```

- `GET /books`  
  Retrieves the list of all books.

- `PUT /books/:id`  
  Updates a book with the specified `id`.  
  Request body should include the same `id` and updated `title` and `author`.  
  Example:  
  ```json
  {
    "id": 2,
    "title": "Updated Book Title",
    "author": "Updated Author"
  }
  ```

- `DELETE /books/:id`  
  Deletes the book with the specified `id`.

- `Get /books/:id`  
  Retrieves the book with the specified `id`.
