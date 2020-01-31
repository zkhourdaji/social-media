const express = require('express');
const app = express();
const port = 3000;

const seed = require('./initialize_db');

// seed tables for development if they are empty
seed();

// === Posts ===
const { getPosts, getPostsByUserId } = require('./route_handlers/posts');
const { getUsers } = require('./route_handlers/users');


app.get('/', (req, res) => {
    res.send("Social Media API")
});

app.get('/users', getUsers);

// app.get('/users',);

app.get('/posts', getPosts);

app.get('/posts/:userId', getPostsByUserId)

// app.post('/posts', )

app.listen(port, () => {
    console.log(`API running on port ${port}.`);
});