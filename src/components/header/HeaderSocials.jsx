import React from 'react'
import {BsLinkedin} from 'react-icons/bs' 
import {BsInstagram} from 'react-icons/bs' 
import {BsGithub} from 'react-icons/bs' 

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/gurjotsinghaulakh/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://www.instagram.com/stylish_singh01/" target="_blank" rel="noreferrer"><BsInstagram/></a>
        <a href="https://github.com/GurjotSinghAulakh" target="_blank" rel="noreferrer"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials