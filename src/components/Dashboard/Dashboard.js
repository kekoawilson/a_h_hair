import React, { Component } from 'react';
import 'reset-css';
import { connect } from 'react-redux';
import { getAllPhotos } from '../../ducks/reducer';
import '../Dashboard/Dashboard.css';
import Masonry from '../Masonry/Masonry'

const Tile = ( { src } ) => {
  return (
    <div className='tile'>
    <img src={ src } />
    </div>
  )
}

class Dashboard extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      brakePoints: [350, 500, 750],
      imgId: [ 29, 31, 34, 38, 49, 59, 66, 72, 80, 91, 103, 1]
    }
  }

  componentDidMount() {
    this.props.getAllPhotos( 'photos' );
  //   let brakePoints = [350, 500, 750];
  //   for(let i = 0; i < imgId.length; i++){
  //     const ih = 200 + Math.floor(Math.random()*10)*15;
  //     images.push("https://unsplash.it/250/" + ih + "?image=" + imgId[i]);
  //   }
  //   this.setState( {
  //     images
  //   } )


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
    const showIt = this.props.photos.filter( ( e, id ) => this.state.imgId.indexOf( id ) !== -1).map( ( pic, id ) => {
        return (
          <Tile src={ pic.photo_url } key={ id }/>
        ) 
      } ) 
    
    

    return (
      <div className="Dashboard">
      <div className='masonry-container'>
      <Masonry brakePoints={ this.state.brakePoints }>
      { showIt }
      </Masonry>
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