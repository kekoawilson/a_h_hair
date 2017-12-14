import React, { Component } from 'react';
// import bridal from '../../assets/ig-photos/22802866_497606637275526_3097763875412508672_n.jpg'
import { connect } from 'react-redux';
import { getAllPhotos } from '../../ducks/reducer';
import Footer from '../../components/Footer/Footer';
import '../Bridals/Bridals.css';


class Bridals extends Component {

  componentDidMount() {
    this.props.getAllPhotos( 'bridal' )
  }

    render() {
      const displayBridals = this.props.photos.map( ( e, i ) => {
        return (
          <div className='bridal-container' key={ i }>
          
          <img className='bridal-pic' src={ e.photo_url } alt='bridals'/>
          
          </div>
        )
      } )
      return (
          <div className="Bridals">
            <div className='bg-image' > 
            </div>

            { displayBridals }

            {/*<img src={ bridal }/>*/}
            <Footer/>
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