const { TinyPg } = require('tinypg');
const Path = require('path');

const tinypg = new TinyPg({
  connection_string: `postgres://postgres:password@localhost:5432/social-media1?sslmode=disable`,
  root_dir: Path.join(__dirname, './queries')
})

async function seed_users() {
  const user_results = await tinypg.query('SELECT * FROM user_account');

  if (!user_results.rows.length) {
    tinypg.sql('user_account')
      .then(results => console.log(results))
      .catch(error => console.error(error.stack));
  } else {
    console.log('Users table already has rows');
  }
}

async function seed_posts() {
  const post_results = await tinypg.query('SELECT * FROM post');

  if (!post_results.rows.length) {
    tinypg.sql('post')
      .then(results => console.log(results))
      .catch(error => console.error(error.stack))
  } else {
    console.log('Post table already has rows');
  }
}

async function seed() {
  await seed_users();
  await seed_posts();
}

module.exports = seed;


// const results = await pool.query('SELECT * FROM post');


// // we dont have posts
// if (!results.rows.length) {

// }