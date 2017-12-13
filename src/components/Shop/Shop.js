import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
// import { getAllProducts } from '../../ducks/reducer';
import MatGridListShop from '../MatUI/MatGridListShop';


class Shop extends Component {

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
            <h2>Welcome to the Shop</h2>
            {/* displayProducts */}
             <MatGridListShop/>
            
          </div>
      );
    }
  }
  
  // let outputActions = {
  //   getAllProducts
  // }

  function mapStateToProps( state ) {

    return { products: state.products }
  }

  export default connect( mapStateToProps )( Shop );