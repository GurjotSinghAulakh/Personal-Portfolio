import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avtar1.jpeg'
import AVTR2 from '../../assets/avtar2.jpg'
import AVTR3 from '../../assets/avtar3.jpeg'
import AVTR4 from '../../assets/avtar4.jpeg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper core and required modules
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Mortaza',
    review: "We became friends during the introductory week, where we worked together on the innovation camp assignment. I quickly realized that he was a kind and hard working guy with a lot of motivation. After this, me and Gurjot have become good friends and worked together with all compulsory tasks together in school. In addition, we have worked together in many of the jobs we have had in common together such as teaching assistant in programming, student ambassador for TKD oslomet and Secundo AS. Gurjot is a generous man, who puts the needs of others before his own. He works well in teams, communicates well, does the work he undertakes and produces good results. He does his best to help and uplift others, and does not hesitate to share experiences and knowledge he has with others :) I'm glad I got to know you, and look forward to working on many more projects together.",
  }, 
  {
    avatar: AVTR2,
    name: 'Elias',
    review: 'Based on my observations, I can conclude that Gurjot work exceptionally hard and love working in challenging conditions. He are responsible, dependable, and like working in a group setting. Gurjot are an extremely helpful person who spends time assisting others. Furthermore, I perceive that he have a natural ability to lead a group.',
  }, 
  {
    avatar: AVTR3,
    name: 'Tharusan',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut dolore provident voluptatibus eum iste atque eius. Libero ipsam similique, sit tempora quaerat cum hic laudantium error repellat ea eligendi',
  }, 
  {
    avatar: AVTR4,
    name: 'Arman ',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut dolore provident voluptatibus eum iste atque eius. Libero ipsam similique, sit tempora quaerat cum hic laudantium error repellat ea eligendi',
  } 
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // Install Swiper Modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar}/>
            </div>
            <h5 className='client_name'>{name}</h5>
            <small className='client__review'>{review}</small>
          </SwiperSlide>
          )
        })
      }

      </Swiper>
    </section>
  )
}

export default Testimonials