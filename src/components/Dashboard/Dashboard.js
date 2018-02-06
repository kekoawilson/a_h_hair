import React, { Component } from 'react';
import 'reset-css';
import { connect } from 'react-redux';
import { getAllPhotos, getServicesAvailable } from '../../ducks/reducer';
import '../Dashboard/Dashboard.css';
// import Masonry from '../Masonry/Masonry'
import MatGridListDash from '../MatUI/MatGridListDash'
import MatDialog from './MatDialog'
// import model from '../../assets/ig-photos/18011421_1840155656248312_6837133665131036672_n.jpg'
// import logo from '../../assets/Addee_Hunt_Hair_Logo-3.svg'
import Footer from '../../components/Footer/Footer';


// const Tile = ( { src } ) => {
//   return (
//     <div className='tile'>
//       <img src={ src } alt='hair' />
//     </div>
//   )
// }

class Dashboard extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      brakePoints: [ 350, 500, 750 ],
      // imgId: [ 29, 31, 34, 38, 49, 59, 66, 72, 80, 91, 103, 100 ]
    }
  }


  render() {
    // const displayPhoto = this.props.photos.map( ( e, i ) => { 
    //   return (
    //     <img className={ `img-preview-${i}` } src={ e.photo_url } key={ i } alt='hair' />
    //   )
    // })

    // const mason = this.props.photos.map( ( pic, id ) => {
    //   return (
    //     <Tile src={ pic.photo_url } key={ id }/>
    //   ) 
    // } ) 
    // const showIt = this.props.photos.filter( ( tile, id ) => this.state.imgId.indexOf( id ) !== -1 )
    // .map( ( pic, id ) => {
    //   return (
    //     <Tile className={`img-${ id }`} src={ pic.photo_url } key={ id } />
    //   )
    // })



    return (
      <div className="Dashboard">
        { /*<div className='masonry-container'>
          <Masonry brakePoints={ this.state.brakePoints }>
            { showIt }
          </Masonry>
    </div> */}
          <div className='parallax-photo'>
            <div className='logo-container' > 
              {/*<img className='logo-dash' src={ logo } alt='logo'/>*/}
            </div>
          </div>
          <div className='top-section-dash'>
            <h2 className='dash-h2'>Your Dream hairstyle is just a call or click away!</h2>
            <p>Book now before it's too late!</p>
          </div>

          <MatGridListDash/>
          
          <div className='middle-section-dash'>
          <MatDialog/>
          </div>
          
          <div className='google-maps'>
          <iframe title='Herriman' frameBorder="0"  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJPdx1-X-DUocRHiAXdCHLPbI&key=AIzaSyAp6UxvZoXIkbENQW2kgjE0wLrmNPJqcgQ" allowFullScreen={ true }></iframe>          
          </div>
          

        <Footer/>


      </div>
    );
  }
}
// <div className='box-3'>{ displayPhoto[31] }</div>
// <div className='box-2'>{ displayPhoto[29] }</div>
// <div className='box-4'>{ displayPhoto[34] }</div>
// <div className='box-1'>{ displayPhoto[1] }</div>
// <div className='box-5'>{ displayPhoto[38] }</div>
// <div className='box-6'>{ displayPhoto[49] }</div>
// <div className='box-7'>{ displayPhoto[59] }</div>
// <div className='box-8'>{ displayPhoto[66] }</div>
// <div className='box-8'>{ displayPhoto[72] }</div>
// <div className='box-8'>{ displayPhoto[80] }</div>
// <div className='box-8'>{ displayPhoto[91] }</div>
// <div className='box-8'>{ displayPhoto[103] }</div>

let outputActions = {
  getAllPhotos, getServicesAvailable
}

function mapStateToProps( state ) {
  return { photos: state.photos, servicesList: state.services }
}

export default connect( mapStateToProps, outputActions )( Dashboard );