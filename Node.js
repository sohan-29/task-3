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
//to get all books data
app.get('/books', (_, res) => {
    res.send(booksData);
})
//to add a book
app.post('/books', (req, res) => {
    booksData.forEach(book => {
        if (book.id === req.body.id) {
            return res.status(400).send({ message: `Book with id: ${req.body.id} is already exists` });
        }
    })
    booksData.push(req.body);
    res.status(200).send({ message: "Book added successfully" });
    console.log(booksData)
})
//to update a book
app.put('/books/:id', (req, res) => {
    const id = req.params.id;
    const reqId = req.body.id;
    if (parseInt(id) !== parseInt(reqId)) {
        return res.status(400).send({ message: `Book id mismatch` });
    }
    booksData.find(book => {
        if (book.id === parseInt(id)) {
            book.title = req.body.title;
            book.author = req.body.author;
            return res.status(200).send({ message: "Book updated successfully", data: booksData });
        }
    })
    res.status(404).send({ message: "Book not found" });
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
