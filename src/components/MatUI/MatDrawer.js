// import React, { Component } from 'react';

// import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';

// class Menu extends Component {
//     constructor( props ) {
//         super( props )

//         this.state = {
//             open: false
//         }
//     }

//     handleToggle = () => this.setState( { open: !this.state.open } )
//     handleClose = () => this.setState( { open: false } )

//     render() {
//         return( 
//             <div>
                
//                 <Drawer 
//                 docked={ false }
//                 width={ 200 }
//                 open={ this.props.open }
//                 onRequestChange={ open => this.setState( { open } ) }
//                 >
//                 <MenuItem>Home</MenuItem>
//                 <MenuItem>Shop</MenuItem>
//                 <MenuItem>Bridals</MenuItem>
//                 <MenuItem>About</MenuItem>
//                 <MenuItem>Book Appointment</MenuItem>
//                 </Drawer>

//             </div>
//         )
//     }
// }

// export default Menu;