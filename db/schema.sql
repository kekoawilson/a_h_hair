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
    appt_id serial primary key,
    user_id integer references users( id ),
    appt_date text,
    appt_time text,
    appt_service text
);

insert into appointments ( appt_date, appt_time, appt_service )
values ( );


create table photos (
    photo_id serial primary key,
    photo_url text not null,
    photo_type text
);

insert into photos ( photo_url, photo_type )
    values ( );

insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/12362280_190641884620556_639551846_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/12393755_723254394476792_400848664_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/12424482_238492343149669_2060155_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/12424486_569250403224209_82248247_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/12424760_517749775077129_1974996888_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/12445769_1735571386687833_2013398855_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/12479173_427718934103823_1903475183_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/12523812_1545666445747579_575968826_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/12531052_1158622054171950_364722683_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/12543348_545085352321133_186884229_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/12545332_1121099887911958_466683524_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/12545487_889726811125826_1435013501_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/12552232_522341464602207_255407309_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/12568119_958753847511385_453199096_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/12728398_514757982028482_1048542560_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/12729549_451978101658050_1227753345_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/12747756_840384639421504_971422023_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/13118158_1747002215520783_2017420756_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/13118243_1735510180017414_1350792796_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/13129168_1746081125670807_523454651_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/13166846_1161940920535753_677464039_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/13257144_776426505825915_1350847416_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/13266914_526410220876080_1715373666_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/13385727_994271997356656_174039867_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/13398406_1741614492781921_2064544719_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/13398584_619278718236950_1504697883_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/13414119_285228368497614_1530938735_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/13652109_1215660468478638_1571180651_n.jpg' );
insert into photos ( photo_url, photo_type ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/13423008_1799913646897274_1695069896_n.jpg', 'straight' );
insert into photos ( photo_url, photo_type ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/13651712_1725890777677989_1981882606_n.jpg', 'curly' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/13658650_1033647283393419_1626284633_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/13721251_157507241345404_353928644_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/13735884_1637934676496766_394793278_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/13739413_1664709493852551_1354859062_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/13743395_603847679794376_2057466120_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/13743628_1786636758221959_1302483595_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/14026658_1087790084640760_1047940591_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/14026682_1019328788180731_1392501157_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/14128837_1240510565973418_1021848541_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/14134668_1267488639960867_4211215687131070464_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/14134936_829690043832107_1141871059_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/14280469_293575031019294_1520769496_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/14474087_296436267410293_588016387583115264_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/14474094_346294749040485_8966238658445180928_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/14498916_352554838437460_3568946887572586496_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/14592117_188323184962187_341836210865438720_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/14659371_1113146795387702_4817996769650540544_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/14717538_1712849815699041_8159139274743087104_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/14722968_1462618223751519_6054390697367175168_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/14733232_333388793684718_5765030401219231744_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/15057124_1454051821276539_2649600358950633472_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/15253088_1555502851132484_6191086595727163392_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/15258540_1704960916484673_298797670737117184_a(1).jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/15275636_352652548429354_8983919625758572544_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/15337081_1867695366850385_8825837891230892032_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/15403317_1046114132178715_2682129895789690880_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/15538987_1230870783673964_7048988007952547840_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/15624467_368230276902520_2471417872534994944_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/15801847_1212731138816460_5589480008201535488_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/15802800_1841425316128345_7180015520144424960_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/15876828_1299396810122283_2437675166348607488_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/16110245_1890620397840202_2020666848730677248_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/16110588_369760556728481_2312002731050532864_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/16110598_1792463094347225_7135425788152643584_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/16110686_1349206831806727_4270654993670864896_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/16111004_1891486741094845_4649053913234800640_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/16228826_375661929458508_1097658057329999872_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/16230801_1311534472239470_4187833459969884160_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/16464764_168419006988739_7303227480347770880_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/16465260_247169165739493_6912062062554251264_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/16583386_759193467589573_556129257592455168_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/16788695_396246110735932_4506346525244260352_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/16906728_1405494649524734_3015739672325259264_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/17075801_1377659378974990_3420490075970994176_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/17127298_245867509216554_6531286866434457600_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/1723741_709278259171882_759504123_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/17267951_1892859324285238_3005797871007039488_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/17332401_110487739489394_9088835416122982400_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/17333166_1812584285657530_5559209589800435712_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/17494274_1902691216610017_2143967942390317056_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/17586775_270540323391631_9202215251292979200_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/17663428_117423605468040_340649867883839488_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/18011421_1840155656248312_6837133665131036672_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/18013595_175874879602118_4166040392183054336_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/18299137_1869129440076500_8561521686824878080_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/18513095_250332922037676_278141197325697024_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/18723675_327985630965949_6985561820710830080_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/18808782_484211841922161_5045544656683663360_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/18879253_225878457929064_2360960397537705984_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/18879318_391506657916991_282566791757037568_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/19120940_321453551613812_8795521898931814400_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/19367716_144394046130730_1764312508669100032_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/19533992_707987446069207_2877969190327681024_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/20065627_330694104040322_8600075361973174272_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/20225453_129592424312183_3262860610089517056_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/20838409_141889713073194_1113922364040544256_n.jpg' );
insert into photos ( photo_url, photo_type ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/21042584_1970832413141585_1899247899934457856_n.jpg', 'bridal' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/21690759_1763424487291541_5744436217718505472_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/21909426_1112694405500234_2470515890748129280_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/22344214_227246357810423_3309567095238295552_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/22580140_124495841529254_6960131263516639232_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/22802866_497606637275526_3097763875412508672_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/23098797_1839258373030891_6453784246002647040_n.jpg' );
insert into photos ( photo_url ) values ( 'https://s3.us-east-2.amazonaws.com/addeehunthair/ig-photos/23164838_124595108218870_2373645317158469632_n.jpg' );


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