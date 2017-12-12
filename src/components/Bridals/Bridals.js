import React, { Component } from 'react';
// import bridal from '../../assets/ig-photos/22802866_497606637275526_3097763875412508672_n.jpg'
import { connect } from 'react-redux';
import { getAllPhotos } from '../../ducks/reducer';

class Bridals extends Component {

  componentDidMount() {
    this.props.getAllPhotos( 'bridal' )
  }

    render() {
      const displayBridals = this.props.photos.map( ( e, i ) => {
        return (
          <div key={ i }>
          <img src={ e.photo_url }/>
          </div>
        )
      } )
      return (
          <div className="Bridals">
            <h2>Welcome to the Bridals page!!</h2>
            { displayBridals }

            {/*<img src={ bridal }/>*/}
          </div>
      );
    }
  }
  
  let outputActions = {
    getAllPhotos
  }

  function mapStateToProps( state ) {
    return { photos: state.photos }
  }
  
  export default connect( mapStateToProps, outputActions )( Bridals );