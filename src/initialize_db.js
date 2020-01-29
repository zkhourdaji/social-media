const { Pool } = require('pg');
const { db } = require('../environment');
// import { TinyPg } from 'tinypg';
const { TinyPg } = require('tinypg');
const Path = require('path');

// const pool = new Pool({
//   user: db.user,
//   host: db.host,
//   database: db.database,
//   password: db.password,
//   port: db.port
// });


const tinypg = new TinyPg({
  connection_string: `postgres://postgres:password@localhost:5432/social-media1?sslmode=disable`,
  root_dir: Path.join(__dirname, './queries')
})

async function seed_users() {
  const user_results = await tinypg.query('SELECT * FROM user_account');

  if (!user_results.rows.length) {
    tinypg.sql('user_accounts')
      .then(results => console.log(results))
      .catch(error => console.error(error.stack));
  } else {
    console.log(user_results);
    console.log('Users table already has rows');
  }
}

async function seed() {
  seed_users();
}

module.exports = seed;


// const results = await pool.query('SELECT * FROM post');


// // we dont have posts
// if (!results.rows.length) {

// }