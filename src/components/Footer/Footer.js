import React from 'react'
import '../Footer/Footer.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/Addee_Hunt_Hair_Logo-3.svg'



const Footer = () => {

        return (
            <div className='footer'>
                <div className='fb'>
                    <a href='https://www.facebook.com/Addee-Hunt-Hair-758418760980428/'><i className="fa fa-facebook" aria-hidden="true"></i></a>
                </div>
                <div className='logo-box'>
                    <Link to='/' ><img className='logo-foot' src={ logo } /></Link>
                </div>
                <div className='ig'>
                    <a href='https://www.instagram.com/addeehunthair/'><i className="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>
        )
}

export default Footer;