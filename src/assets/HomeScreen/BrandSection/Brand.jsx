import React from 'react'
import BrandNames from './BrandNames'
import BrandImage from './BrandImage'


export default function Brand() {
  return (
    <div className='m-8'>
        <h2 className='text-3xl font-bold mb-8'>Top Brand</h2>
        <div className='flex gap-8'>
           <BrandNames className='w-[70%]'/> 
           <BrandImage className='w-[30%] ' />
        </div>
    </div>
  )
}
