import React from 'react'

const Box = ({showBox, setShowBox}) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center ${!showBox ? 'hidden' : ''}`}>
        <div className='bg-[#171721] rounded-lg flex flex-col p-4 h-[12rem] w-[16rem] items-center justify-center gap-8 border'>
            <p className='text-white text-[1.1rem]'>You are already Here.</p>
            <button onClick={() => setShowBox(false)} className='bg-[#306EE8] rounded-lg px-2 py-1 text-white hover:opacity-80'>Close</button>
        </div>
    </div>
  )
}

export default Box