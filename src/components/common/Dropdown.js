import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'
const Dropdown = () => {
    const [isActive,setIsActive] = useState(false)
  return (
    <div className='w-80 relative'>
    <div className='flex items-center'>Choose One <KeyboardArrowDownIcon onClick={() => setIsActive(!isActive)}/></div>
    {isActive && <div className='absolute top-full p-5'>
       <div className='dropdown-item'>React</div>
       <div className='dropdown-item'>Vue</div>
    </div>}
   
  
  </div>
  )
}

export default Dropdown