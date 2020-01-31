const pool = require('../pool');

const getPosts = (request, response) => {
    pool.query('SELECT * FROM post').then(result => {
        response.json(result.rows);
    });
}

const getPostsByUserId = (request, response) => {
    const userId = request.params.userId;
    pool.query(`SELECT * FROM post WHERE user_account_id = ${userId}`)
        .then(result => {
            response.json(result.rows)
        });
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
    getPostsByUserId,
    addPost,
    editPost,
    deletePost
}