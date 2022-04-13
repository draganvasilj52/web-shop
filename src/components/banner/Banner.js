import React, { useState } from 'react'
import image1 from '../../assets/today-offer.jpg'
import image2 from '../../assets/ebay.jpg'

let count = 0
const Banner = () => {
  const featuredProducts = [
    { title: 'Title1', path: image1 },
    { title: 'Title2', path: image2 },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length
    setCurrentIndex(count)
  }
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length
    count = (currentIndex + productsLength - 1) % productsLength
    setCurrentIndex(count)
  }

  return (
    <div className="flex relative">
      {featuredProducts.map((item) => (
        <>
          <div className="w-4/12 bg-red-700">{item[currentIndex].title}</div>
          <img className="w-8/12 h-80" src={item[currentIndex].path} alt="" />
          <div className="absolute w-full top-1/2 px-3 flex justify-between items-center">
            <button onClick={handleOnPrevClick}>Previous</button>
            <button onClick={handleOnNextClick}>Next</button>
          </div>
        </>
      ))}
    </div>
  )
}

export default Banner
