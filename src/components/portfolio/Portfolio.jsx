import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio-image1.jpg'
import IMG2 from '../../assets/portfolio-image2.jpg'
import IMG3 from '../../assets/portfolio-image3.jpg'
import IMG4 from '../../assets/portfolio-image4.jpg'
import IMG5 from '../../assets/portfolio-image5.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Web Project Using HTML5 & CSS3',
    github: 'https://github.com/GurjotSinghAulakh/Final-Web-Project',
    demo: 'https://gurjotsinghaulakh.github.io/Final-Web-Project/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Software Testing',
    github: 'https://github.com/GurjotSinghAulakh/TestingAvProgramvare',
    demo: 'https://software-testing-java.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Web Development Using Spring Boot, Database & Bootstrap 5',
    github: 'https://github.com/GurjotSinghAulakh/webProg3-Spring',
    demo: 'https://webprog3-project-spring.herokuapp.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Web Scraper API Using Python',
    github: 'https://github.com/GurjotSinghAulakh/Web-Scraper-API',
    demo: '#'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Personal Portfolio Using HTML5, CSS3 & JavaScript (REACT)',
    github: 'https://github.com/GurjotSinghAulakh/Personal-Portfolio',
    demo: '#'
  }
  /*{
    id: 6,
    image: IMG2,
    title: 'Hello 6',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  }*/
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio