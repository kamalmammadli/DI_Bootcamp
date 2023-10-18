const express = require('express');
const router = express.Router();
const bp = require('body-parser');
router.use(bp.json())
const books = [{
        id: 1,
        title: "book1",
        author: "author1"
    },
    {
        id: 2,
        title: "book2",
        author: "author2"
    },
    {
        id: 3,
        title: "book3",
        author: "author3"
    }
];

router.get('/lists', (req, res) => {
    res.json(books)
})

router.post('/lists', (req, res) => {

    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    }
    console.log(req.body);
    books.push(newBook);
    console.log(books);
    res.json(books)

})

router.put('/lists/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = books.findIndex((value) => {
        return value.id == id;
    })

    if (!index) {
        res.send("id is not found")
    }
    books[index] = {
        id: index + 1,
        title: req.body.title,
        author: req.body.author
    }

    res.json(books[index])
})

router.delete('/lists/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = books.findIndex((value) => {
        return value.id == id;
    })

    if (!index) {
        res.send("id is not found")
    }

    books.splice(index, 1)
    res.status(200).json("Product deleted");
})

module.exports = router