import React from 'react'
import Skills from './Skills'
import MiniProjects from './MiniProjects'

const More = () => {
  return (
    <div className='flex h-full flex-col lg:flex-row mt-3'>
        <Skills/>
        <MiniProjects/>
    </div>
  )
}

export default More