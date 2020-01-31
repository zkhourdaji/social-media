const { Pool } = require('pg');
const { db } = require('../environment');

const pool = new Pool({
    user: db.user,
    host: db.host,
    database: db.database,
    password: db.password,
    port: db.port
});

module.exports = pool;