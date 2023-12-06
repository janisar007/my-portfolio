import React from 'react'

const MiniApp = ({field}) => {

  const openNewTab = (webLink) => {        
    window.open(webLink, '_blank');
  };

  return (
    <div className='text-[#7F8085] border-2 rounded-lg border-[#B1B2B3] my-2 p-2 flex items-center '>
        <div className='text-[1.2rem] mr-3'><field.logo/></div>

        <div className='flex flex-row items-center justify-between w-full'>
            <div>
                <div className='font-bold'>{field.title}</div>
                <div className='text-[0.9rem]'>{field.tech}</div>
            </div>

            <div onClick={() => openNewTab(field.code)} className='bg-[#B1B2B3] py-[0.1rem] px-[0.25rem] rounded-md text-gray-700 w-[53px] h-[30px] text-center hover:opacity-75 cursor-pointer'>Code</div>
        </div>
    </div>
  )
}

export default MiniApp