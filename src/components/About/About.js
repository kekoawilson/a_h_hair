import React, { Component } from 'react';
import 'reset-css'
import '../About/About.css'

class About extends Component {
  render() {
    return (
      <div className="About">
        <h2>About me?!?</h2>

        <div className='contact'>
          <h2> Addee Hunt Hair</h2>
          <p> Address</p>
          <p> Herriman, UT</p>
          <p> Tel: 801.824.0344</p>
          <p> Hours:</p>
          <p> MTThF 8am - 5pm,</p>
          <p>W 10am-8pm,</p>
          <p>Sat 8am - 12pm </p>
        </div>
        <div className='appt'>
          <p>Call, Text, or book appointments online!</p>
          <p>*Please allow 24 hrs for response*</p>
        </div>

        <div className='afooter'>
          <div className='social'>
            <a href='https://www.facebook.com/Addee-Hunt-Hair-758418760980428/'> FB </a>
            <a href='https://www.instagram.com/addeehunthair/'> IG </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;