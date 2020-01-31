INSERT INTO post (user_account_id, created_on, body) VALUES 
((SELECT id FROM user_account WHERE username = 'khourdaji@gmail.com'), now(), 'So I am seeding the posts table, this is super fun lol'),
((SELECT id FROM user_account WHERE username = 'john@email.com'), now(), 'I am John, why am I here ?'),
((SELECT id FROM user_account WHERE username = 'emil@hotmail.com'), now(), 'Moshi Moshi, Oniii Channn (* ^ ω ^)'),
((SELECT id FROM user_account WHERE username = 'khourdaji@gmail.com'), now(), 'Any gamers here ??');