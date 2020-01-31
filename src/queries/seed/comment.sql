INSERT INTO comment (user_account_id, post_id, created_on, body) VALUES 
(:userId, :postId, now(), :body)