const express = require('express');
const router = require('./books/routes.js');

const app = express();


app.listen(3006, () => {
    console.log("server is listening");
});
app.use(express.json())
app.use('/books', router)