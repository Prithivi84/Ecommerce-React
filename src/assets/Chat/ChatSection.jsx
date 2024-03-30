import React from 'react'
import chat from '../HomeScreen/Images/chat.png'
import Chat from './Chat'


export default function ChatSection() {


 


  return (

    <div className='fixed flex items-center group gap-4 right-[5rem] bottom-[2.5rem] z-10'>
      <div className=' p-1 bg-white invisible group-hover:visible rounded-md border-cyan-600 border-[2px]'>
        Chat with us!
      </div>
      <Chat ></Chat>
      {/* <button  className='bg-[#3b9fff] flex  cursor-pointer h-[5rem] w-[5rem] justify-center items-center rounded-[99%]' style={{ boxShadow:'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px' }}>
          <img className='h-12 m-4' src={chat} alt="" />
      </button> */}
    </div>
  )
}


/**20px 20px 43px #7b7b7b,-20px -20px 43px #ffffff
 * 
 * box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
 * 
 * data-ripple-light="true" data-tooltip-target="tooltip-animation"
    class="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
 */