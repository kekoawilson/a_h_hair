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
    email text not null,
    phone text,
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


create table photos (
    photo_id serial primary key,
    photo_url text not null
);

insert into photos ( photo_url )
    values ( );


create table services (
    services text,
    price text 
);

insert into availableservices ( services, price ) values ( $$Women's Haircut & Style$$, '$25+');
insert into availableservices ( services, price ) values ( $$Men's Haircut$$, '$15');
insert into availableservices ( services, price ) values ( $$Children's Haircut$$, '$15');
insert into availableservices ( services, price ) values ( $$Men's Color$$, '$25');
insert into availableservices ( services, price ) values ( 'Updo', '$30');
insert into availableservices ( services, price ) values ( 'Bridal Updo', '$50');
insert into availableservices ( services, price ) values ( 'All Over Color', '$60+');
insert into availableservices ( services, price ) values ( 'Root Touch Up', '$50+');
insert into availableservices ( services, price ) values ( 'Bleach and Tone', '$80+');
insert into availableservices ( services, price ) values ( 'Partial Foil Weave', '$65+');
insert into availableservices ( services, price ) values ( 'Full Foil Weave', '$85+');
insert into availableservices ( services, price ) values ( 'Balayage', '$90+');
insert into availableservices ( services, price ) values ( 'Color Correction', '$90+');
insert into availableservices ( services, price ) values ( 'Olaplex', 'Add $15');
insert into availableservices ( services ) values ( '- Long Hair Extra -');