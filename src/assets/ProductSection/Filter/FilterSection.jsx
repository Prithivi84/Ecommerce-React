import React from 'react'
import Price from './PriceSection'
import BrandSection from './BrandSection'
import RatingSection from './RatingSection'
import DiscountSection from './DiscountSection'



export default function FilterSection() {
  return (
    <>
    <div className='m-4 p-4' style={{ boxShadow:'0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }}>
        <span className='text-3xl font-semibold'>Filter</span>
        <Price />
        <BrandSection></BrandSection>
        <RatingSection></RatingSection>
        <DiscountSection />
    </div>
    </>
  )
}


/*box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); */