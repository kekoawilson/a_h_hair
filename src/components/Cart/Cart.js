import React, { Component } from 'react';
import { connect } from 'react-redux';


class Cart extends Component {
  
  render() {
    const displayCart = this.props.shoppingCart.map( ( e, i ) => {
      return (
        <div key={ i } >
        <ul>
          <li>{ e.product_name }</li>
          <li>{ e.product_img }</li>
        </ul>
        </div>
      )
    })
      return (
          <div className="Cart">
            <h2>Viewing your cart! (its probably empty)</h2>
            { displayCart }
            
          </div>
      );
    }
  }

  
  function mapStateToProps( state ) {

    return { shoppingCart: state.shoppingCart }

  }
  
  export default connect( mapStateToProps )( Cart );