import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'reset-css';
import '../About/About.css';
// import addee from '../../assets/ig-photos/18879253_225878457929064_2360960397537705984_n.jpg';
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
            <p className='media1, about-text'>Hi I’m Addee and I’ve been doing hair for almost 6 years. I have been doing hair in my home in Herriman for 2 years. I love that I get to do hair out of my home and run my own business. It’s beneficial to my clients because it’s convenient and flexible. My favorite part of my job is my clients! I have met such amazing people and I love that I get to chat with my clients all day. They make my job so much fun! I love color, cutting and updos. I started doing bridal hair 3 years ago and it has become one of my favorite things! I’ve been so lucky to work with the sweetest brides and bridal parties. I have an incredible husband that works hard so I can do what I love. I’m grateful to work in the beauty industry and help clients feel beautiful every day!</p>

          </div>



          <div className='appt-box'>

            <h2 className='media1'>Contact</h2>
            <h3 className='appt-text'>For inquiries or to book an appointment:</h3>
            <h3 className='appt-text'>Call or Text me at 801.824.0344 or book your appointments online by clicking <Link to='/booking'>Here!</Link></h3>

            <p className='appt-text'>*Please allow 24 hrs for response*</p>

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