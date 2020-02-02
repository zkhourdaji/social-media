const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const seed = require('./initialize_db');

// === Posts ===
const { getPosts, getPostsByUserId, addPost } = require('./route_handlers/posts');
const { getUsers } = require('./route_handlers/users');

// seed tables for development if they are empty
seed();


// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Social Media API")
});

app.get('/users', getUsers);


// ======== POSTS ROUTES ========
app.get('/posts', getPosts);

app.get('/posts/:userId', getPostsByUserId);

app.post('/posts/:userId', addPost);

// app.post('/posts', )

app.listen(port, () => {
    console.log(`API running on port ${port}.`);
});