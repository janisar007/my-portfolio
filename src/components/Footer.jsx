import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FaGithub } from "react-icons/fa";

import { BsFillFileEarmarkPersonFill } from "react-icons/bs";


//insta
//https://www.instagram.com/eat.code.repeat

//twitter
//https://twitter.com/eat_code_repeat

//linkedin
//https://www.linkedin.com/in/janisar-akhtar-13a8a724b/

//github
//https://github.com/janisar007


const Footer = () => {

  const instaLink = "https://www.instagram.com/eat.code.repeat";
  const twitterLink = "https://twitter.com/eat_code_repeat";
  const linkedinLink = "https://www.linkedin.com/in/janisar-akhtar-13a8a724b/";
  const resumeLink = "https://docs.google.com/document/d/1uih0_hfhpum4WgWBbFxECSZSAtk2L17k4HHzEbXt_wo/edit";
  const githubLink = "https://github.com/janisar007";

  const openNewTab = (webLink) => {        
    window.open(webLink, '_blank');
  };

  return (
    <div className='flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 gap-2 lg:gap-4'>
        <p className='text-[#8806CE] text-[1.1rem] md:text-[1.2rem] lg:text-[1.4rem] font-semibold'>Janisar Akhtar</p>

        <div className='flex gap-6 md:gap-8 lg:gap-12 text-white text-[1.1rem] md:text-[1.2rem] lg:text-[1.5rem]'>
            <span onClick={() => openNewTab(linkedinLink)} className='hover:text-[#9600FF]'><FaLinkedin/></span>
            <span onClick={() => openNewTab(instaLink)} className='hover:text-[#9600FF]'><FaInstagram/></span>
            <span onClick={() => openNewTab(twitterLink)} className='hover:text-[#9600FF]'><FaXTwitter/></span>
            <span onClick={() => openNewTab(githubLink)} className='hover:text-[#9600FF]'><FaGithub/></span>
            <span onClick={() => openNewTab(resumeLink)} className='hover:text-[#9600FF]'><BsFillFileEarmarkPersonFill/></span>
        </div>

        <p className='text-white mt-6 text-[0.85rem] md:text-[0.9rem] lg:text-[1rem]'>© 2023 Janisar Akhtar. All rights reserved.</p>
    </div>
  )
}

export default Footer