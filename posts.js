const { Pool } = require('pg');
const { db } = require('./environment');

const pool = new Pool({
    user: db.user,
    host: db.host,
    database: db.database,
    password: db.password,
    port: db.port
});


const getPosts = (request, response) => {
    pool.query('SELECT * FROM post').then(result => {
        response.json(result.rows);
    });
}

const getPostsByUserId = (request, response) => {
    pool.query('')
}

const getFriendsPostsByUserId = (request, response) => {

}

const addPost = (request, response) => {

}

const editPost = (request, response) => {

}

const deletePost = (request, response) => {

}




module.exports = {
    getPosts,
    addPost,
    editPost,
    deletePost
}