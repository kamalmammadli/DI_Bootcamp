const express = require('express');
const bp = require('body-parser');

const router = express.Router();

router.use(bp.json());

const todos = [{id:1, title:'book'}];

router.get('/', (req, res) => {
    res.json(todos);
});

router.post ('/', (req, res) => {
    const newTod = req.body;
    res.json(newTod);
});

router.put('/:id', (req, res) => {
    const todId = req.params.id;
    res.send('Update to id');
});

router.delete('/:id', (req, res) => {
    const todId = req.params.id;
    res.send('Delete to id');
});

module.exports = router;