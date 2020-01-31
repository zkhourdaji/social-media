const pool = require('../pool');

const getUsers = (request, response) => {
    pool.query('SELECT * FROM user_account').then(result => {
        response.json(result.rows)
    });
}

module.exports = {
    getUsers
}