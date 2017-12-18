import React, { Component } from 'react';
import { GridList, GridTile, IconButton } from 'material-ui';
import { connect } from 'react-redux';
import { removeFromShoppingCart } from '../../ducks/reducer';
import RemoveShoppingCart from 'material-ui/svg-icons/action/remove-shopping-cart';
import Delete from 'material-ui/svg-icons/action/delete';


class MatGridListCart extends Component {

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
      { this.props.shoppingCart.map( ( tile, index ) => {
        const actionButtons = (
          <div>
          <IconButton onClick={ () => this.props.removeFromShoppingCart( tile.product_name ) }><RemoveShoppingCart color="rgb(114, 249, 164)" /></IconButton>
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
  removeFromShoppingCart
}

function mapStateToProps( state ) {
  return { 
    shoppingCart: state.shoppingCart,
  }
}


export default connect( mapStateToProps, outputActions )( MatGridListCart );