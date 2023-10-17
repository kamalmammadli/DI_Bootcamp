const express = require('express');
const app = express();
use(express.json());

const books = [
{
id: 1, title: 'Book 1', author: 'Author 1', publishedYear: 2020 },
   
  {
id: 2, title: 'Book 2', author: 'Author 2', publishedYear: 2018 },
];

app.get('/api/books', (req, res) => {
json(books);
});

app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    res.status(404).json({ message: 'Book not found' });
  } else {
    res.json(book);
  }
});


 
app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newId = books.length > 0 ? books[books.length - 1].id + 1 : 1;
  
 
const newBook = { id: newId, title, author, publishedYear };
  books.push(newBook);
status(201).json(newBook);
});

const port = 5000;
app.listen(port, () => {
  
 
console.log(`Server is running on port ${port}`);
});