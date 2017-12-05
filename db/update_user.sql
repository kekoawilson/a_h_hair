update users 
    set name_last = $2, name_first $3, email = $4, phone = $5, auth_id = $6, img = $7
    where id = $1
    
    returning *;

-- add in ability to update profile img as well when you have time.