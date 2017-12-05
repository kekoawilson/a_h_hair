insert into users ( last_name, first_name, email, auth_id, img )
    values ( $1, $2, $3, $4, $5 )
    returning *;