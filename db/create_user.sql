insert into users ( name_last, name_first, email, auth_id, img )
    values ( $1, $2, $3, $4, $5 )
    returning *;