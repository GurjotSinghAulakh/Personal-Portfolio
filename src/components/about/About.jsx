import React from 'react'
import './about.css'
import ME from '../../assets/img2.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>25+</small>
            </article>
          </div>

          <p>
             I am a 21 year old student who is passionate about learning, with never giving up attitude.
             I am a believer in teamwork ethics and professional exposure. I can trust to meet the organization's goals.
             I am motivated to achieve great success and make contributions to help people. I am currently taking a
             Bachelor in Computer Science from OsloMet.

            <br/><br/>
             In my free time I like to play chess, volleyball, table tennis and do coding.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About