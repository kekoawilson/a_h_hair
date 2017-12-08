module.exports = {
    
    verify( req, res, next ) {
        let response = req.user,
            status = 200,
            db = req.app.get( 'db' )
        
        if( !response ) {
          return res.status( 401 ).send( 'LOGIN REQUIRED' )
        }
        
        db.find_user_session( [response.id] ).then( user => res.send( user ) )
    },

    logout ( req, res, next ) {
        req.logout()
        res.redirect( 'http://localhost:3000/#/' )
    },

    updateUser ( req, res, next ) {
        let user, status = 200

        db.find_user_session( [ req.user ] ).then( obj => {
            user = obj.data[0]
        } ).catch( err => user = err )

        let updatedInfo = req.body // coming from front end state. when pushed to backend it becomes req.body.
            , updatedUser = Object.assign( {}, user, updatedInfo )

        db.update_user( [...updateUser] ).then( obj => {
            user = obj.data[0]
        } ).catch( err => user = err)

        !user.id && ( status = 404 )
        res.status( status ).send( user )
    },

    getProducts( req, res, next ) {
        let db = req.app.get( 'db' )

        db.get_products( [req.body] ).then( products => res.send( products ) )
    },

    getServices( req, res, next ) {
        let db = req.app.get( 'db' )
    
        db.get_services( [req.body] ).then( services => res.send( services ) )
    },

    getUsers( req, res, next ) {
        let db = req.app.get( 'db' )

        db.get_users( [req.body] ).then( users => res.send( users ) )
    },

    getAppts( req, res, next ) {
        let db = req.app.get( 'db' )

        db.get_appointments( [req.body] ).then( appts => res.send( appts ) )
    },

    checkAdmin( req, res, next ) {
        if ( req.user.type === 'admin' ) {
            next()
        } else {
            req.redirect( 'http://localhost:3000/#/' )
        }
    }

}