import React from 'react'

const Institute = ({info}) => {
  return (
    <div className='h-full border-[0.1rem] border-[#844CE6] w-[300px] lg:w-[650px] rounded-lg p-3 flex flex-col gap-2 education-shadow'>
        <div className='flex'>
            <div className='w-[50px] h-[50px] bg-cover bg-center rounded-lg ' style={{ backgroundImage: `url(${info.img})` }}></div>

            <div className='ml-2'>
                <div className='text-[16px] md:text-[18px] text-[#f2f3f499]'>{info.name}</div>
                <div className='text-[12px] md:text-[14px] text-[#b1b2b399]'>{info.course}</div>
                <div className='text-[10px] md:text-[12px] text-[#b1b2b380]'>{info.duration}</div>
            </div>
        </div>

        <div className='text-[10px] md:text-[12px] text-[#b1b2b380]'><span className='font-bold'>Grade: </span>{info.grade}</div>
        <div className='text-[13px] md:text-[15px] text-[#f2f3f499] line-clamp-3 hover:line-clamp-none'>{info.content}</div>
        
    </div>
  )
}

export default Institute