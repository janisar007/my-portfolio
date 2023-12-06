import React from 'react'
import { FaHtml5 } from "react-icons/fa";

const TechTag = ({tag}) => {
  return (
    <span className='text-[#84858A] border-[1px] rounded-md p-1 m-1 lg:m-1 text-[0.89rem] sm:text-[1rem] md:text-[1rem] flex items-center'>
        <div className='text-[#8806CE]'>
            <tag.logo />
        </div>
        <p className='ml-1'>{tag.tech}</p>
       
        </span>
  )
}

export default TechTag