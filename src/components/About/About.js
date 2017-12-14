import React, { Component } from 'react';
import 'reset-css'
import '../About/About.css'
import addee from'../../assets/ig-photos/18879253_225878457929064_2360960397537705984_n.jpg'

class About extends Component {
  render() {
    return (
      <div className="About">

        <section className='top-section'>

        <div className='about-me'>

        <p>Aliquam eu nulla feugiat, laoreet nisl vel, vehicula turpis. Suspendisse eleifend lobortis sollicitudin. Sed leo sem, maximus id arcu sit amet, dapibus dapibus eros. Nulla metus metus, consequat ut felis sit amet, commodo luctus ipsum. Pellentesque porttitor efficitur lorem eu tincidunt.</p>
        </div>

        <img className='addee' src={ addee } alt='addee'/>

        </section>

        <section className='middle-section'>
        
        <div className='appt-box'>
          <p>Call, Text, or book appointments online!</p>
          <p>*Please allow 24 hrs for response*</p>
        </div>
        <div className='contact-info'>

          <h2> Addee Hunt Hair</h2>
          <p> Address</p>
          <p> Herriman, UT</p>
          <p> Tel: 801.824.0344</p>
          <p> Hours:</p>
          <p> MTThF 8am - 5pm,</p>
          <p>W 10am-8pm,</p>
          <p>Sat 8am - 12pm </p>
        </div>


        </section>

        <section className='bottom-section'>
        <p>Google api again!</p>
        </section>
      </div>
    );
  }
}

export default About;