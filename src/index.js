const express = require('express');
const app = express();

const seed = require('./initialize_db');

// seed tables for development if they are empty
seed();

// === Posts ===
const { getPosts } = require('../posts');


app.get('/', (req, res) => {
    res.send("Social Media API")
})

// app.get('/users',);

app.get('/posts', getPosts)

// app.post('/posts', )