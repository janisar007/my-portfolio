import React from 'react'

const ContactMeButton = ({btn}) => {
  return (
    <div className='flex items-center justify-end'>
     
        <span onClick={btn} className='bg-green-500 text-white rounded-md p-1 my-1 cursor-pointer hover:opacity-80'>Contact Me</span>
      
   
    </div>
  )
}

export default ContactMeButton