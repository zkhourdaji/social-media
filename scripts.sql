CREATE DATABASE "social-media1"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

CREATE TABLE IF NOT EXISTS user_account (
	id SERIAL PRIMARY KEY,
	username VARCHAR(50) UNIQUE NOT NULL,
	password VARCHAR (50) NOT NULL,
	first_name VARCHAR(100) NOT NULL,
	middle_name VARCHAR(100),
	last_name VARCHAR(100) NOT NULL,
	email VARCHAR (355) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
	last_login TIMESTAMP,
	phone_number VARCHAR(10),
	bio VARCHAR
)

CREATE TABLE IF NOT EXISTS post (
	id SERIAL PRIMARY KEY,
	user_account_id INTEGER REFERENCES user_account(id),
	created_on TIMESTAMP NOT NULL,
	body VARCHAR
)

CREATE TABLE IF NOT EXISTS comment (
	id SERIAL PRIMARY KEY,
	user_account_id INTEGER REFERENCES user_account(id),
	post_id INTEGER REFERENCES post(id),
	created_on TIMESTAMP NOT NULL,
	body VARCHAR
)

CREATE TABLE IF NOT EXISTS post_like (
	id SERIAL PRIMARY KEY,
	user_account_id INTEGER REFERENCES user_account(id),
	post_id INTEGER REFERENCES post(id) NOT NULL,
	created_on TIMESTAMP NOT NULL
)

CREATE TABLE IF NOT EXISTS comment_like (
	id SERIAL PRIMARY KEY,
	user_account_id INTEGER REFERENCES user_account(id),
	comment_id INTEGER REFERENCES comment(id) NOT NULL,
	created_on TIMESTAMP NOT NULL
)

CREATE TABLE IF NOT EXISTS friendship (
	user_one_id INTEGER REFERENCES user_account(id) NOT NULL,
	User_two_id INTEGER REFERENCES user_account(id) NOT NULL,
	status VARCHAR NOT NULL,
	action_user_id INTEGER REFERENCES user_account(id) NOT NULL
)