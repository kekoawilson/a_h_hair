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

passport.use( new Auth0Strategy( {
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK_URL
}, function( acessToken, refreshToken, extraParams, profile, done ) {
    const db = app.get( 'db' )
    let userData = profile._json, // coming from google. Find out what it is for FB and other ones you want to use for login.
    auth_id = userData.user_id.split('|')[1]

    db.find_user( [auth_id] ).then( user => {
        if ( user[0] ) {
            return done( null, user[0].id )
        } else {
            db.create_user( [ userData.family_name, userData.given_name, userData.email, auth_id, userData.picture ] )
            .then( user => done( null, user[0].id ) )
        }
    } )

} ) )

// Endpoints -------------------

// Auth
app.get( '/auth', passport.authenticate( 'auth0' ) )
app.get( '/auth/callback', passport.authenticate( 'auth0', {
    successRedirect: 'http://localhost:3000/#/private',
    failureRedirect: 'http://localhost:3000/#/'
    } ) )

passport.serializeUser( ( ID, done ) => done( null, ID ) ) // saves user id to session

passport.deserializeUser( ( ID, done ) => {
    const db = app.get( 'db' )
    db.find_user_session( [ID] )
        .then( user => {
            done( null, user[0] )
        } )
} )

app.get( '/auth/verify', controller.verify ) // used for auth and also to get updated info for profile view

app.get( '/auth/logout', controller.logout )

// User

app.put( '/user/updateUser/:id', controller.updateUser )

// Shop

app.get( '/products', controller.getProducts ) 



// Test

app.get( '/users', controller.getUsers )

app.listen( process.env.SERVER_PORT, () => console.log( `<('.'<) ${process.env.SERVER_PORT} (>'.')> ` ))