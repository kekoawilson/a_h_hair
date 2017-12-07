import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { getAllProducts } from '../../ducks/reducer';
import GridListEx from '../GridList/GridList';


class Shop extends Component {

    componentDidMount() {
      this.props.getAllProducts();
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
            <h2>Welcome to the Shop</h2>
            {/* displayProducts */}
             <GridListEx/>
            
          </div>
      );
    }
  }
  
  let outputActions = {
    getAllProducts
  }

  function mapStateToProps( state ) {
    console.log( 'mapping to props', state );

    return { products: state.products }
  }

  export default connect( mapStateToProps, outputActions )( Shop );