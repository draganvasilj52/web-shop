import React from 'react'
import offer from '../../assets/today-offer.jpg'

const Banner = () => {
  return (
    // 918 330
    <div className="flex">
      <div className="w-4/12 bg-red-700"></div>
      <img className="w-8/12 h-80" src={offer} alt="" />
    </div>
  )
}

export default Banner
