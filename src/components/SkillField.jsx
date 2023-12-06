import React from 'react'
import TechTag from './TechTag'

const SkillField = ({field, technology}) => {
  return (
    <div className='w-[65%] md:w-[40%] lg:w-[40%] xl:w-[30%] h-[260px] md:h-[240px] lg:h-[250px] xl:h-[270px] rounded-lg m-2 bg-[#171721] border-2 border-[#8806CE] p-2 skill-shadow'>
        <span className='text-[#B1B2B3] text-[1.2rem] font-bold mx-2 my-4'>{field}</span>

        <div className='flex flex-wrap mt-3'>
            {technology.map((tag, index) => <TechTag key={index} tag={tag}/>)}
        </div>
    </div>
  )
}

export default SkillField