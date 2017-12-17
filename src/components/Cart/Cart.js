import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromShoppingCart } from '../../ducks/reducer';
import '../Cart/Cart.css';
import Footer from '../../components/Footer/Footer';
import { RaisedButton } from 'material-ui';


const style = {
  width: 50,
  height: 50
}

class Cart extends Component {

  
  render() {
    const displayCart = this.props.shoppingCart.map( ( e, i ) => {
      console.log('cart', this.props.shoppingCart);
      return (
        <div className='cart-container' key={ i } >
        
          <p>{ e.product_name }</p>
          <img className='cart-img' src={ e.product_img }/>
          <RaisedButton 
          label="Remove from cart"
          onClick={ () => this.props.removeFromShoppingCart( e.product_name ) }
          style={ style }
          />
        </div>
      )
    })
      return (
          <div className="Cart">
            <h2>Viewing your cart! (its probably empty)</h2>
            <div className='cart-container-wrapper'>
            
            { displayCart }
            
            </div>
            <Footer/>
          </div>
      );
    }
  }

  let outputActions = {
    removeFromShoppingCart
  }
  
  function mapStateToProps( state ) {

    return { shoppingCart: state.shoppingCart }

  }
  
  export default connect( mapStateToProps, outputActions )( Cart );