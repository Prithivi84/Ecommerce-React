import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


export default function Price() {

   
const [value,setValue]=useState([2500,7500])

function valuetext(value) {
    return value
    
}

   const rangeChange=(e,newValue)=>{
    setValue(newValue);
    console.log(newValue);
   }



  return (
    <div className='my-3'>
        <span className='text-xl font-medium'>Price</span>
        <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Price'}
        value={value}
        onChange={rangeChange}
        valueLabelDisplay="off"
        getAriaValueText={valuetext}
       min={1000}
       max={10000}
      />
    </Box>  
    <div className='flex justify-between'>

    <span className='text-sm font-normal'>${value[0]}</span>
    <span className='text-sm font-normal'>${value[1]}</span>
    </div>
    </div>
  )
}
