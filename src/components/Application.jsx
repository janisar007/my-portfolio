import React from 'react'
import Tag from './Tag'
// import applicationImg from '../images/youtubeimage1.jpg'

const Application = ({imgUrl, title, description, tags, via, code}) => {

    const openNewTab = (webLink) => {        
        window.open(webLink, '_blank');
    };

  return (
    <div className='w-[80%] sm:w-1/2 md:w-[40%] lg:w-[21%] xl:w-[23%] h-[350px] sm:h-[380px] md:h-[360px] lg:h-[400px] xl:h-[360px] bg-[#171721] m-2 rounded-lg flex flex-col items-center justify-between p-3 border-2 border-[#306EE8] project-shadow'>

        <div className='flex flex-col items-center w-[98%]'>
            <div className='w-[98%] h-[150px] bg-cover bg-center rounded-lg' style={{ backgroundImage: `url(${imgUrl})` }}></div>
            
            <div className='text-white flex flex-col w-[98%] mt-1'>
                <div className='font-bold'>{title}</div>

                <div className='flex m-[1px] items-center flex-wrap'>
                    {tags.map((tag, index) => <Tag key={index} tag={tag}/>)}
                </div>

                <div className='text-sm text-[#9E9DA5] line-clamp-4'>{description}</div>
            </div>
        </div>

        <div className='w-full flex justify-between text-white mt-2 text-sm'>
            <button onClick={() => openNewTab(via)} className='bg-[#1034A6] py-[2px] px-[7px] rounded-md text-[0.85rem] hover:opacity-80'>View</button>
            <button onClick={() => openNewTab(code)} className='bg-[#1034A6] py-[2px] px-[7px] rounded-md text-[0.85rem] hover:opacity-80'>Code</button>
        </div>
        

    </div>
  )
}

export default Application