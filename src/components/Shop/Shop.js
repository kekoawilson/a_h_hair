import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getAllProducts } from '../../ducks/reducer';
import '../Shop/Shop.css'
import MatGridListShop from '../MatUI/MatGridListShop';
import SnackBar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton';

class Shop extends Component {
  constructor() {
    super()
    this.state = {
    open: false
    }
  }
  

  componentWillReceiveProps( nextProps ) {
    if (nextProps.loginMessage) {
      this.setState( {
        open: true
      })
    }
  }

    render() {
      // console.log( 'props', this.props, "\n\n" );
      // let displayProducts = this.props.products.map( ( e, i ) => {
      //   return (
      //     <div className='product-container' key={ i }>
      //       <h2>{ e.product_name }</h2>
      //       <img src={ e.product_img } alt='product'/>
      //       <button>Click</button>
      //     </div>
      //   )
      // } ) 

      

      return (
          <div className="Shop">
            <div className='bg-product'></div>

            {/* displayProducts */}
             <MatGridListShop/>
            <SnackBar
             open={ this.state.open }
             message='You Must Login To Add To Your Cart'
             autoHideDuration={ 4000 } />
             <div className='button-wrapper'>
             <Link to='/cart'><RaisedButton
            label='Go To Cart'
            /></Link>
             </div>
          </div>
      );
    }
  }
  
  // let outputActions = {
  //   getAllProducts
  // }

  function mapStateToProps( state ) {

    return { products: state.products, loginMessage: state.loginMessage }
  }

  export default connect( mapStateToProps )( Shop );