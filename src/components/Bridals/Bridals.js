import React, { Component } from 'react';
import bridal from '../../assets/ig-photos/22802866_497606637275526_3097763875412508672_n.jpg'

class Bridals extends Component {
    render() {
      return (
          <div className="Bridals">
            <h2>Welcome to the Bridals page!!</h2>
            <img src={ bridal }/>
          </div>
      );
    }
  }
  
  export default Bridals;