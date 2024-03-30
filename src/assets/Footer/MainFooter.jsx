import React from 'react'
import { Discord } from 'react-bootstrap-icons'
import { TelephoneForward } from 'react-bootstrap-icons'
import Phoneicon from '../HomeScreen/Images/phoneicon.png'
import AssetFooter from './AssetFooter'


export default function MainFooter() {
  return (
    <div className='w-full p-12 flex bg-black gap-8'>
      {/* -------------left------------------- */}
      <div className=' w-5/12'>
      <h2 className='text-white font-bold text-3xl my-2'>Don't compromise on quality!</h2>
      <div className='my-6'>
        <h3 className='text-white font-semibold text-xl'>Social Media</h3>
        <div className='flex gap-4 my-1'>
          <span><Discord height={30} color='white'/></span>
          <span><Discord height={30} color='white'/></span>
          <span><Discord height={30} color='white'/></span>
          <span><Discord height={30} color='white'/></span>
          <span><Discord height={30} color='white'/></span>
        </div>
      </div>
      <div>
        <form className='flex items-center  '  action="">
          
            <div>

            <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NewsLetter</label>
            <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
            <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
            </div>
            <button type='submit' className='bg-slate-700 px-8 py-2 hover:bg-[#1473f9] text-white'>Submit</button>
        </form>
        
      </div>
      <div className='my-8 flex gap-7'>
        <img style={{ height:100 }} src={Phoneicon} alt="" />
        <div className='flex flex-col gap-2 justify-center'>
          <span className='font-semibold text-2xl tracking-[2px] text-white'>Need Help Call Now</span>
          <span className='font-semibold text-2xl tracking-[2px] text-white'>1234567890 0987654321</span>
        </div>
      </div>
      </div>


    {/* ---------------Right------------------ */}

    <div className='w-7/12 '>
      <AssetFooter />
      <div className='relative p-1'>
      <p className='text-[#6f6f6f] w-[40rem] text-sm absolute right-0  '>All right reserved. Porta lorem mollis aliquam ut porttitor leo. Magna ac placerat vestibulum lectus mauris ultrices eros. Tortor condimentum lacinia quis...</p>

      </div>
    </div>

    </div>
  )
}
