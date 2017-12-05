module.exports = {

    get_auth( req, res, next ) {
        passport.authenticate( 'auth0' )
    },

    get_auth_callback( req, res, next ) {
        passport.authenticate( 'auth0', {
            successRedirect: 'http://localhost:3000/private',
            failureRedirect: 'http://localhost:3000/#/'
        } )
    },
    
    verify( req, res, next ) {
        let response = req.user,
            status = 200
        
        !response && ( response = "LOGIN REQUIRED", status = 403) 
        
        res.status( status ).send( response )
    },

    logout ( req, res, next ) {
        req.logout()
        res.redirect( 'http://localhost:3000/#/' )
    }
}