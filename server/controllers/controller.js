module.exports = {
    
    verify( req, res, next ) {
        console.log('verify', req.user)
        let response = req.user,
            status = 200,
            db = req.app.get( 'db' )
        if( !req.user ) {
            console.log('!req.user', req.user)
           res.status( 401 ).send( 'LOGIN REQUIRED' )
        } else {
            db.find_user_session( [response.id] ).then( user => { res.locals.user = user; next() })
        }
        
    },

    logout ( req, res, next ) {
        req.logout()
        res.redirect( process.env.REACT_APP_LOGOUT )
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
        if (res.locals.user){
            db.get_services( [req.body] ).then( services => res.send( services ) )
        } else {
            res.status(403).send('Login please')
        }
    },

    getServicesAvailable( req, res, next ) {
        let db = req.app.get( 'db' )
            db.get_services( [req.body] ).then( services => res.send( services ) )
    },

    getUsers( req, res, next ) {
        let db = req.app.get( 'db' )

        db.get_users( [req.body] ).then( users => {
            console.log('users controller', users );
            res.send( users ) })
    },

    getAppts( req, res, next ) {
        let db = req.app.get( 'db' )

        db.get_appointments( [req.body] ).then( appts => res.send( appts ) )
    },

    addAppt( req, res, next ) {
        // console.log('req',req.user );
        let db = req.app.get( 'db' ),
            { date, time, service } = req.body,
            { id, email, name_last, name_first } = req.user,
            serviceList = service.map( ( e, i ) => e.services + ' ' + e.price ).join( ', ' ),
            combinedName = ( name_first + ' ' + name_last )
            

        db.add_appointment( [id, combinedName, date, time, serviceList, email] ).then( appt => res.send( appt ) )
    },

    getPhotos( req, res, next ) {
        let db = req.app.get( 'db' )
        let photoType = req.url.split( '/' )[2]
        if ( photoType === 'photos' ) {
            db.get_photos( [req.body] ).then( photos => res.send( photos ) )
        } else {
            db.get_photos_by_type( [photoType] ).then( photos => res.send( photos ) ) // $1 = bridal
        }

    },

    checkAdmin( req, res, next ) {
        console.log('req.user admin', req.user);
        if ( res.locals.user && res.locals.user.user_type === 'admin' ) {
            res.status( 200 ).send( res.locals.user )
        } else {
            res.status( 200 ).send( res.locals.user )
            }
    }

}