const express = require('express');
const app = express();
const port = 5000;

const dataService = require('./data/dataService');

get('/posts', async (req, res) => {
  try {
    const posts = await dataService.fetchPosts();
    res.json(posts);
    
   
console.log('Data successfully');
  } catch (error) {
    res.status(500).json({ error: 'error data' });
  }
});

app.listen(port, () => {
  console.log('Server is running');
});