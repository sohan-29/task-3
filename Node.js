const express = require('express');
const app = express();
const port = 3000;
const booksData = [
    {
        "id": 1,
        "title": "Book-1",
        "author": "Author-1",
    },
    {
        "id": 2,
        "title": "Book-2",
        "author": "Author-2",
    },
    {
        "id": 3,
        "title": "Book-3",
        "author": "Author-3",
    }
];

app.use(express.json());

app.get('/', (req, res) => {
    res.send("welcome to Sohan's Library");
})

app.get('/books', (req, res) => {
    res.send(booksData);
})

app.post('/books/:id', (req, res) => {
    const id = req.params.id;
    const book = booksData.find(book =>
        book.id === parseInt(id)
    );
    if (book) {
        res.send(book);
    } else {
        res.status(404).send({ message: "Book not found" });
    }
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
