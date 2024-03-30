import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function HeadingSection() {
  return (
    <div className='h-52 w-full  mt-16 flex px-24 flex-col justify-center items-center'>
        <TypeAnimation className='text-5xl font-bold pb-4'
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Buy Anything you want like Laptop',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Buy Anything you want like Mobile',
        1000,
        'Buy Anything you want like Headphone',
        1500,
        'Buy Anything you want like Gaming-Set',
        2000
      ]}
      wrapper="span"
      speed={50}
      
      repeat={Infinity}
    />
       
        <span className='text-center text-xl font-medium text-zinc-500'>Comes with 20 homepages available with multi style that better for your choice.Molla store is one of the best Multi-Purpose eCommerce HTML Template for your store.</span>
    </div>
  )
}
