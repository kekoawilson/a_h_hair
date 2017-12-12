import React, { Component } from 'react';
import 'reset-css';
import { connect } from 'react-redux';
import { getAllPhotos } from '../../ducks/reducer';
import '../Dashboard/Dashboard.css';

class Dashboard extends Component {

  componentDidMount() {
    this.props.getAllPhotos( 'photos' )
  }


    render() {
      const displayPhoto = this.props.photos.map( ( e, i ) => {
        return (
            <img className={ `img-preview-${ i }` } src={ e.photo_url } key={ i } alt='hair'/>
        ) } )

      return (
          <div className="Dashboard">
            <div className='box-1'>{ displayPhoto[1] }</div>
            <div className='box-2'>{ displayPhoto[29] }</div>
            <div className='box-3'>{ displayPhoto[31] }</div>
            <div className='box-4'>{ displayPhoto[34] }</div>
            <div className='box-5'>{ displayPhoto[38] }</div>
            <div className='box-6'>{ displayPhoto[49] }</div>
            <div className='box-7'>{ displayPhoto[59] }</div>
            <div className='box-8'>{ displayPhoto[66] }</div>
            <div className='box-8'>{ displayPhoto[72] }</div>
            <div className='box-8'>{ displayPhoto[80] }</div>
            <div className='box-8'>{ displayPhoto[91] }</div>
            <div className='box-8'>{ displayPhoto[103] }</div>
            
            
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