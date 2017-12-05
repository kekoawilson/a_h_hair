create table products (
    product_id serial primary key,
    product_name text,
    product_img text,
    brand text
);

insert into products ( product_name, product_img, brand )
values ( );

create table users (
    id serial primary key,
    name_last text not null,
    name_first text not null,
    phone text not null,
    user_type text,
    auth_id text,
    img text
);

insert into users ( name_last, name_first, phone )
values ( );
-- I took out ability to insert auth_id and img because it comes from google. look into this.

create table purchases (
    user_id integer references users( id ),
    purchase_date text not null,
    order_number text not null
    -- possible confirmation number column
);

insert into purchases ( purchase_date, order_number )
values ( );

create table appointments (
    appt_id integer references users( id )
    appt_date text,
    appt_time text,
    appt_location text,
    appt_type text
);

insert into appointments ( appt_date, appt_time, appt_location, appt_type )
values ( );