module.exports = {
    
    verify( req, res, next ) {
        let response = req.user,
            status = 200
        
        !response && ( response = "LOGIN REQUIRED", status = 403) 
        
        res.status( status ).send( response ) // not finished
    },

    logout ( req, res, next ) {
        req.logout()
        res.redirect( 'http://localhost:3000/#/' )
    },

    updateUser ( req, res, next ) {
        const db = req.app.get( 'db' ),
        update = req.body

        db.update_user( [
            update.name_last,
            update.name_first,
            update.email,
            update.phone
        ] )
    },

    getProducts( req, res, next ) {
        const db = req.app.get( 'db' )

        db.get_products( [req.body] ).then( products => res.send( products ) )
    },

    getUsers( req, res, next ) {
        const db = req.app.get( 'db' )

        db.get_users( [req.body] ).then( users => res.send( users ) )
    },

    checkAdmin( req, res, next ) {
        if ( req.user.type === 'admin' ) {
            next()
        } else {
            req.redirect( 'http://localhost:3000/#/' )
        }
    }

}