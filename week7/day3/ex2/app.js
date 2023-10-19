const express = require('express');
const app = express();
const router = require('./todos.js')
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is runnung');
});

app.use('/todos', router)