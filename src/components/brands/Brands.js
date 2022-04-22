import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Brands = () => {
  return (
    <div className='flex items-center'>
        <h2 className='text-2xl font-bold pr-5'>Explore Popular Brands</h2>
        <div className='flex items-center hover:cursor-pointer hover:underline'>
            <p className='text-xl pl-4 border-l-2 border-solid border-slate-100  '>See all </p>
            <ArrowForwardIcon className='ml-2' sx={{ fontSize: 20 }}/>
        </div>
   
    </div>
  )
}

export default Brands