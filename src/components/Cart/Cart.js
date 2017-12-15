import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Cart/Cart.css';
import Footer from '../../components/Footer/Footer';
import { RaisedButton } from 'material-ui';



class Cart extends Component {
  
  render() {
    const displayCart = this.props.shoppingCart.map( ( e, i ) => {
      console.log('cart', this.props.shoppingCart);
      return (
        <div className='cart-container' key={ i } >
        
          <p>{ e.product_name }</p>
          <img className='cart-img' src={ e.product_img }/>
          <RaisedButton label="Remove from cart"/>
        </div>
      )
    })
      return (
          <div className="Cart">
            <h2>Viewing your cart! (its probably empty)</h2>
            { displayCart }
            <Footer/>
          </div>
      );
    }
  }

  
  function mapStateToProps( state ) {

    return { shoppingCart: state.shoppingCart }

  }
  
  export default connect( mapStateToProps )( Cart );