const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome the router');
});

router.get('/about', (req, res) => {
    res.send('Welcome the router')})

module.exports = router;
