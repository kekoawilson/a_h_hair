insert into appointments ( user_id, appt_date, appt_time, appt_service )
    values ( $1, $2, $3, $4 )
    returning *;