import React, { Component } from 'react';
import 'reset-css';
import { connect } from 'react-redux';
import { getAllPhotos } from '../../ducks/reducer';
import '../Dashboard/Dashboard.css';
// import Masonry from '../Masonry/Masonry'
import MatGridListDash from '../MatUI/MatGridListDash'
// import model from '../../assets/ig-photos/18011421_1840155656248312_6837133665131036672_n.jpg'
import fb from '../../assets/001-facebook-logo-button.svg'
import ig from '../../assets/002-instagram-logo.svg'
import logo from '../../assets/Addee_Hunt_Hair_Logo-3.svg'

const Tile = ( { src } ) => {
  return (
    <div className='tile'>
      <img src={ src } alt='hair' />
    </div>
  )
}

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
            <div> 
            <img className='logo' src={ logo }/>
            </div>
          </div>
          <div className='top-section'>
            <h2>Your Dream haircut</h2>
            

          
          </div>
          <MatGridListDash/>
          <div className='middle-section'>
          
          </div>

          <div className='footer'>
            <div className='fb'>
            <a href='https://www.facebook.com/Addee-Hunt-Hair-758418760980428/'><i class="fa fa-facebook" aria-hidden="true"></i></a>
            </div>
            <div className='ig'>
            <a href='https://www.instagram.com/addeehunthair/'><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </div>
          </div>




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
  getAllPhotos
}

function mapStateToProps( state ) {
  return { photos: state.photos }
}

export default connect( mapStateToProps, outputActions )( Dashboard );