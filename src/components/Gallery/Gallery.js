import React, { Component } from 'react';
import Masonry from '../Masonry/Masonry';
import { connect } from 'react-redux';
import { getAllPhotos } from '../../ducks/reducer'

const Tile = ( { src } ) => {
    return (
      <div className='tile'>
      <img src={ src } />
      </div>
    )
  }

class Gallery extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            brakePoints: [350, 500, 750]
        }
    }

    componentDidMount() {
        this.props.getAllPhotos( 'photos' )
    }

    render() {
        const mason = this.props.photos.map( ( pic, id ) => {
          return (
            <Tile src={ pic.photo_url } key={ id }/>
          ) 
        } ) 
        return (
            <div className='masonry-container'>
            <Masonry brakePoints={ this.state.brakePoints }>
            { mason }
            </Masonry>
            </div>
        )
    }
}

let outputActions = {
    getAllPhotos
}

function mapStateToProps( state ) {
    return { photos: state.photos }
}

export default connect( mapStateToProps, outputActions )( Gallery );