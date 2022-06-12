import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>GURJOT SINGH AULAKH</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/gurjotsingh.aulakh.1/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/stylish_singh01/"><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/gurjotsinghaulakh/"><BsLinkedin/></a>
        <a href="https://github.com/GurjotSinghAulakh"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Future Solutions As. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer