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
    const userId = request.params.userId;
    const newPostBody = request.body.body;
    pool.query(`INSERT INTO post(user_account_id, created_on, body) VALUES (${userId}, now(), '${newPostBody}')`)
        .then(_ => response.json({ message: 'Success' }))
        .catch(error => response.json(error));
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