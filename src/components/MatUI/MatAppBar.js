import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Drawer, MenuItem, IconButton } from 'material-ui';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import Person from 'material-ui/svg-icons/social/person';
// import { logo } from '../../assets/Addee_Hunt_Hair_Logo-3.svg';

const style = {
    fontFamily: "Satisfy"
}
class MatAppBar extends Component {
    constructor( props ) {
        super( props )

        this.state = {
            open: false
        }

        this.goToAuth = this.goToAuth.bind(this)
        this.goToShop = this.goToShop.bind(this)
        this.openDrawer = this.openDrawer.bind(this)
        this.closeDrawer = this.closeDrawer.bind(this)
        
    }

    goToAuth = () => window.location.replace(process.env.REACT_APP_LOGIN)

    goToShop = () => window.location.replace('http://localhost:3000/#/cart') // what should i put here?

    openDrawer = () => this.setState( { open: !this.state.open } )

    closeDrawer = () => this.setState( { open: false } )

    render() {

        const rightButtons = (
            <div >
                {/*<IconButton >{logo}</IconButton>*/}
                {/*<Avatar src='../../assets/logo.png' size={ 50 }/>*/} {/* some kind of getStyles magic here */}
                <IconButton onClick={ this.goToShop }><ShoppingCart/></IconButton>
                <IconButton onClick={ this.goToAuth }><Person/></IconButton>
            </div>
        )

        return (
            <div>
            <Drawer 
            docked={ false }
            width={ 200 }
            open={ this.state.open }
            onRequestChange={ open => this.setState( { open } ) }
            >
            <Link to='/'><MenuItem onClick={ this.closeDrawer }>Home</MenuItem></Link>
            <Link to='/bridals'><MenuItem onClick={ this.closeDrawer }>Bridals</MenuItem></Link>
            <Link to='/gallery'><MenuItem onClick={ this.closeDrawer }>Gallery</MenuItem></Link>
            <Link to='/about'><MenuItem onClick={ this.closeDrawer }>About</MenuItem></Link>
            {/*<Link to='/shop'><MenuItem onClick={ this.closeDrawer }>Shop</MenuItem></Link>*/}
            <Link to='/booking'><MenuItem onClick={ this.closeDrawer }>Book Appt</MenuItem></Link>
            
            
            </Drawer>
            <AppBar
            // img='../../assets/logo.png'
            title='Addee Hunt Hair'
            titleStyle={ style }
            showMenuIconButton={ true } // Shows the hamburger menu on the left of the title
            iconElementRight={ rightButtons }
            onLeftIconButtonClick={ this.openDrawer } 
            
            />
            </div>
        )
    }
}

export default MatAppBar