import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'reset-css';
import '../About/About.css';
import addee from '../../assets/ig-photos/18879253_225878457929064_2360960397537705984_n.jpg';
import addee2 from '../../assets/IMG_1099_edited.jpeg';
import Footer from '../../components/Footer/Footer';


class About extends Component {
  render() {
    return (
      <div className="About">

        <section className='top-section-about'>
          <div className='color'>
          </div>
          <img className='addee2' src={addee2} alt='addee' />

          </section>
          
          <section className='middle-section-about'>

          <div className='about-me'>

          <h2 className='media1'>About Me</h2>
          <p className='media1'>Lorem ipsum dolor amet affogato ugh yuccie, four dollar toast poke raclette paleo chillwave. Lumber succulents gentrify kombucha 90's YOLO. Flannel hoodie gochujang prism irony. Hammock you probably haven't heard of them hashtag migas, craft beer biodiesel occupy readymade woke vinyl tumblr gastropub swag. Woke gentrify marfa paleo brooklyn mumblecore pabst XOXO blue bottle.</p>
        </div>


          
          <div className='appt-box'>
          
          <h2 className='media1'>Contact</h2>
            <h3 className='media1'>For inquiries or to book an appointment:
          Call or Text me at 801.824.0344 or book your appointments online by clicking <Link to='/booking'>Here!</Link></h3>

            <p className='media1'>*Please allow 24 hrs for response*</p>

          </div>

        </section>

        <section className='bottom-section-about'>
          <h3 className='bs-location'>Located In Herriman, Utah</h3>

          <iframe className='iframe-about' title='Herriman' frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJPdx1-X-DUocRHiAXdCHLPbI&key=AIzaSyAp6UxvZoXIkbENQW2kgjE0wLrmNPJqcgQ" allowFullScreen={true}></iframe>

          <div className='contact-info'>
            <h2> Addee Hunt Hair </h2>
            <h3> Tel: 801.824.0344 </h3>
            <h2> Hours </h2>
            <h3> Monday 8am - 5pm </h3>
            <h3> Tuesday 8am - 5pm </h3>
            <h3> Wednesday 10am-8pm </h3>
            <h3> Thursday 8am - 5pm </h3>
            <h3> Friday 8am - 5pm </h3>
            <h3> Sat 8am - 12pm </h3>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default About;