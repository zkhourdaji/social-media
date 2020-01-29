const express = require('express');
const app = express();

const seed = require('./initialize_db');

seed();

// === Posts ===
const { getPosts } = require('../posts');


app.get('/', (req, res) => {
    res.send("Social Media API")
})

// app.get('/users',);

app.get('/posts', getPosts)

// app.post('/posts', )