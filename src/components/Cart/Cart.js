import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../Cart/Cart.css';
import { removeFromShoppingCart } from '../../ducks/reducer';
import Footer from '../../components/Footer/Footer';
import { RaisedButton } from 'material-ui';
import MatGridCart from '../MatUI/MatGridListCart';


const style = {
  width: 50,
  height: 50
}

class Cart extends Component {


  render() {
    const displayCart = this.props.shoppingCart.map((e, i) => {
      console.log('cart', this.props.shoppingCart);
      return (
        <div className='cart-container' key={i} >
          <div className='cart-img-wrapper'>
            <img className='cart-img' src={e.product_img} />
          </div>
          <div className='cart-info'>
            <div className='prod-info'>
              <p>{e.product_name}</p>
              <p>{e.product_price}</p>
            </div>
            <div className='button-wrapper-cart'>
              <RaisedButton
                label="Remove"
                onClick={() => this.props.removeFromShoppingCart(e.product_name)}
                style={style}
              />
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="Cart">
        <div className='cart-container-wrapper'>

          {displayCart}
          {/*<MatGridCart/>*/}
        </div>
        <div className='button-wrapper'>
          <Link to='/shop'><RaisedButton
            className='c-shop'
            label='Continue Shopping' /></Link>
          <RaisedButton
            label='Checkout'
          />
        </div>
        <Footer />
      </div>
    );
  }
}

let outputActions = {
  removeFromShoppingCart
}

function mapStateToProps(state) {

  return { shoppingCart: state.shoppingCart }

}

export default connect(mapStateToProps, outputActions)(Cart);