require('dotenv').config()
const express = require('express')
    , cors = require('cors')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')
    , controller = require('../server/controllers/controller')

const app = express()
app.use( bodyParser.json() )
app.use( cors() )

// Massive ----------------------

massive( process.env.DB_CONNECTION ).then( db => app.set( 'db', db ) )

// Sessions ---------------------

app.use( session( {
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
        maxAge: 5400
    }
}))
//app.use( express.static( __dirname + '/../build' ) )
app.use( passport.initialize() )
app.use( passport.session() )

// Strategy -------------------

// passport.use( new Auth0Strategy( {
//     domain: process.env.AUTH_DOMAIN,
//     clientID: process.env.AUTH_CLIENT_ID,
//     clientSecret: process.env.AUTH_CLIENT_SECRET,
//     callbackURL: process.env.AUTH_CALLBACK_URL
// }, function( acessToken, refreshToken, extraParams, profile, done ) {
//     const db = app.get( 'db' )
//     let userData = profile._json, // coming from google. Find out what it is for FB and other ones you want to use for login.
//     auth_id = userData.user_id.split('|')[1]

// }))

// Endpoints -------------------

// Auth
app.get( '/auth', controller.get_auth )
app.get( '/auth/callback', controller.get_auth_callback)

passport.serializeUser( ( ID, done ) => done( null, ID ) ) // saves user id to session

passport.deserializeUser( ( ID, done ) => {
    const db = app.get( 'db' )
    db.find_user_by_session( [ID] )
        .then( user => {
            done( null, user[0] )
        }) // remember to make find_user_by_session.sql query
})

app.get( '/auth/verify', controller.verify ) // used for auth and also to get info for profile view

app.get( '/auth/logout', controller.logout )

// User

app.put ( '/user/updateUser/:id', ) // finish updating user

// Shop

app.get ( '/products', ( req, res, next ) => {
    let status = 200,
        db = app.get( 'db' )

    db.get_products( [req.body] ).then( products => {
        res.status( status ).send( products )
    }) // make get_products query

    
}) 

app.listen( process.env.SERVER_PORT, () => console.log( `<('.'<) ${process.env.SERVER_PORT} (>'.')> ` ))