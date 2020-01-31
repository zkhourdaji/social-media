const { TinyPg } = require('tinypg');
const Path = require('path');

const tinypg = new TinyPg({
  connection_string: `postgres://postgres:password@localhost:5432/social-media1?sslmode=disable`,
  root_dir: Path.join(__dirname, './queries')
})

// ==== Helper methods to check if tables are empty =====
async function userTableIsEmpty() {
  try {
    const user_results = await tinypg.query('SELECT * FROM user_account');
    return !user_results.rows.length;
  } catch (error) {
    console.error(error);
  }
}

async function postTableIsEmpty() {
  try {
    const post_results = await tinypg.query('SELECT * FROM post');
    return !post_results.rows.length;
  } catch (error) {
    console.error(error);
  }
}

async function commentTableIsEmpty() {
  try {
    const comments_results = await tinypg.query('SELECT * FROM comment');
    return !comments_results.rows.length;
  } catch (error) {
    console.error(error);
  }
}
// ==============================================

async function seedUsers() {
  try {
    if (await userTableIsEmpty()) {
      await tinypg.sql('seed.user_accounts');
      console.log('Sucessfully seeded Users');
    } else {
      console.error('Seeding users failed: User table not empty!');
    }
  } catch (error) {
    console.error(error);
  }
}

async function seedPosts() {
  if (await userTableIsEmpty()) {
    console.error('Need user accounts before seeding posts');
    return;
  }

  if (await postTableIsEmpty()) {
    try {
      await tinypg.sql('seed.posts');
      console.log('Sucessfully seeded posts');
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log('Post table already has rows');
  }
}

async function seedComments() {
  if (await postTableIsEmpty()) {
    console.error('Need posts before seeding comments');
  }

  const zafer = await getUserByEmail('khourdaji@gmail.com');
  const john = await getUserByEmail('john@email.com');
  const johnFirstPost = (await getPostsByUserId(john.id))[0];


  // zafer will comment on john's first post
  try {
    await tinypg.sql('seed.comment', {
      userId: zafer.id,
      postId: johnFirstPost.id,
      body: 'This is my first comment!!!'
    });
    console.log('Sucessfully seeded comments');
  } catch (error) {
    console.error(error);
  }
}

async function getUserByEmail(email) {
  try {
    const results = await tinypg.sql('get_user_by_email', { email });
    return results.rows[0];
  } catch (error) {
    console.error(error.stack);
  }
}

async function getPostsByUserId(userId) {
  try {
    const results = await tinypg.sql('get_posts_by_user_id', { userId });
    return results.rows;
  } catch (error) {
    console.error(error.stack);
  }
}


async function seed() {
  await seedUsers();
  await seedPosts();
  await seedComments();
}

module.exports = seed;