import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



export default function RatingSection() {
  return (
    <div>
        <span className='text-xl font-medium'>Rating</span>
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="5✨" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="4✨" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="3✨" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="2✨" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="1✨" />
            
            </FormGroup>
    </div>
  )
}
