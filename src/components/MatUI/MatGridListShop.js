import { GridList, GridTile, IconButton } from 'material-ui';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToShoppingCart, getAllProducts, removeFromShoppingCart } from '../../ducks/reducer';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import Delete from 'material-ui/svg-icons/action/delete';


class MatGridListShop extends Component {
  
  componentDidMount() {
    this.props.getAllProducts() 
  }

  render() {
    const styles = {
      root: {
        display: 'flex',
        flexwrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        display: 'flex',
        flexWrap: 'wrap',
        overflowX: 'auto',
      },
      titleStyle: {
        color: 'rgb( 0, 188, 212 )',
      },
    };

    
    return (
      <div style={ styles.root } >
      <GridList style={ styles.gridList } cols={ 2.2 }>
      { this.props.products.map( ( tile, index ) => {
        const actionButtons = (
          <div>
          <IconButton onClick={ () => this.props.addToShoppingCart( tile ) }><AddShoppingCart color="rgb(66, 244, 244)" /></IconButton>
          <IconButton onClick={ () => this.props.removeFromShoppingCart( tile.product_name ) }><Delete color="rgb(114, 249, 164)" /></IconButton>
          </div>
        )
        return (
          <GridTile
          key={ tile.product_id }
          title={ tile.product_name }
          actionIcon={ actionButtons }
          titleStyle={ styles.titleStyle }
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          rows={ 1 }
          cols={ 1.1 }
          >
          <img src={ tile.product_img } alt='store product' />
          </GridTile>
        )
      } ) }
      </GridList>
      </div>
    )
  }

}

let outputActions = {
  addToShoppingCart,
  getAllProducts,
  removeFromShoppingCart
}

function mapStateToProps( state ) {
  return { 
    shoppingCart: state.shoppingCart,
    products: state.products
  }
}


export default connect( mapStateToProps, outputActions )( MatGridListShop );


// const tilesData = [
//   {
//     img: 'http://www.material-ui.com/images/grid-list/morning-819362_640.jpg',
//     title: 'Bfast',
//     author: 'jill111',
//   },
//   {
//     img: 'http://www.material-ui.com/images/grid-list/honey-823614_640.jpg',
//     title: 'Tasty',
//     author: 'pashminu',
//   },
//   {
//     img: 'http://www.material-ui.com/images/grid-list/vegetables-790022_640.jpg',
//     title: 'Camera',
//     author: 'Danson67',
//   },
//   {
//     img: 'http://www.material-ui.com/images/grid-list/hats-829509_640.jpg',
//     title: 'Morning',
//     author: 'fancycrave1',
//   },
//   {
//     img: 'http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg',
//     title: 'Hats',
//     author: 'Hans',
//   },
//   {
//     img: 'http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg',
//     title: 'Honey',
//     author: 'fancycravel',
//   },
//   {
//     img: 'http://www.material-ui.com/images/grid-list/burger-827309_640.jpg',
//     title: 'Veg',
//     author: 'jill111',
//   },
//   {
//     img: 'https://static.alliedshirts.com/content/AlliedShirts/Images/Product/21.png?v=67374B32494C65774C56673D',
//     title: 'Wat',
//     author: 'BkrmadtyaKarki',
//   }
// ]