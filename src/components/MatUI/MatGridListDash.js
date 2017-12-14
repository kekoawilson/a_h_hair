import { GridList, GridTile } from 'material-ui';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPhotos } from '../../ducks/reducer';


class MatGridListDash extends Component {
    constructor() {
        super()

        this.state = {
            imgId: [ 31, 29, 34, 38, 49, 59, 66, 72, 80, 91, 103, 100 ]
        }
    }

  componentDidMount() {
    this.props.getAllPhotos( 'photos' )
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
        flexWrap: 'nowrap',
        overflowX: 'auto',
      },
      titleStyle: {
        color: 'rgb( 0, 188, 212 )',
      },
    };

    let showThis = this.props.photos.filter( ( tile, id ) => this.state.imgId.indexOf( id ) !== -1 )
    .map( ( tile, index ) => {
        return (
            <GridTile
            key={ tile.photo_id }
            // title={ tile.photo_type }
            
            titleStyle={ styles.titleStyle }
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            rows={ 1 }
            cols={ 1.1 }
            >
            <img src={ tile.photo_url } alt='hair' />
            </GridTile>
          )
    })
    return (
      <div style={ styles.root } >
      <GridList style={ styles.gridList } cols={ 2.2 }>
        { showThis }
      </GridList>
      </div>
    )
  }

}

let outputActions = {
  getAllPhotos
}

function mapStateToProps( state ) {
  return { 
    photos: state.photos,
  }
}


export default connect( mapStateToProps, outputActions )( MatGridListDash );