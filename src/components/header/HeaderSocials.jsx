import React from 'react'
import {BsLinkedin} from 'react-icons/bs' 
import {BsInstagram} from 'react-icons/bs' 
import {BsGithub} from 'react-icons/bs' 

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/GurjotSinghAulakh" target="_blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/stylish_singh01/" target="_blank"><BsInstagram/></a>
        <a href="https://github.com/GurjotSinghAulakh" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials