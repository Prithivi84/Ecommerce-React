import React from 'react'
import CartProducts from './CartProducts'
import AddressCart from './AddressCart'



export default function MainCart() {
  return (
    <div className='p-8'>
        <h2 className='text-4xl font-bold font-["Inconsolata", monospace]'>Cart</h2>
        <div className='flex w-full'>
        <CartProducts className='w-3/4' />
        <AddressCart className='w-1/4'/>
        </div>
    </div>
  )
}
