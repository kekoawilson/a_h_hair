insert into appointments ( user_id, user_name, appt_date, appt_time, appt_service, user_email )
    values ( $1, $2, $3, $4, $5, $6 )
    returning *;