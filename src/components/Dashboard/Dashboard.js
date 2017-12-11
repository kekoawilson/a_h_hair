import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPhotos } from '../../ducks/reducer';

class Dashboard extends Component {
  constructor( props ) {
    super( props )
  }

  componentDidMount() {
    this.props.getAllPhotos( 'photos' )
  }


    render() {
      const displayPhotos = this.props.photos.map( ( e, i ) => {
        return (
          <div key={ i }>
          <img src={ e.photo_url }/>
          </div>
        )
      } )
      return (
          <div className="Dashboard">
            <h2>Welcome to the Dashboard</h2>
            { displayPhotos }
            
            
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
  
  export default connect( mapStateToProps, outputActions )( Dashboard );