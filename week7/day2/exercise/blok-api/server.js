const express = require('express');
const app = express();
const port = 3000;


let data = [
  { id: 1, title: 'First Blog Post', content: 'This is the content of the first post.' },
  { id: 2, title: 'Second Blog Post', content: 'This is the content of the second post.' },
];


app.use(express.json());


app.get('/posts', (req, res) => {
  res.json(data);
});


app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = data.find(post => post.id === postId);
  if (!post) {
    res.status(404).json({ message: 'Blog post not found' });
  } else {
    res.json(post);
  }
});


app.post('/posts', (req, res) => {
  const newPost = req.body;
  newPost.id = data.length + 1;
  data.push(newPost);
  res.status(201).json(newPost);
});


app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const updatedPost = req.body;
  const existingPost = data.find(post => post.id === postId);

  if (!existingPost) {
    res.status(404).json({ message: 'Blog post not found' });
  } else {
    existingPost.title = updatedPost.title;
    existingPost.content = updatedPost.content;
    res.json(existingPost);
  }
});


app.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const index = data.findIndex(post => post.id === postId);

  if (index === -1) {
    res.status(404).json({ message: 'Blog post not found' });
  } else {
    data.splice(index, 1);
    res.json({ message: 'Blog post deleted' });
  }
});


app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// 

// Googlda numunelere baxa baxa etdim bunlari 