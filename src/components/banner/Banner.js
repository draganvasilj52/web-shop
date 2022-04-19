import React, { useState } from 'react'
import image1 from '../../assets/today-offer.jpg'
import image2 from '../../assets/ebay.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

let count = 0
const Banner = () => {
  const featuredProducts = [
    {
      title: 'You may have a special offer',
      message: 'Sign in to your account to find out',
      path: image1,
      buttonText: 'Go to My Ebay',
    },
    {
      title: 'Everyone says these sellers are the best',
      message:
        'These items come with outstanding service from Top Rated Sellers',
      path: image2,
      buttonText: 'Shop the best',
    },
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
      {featuredProducts.map(
        (item, index) =>
          index === currentIndex && (
            <>
              <div
                className={
                  currentIndex === 0
                    ? ' w-2/5 bg-red-700 p-8 space-y-6'
                    : ' w-2/5 p-8 space-y-6 bg-blue-700'
                }
              >
                <h2
                  className={
                    currentIndex === 0
                      ? ' text-orange-300 text-4xl'
                      : 'text-blue-300 text-4xl'
                  }
                >
                  {item.title}
                </h2>
                <h3
                  className={
                    currentIndex === 0
                      ? ' text-orange-300 text-base'
                      : 'text-blue-300 text-base'
                  }
                >
                  {item.message}
                </h3>
                <button
                  className={
                    currentIndex === 0
                      ? 'w-4/12 text-orange-300 border-2 border-orange-300 border-solid'
                      : 'w-4/12 text-blue-300 border-2 border-blue-300 border-solid'
                  }
                >
                  {item.buttonText}
                </button>
              </div>
              <img className="w-8/12 h-80" src={item.path} alt="banner" />
              <div className="absolute w-full top-1/2 px-3 flex justify-between items-center">
                <button onClick={handleOnPrevClick}>
                  <ArrowBackIosIcon />
                </button>
                <button onClick={handleOnNextClick}>
                  <ArrowForwardIosIcon />
                </button>
              </div>
            </>
          )
      )}
    </div>
  )
}

export default Banner
