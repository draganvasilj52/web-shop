import React, { useState, useEffect, useCallback } from 'react'
import image1 from '../../assets/today-offer.jpg'
import image2 from '../../assets/ebay.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const Banner = () => {
  const featuredProducts = [
    {
      title: 'Title 1',
      message: 'Sign in to your account to find out',
      path: image1,
      buttonText: 'Go to My Ebay',
    },
    {
      title: 'Title 2',
      message:
        'These items come with outstanding service from Top Rated Sellers',
      path: image2,
      buttonText: 'Shop the best',
    },
    {
      title: 'Title 3',
      message:
        'These items come with outstanding service from Top Rated Sellers',
      path: image2,
      buttonText: 'Shop the best',
    },
    {
      title: 'Title 4',
      message:
        'These items come with outstanding service from Top Rated Sellers',
      path: image2,
      buttonText: 'Shop the best',
    },
    {
      title: 'Title 5',
      message:
        'These items come with outstanding service from Top Rated Sellers',
      path: image2,
      buttonText: 'Shop the best',
    },
    {
      title: 'Title 6',
      message:
        'These items come with outstanding service from Top Rated Sellers',
      path: image2,
      buttonText: 'Shop the best',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  /*   const handleOnNextClick = useCallback(() => {
    setCurrentIndex(
      currentIndex === featuredProducts.length - 1 ? 0 : currentIndex + 1
    )
  }, [currentIndex, featuredProducts.length]) */

  const handleOnNextClick = () => {
    setCurrentIndex(
      currentIndex === featuredProducts.length - 1 ? 0 : currentIndex + 1
    )
  }

  const handleOnPrevClick = () => {
    setCurrentIndex(
      currentIndex === 0 ? featuredProducts.length - 1 : currentIndex - 1
    )
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < featuredProducts.length - 1) {
        setCurrentIndex(currentIndex + 1)
      } else if (currentIndex < featuredProducts.length) {
        setCurrentIndex(0)
      }
    }, 3000)
    return () => clearTimeout(timer)
  }, [currentIndex, featuredProducts.length])

  /*   useEffect(() => {
    const timer = setTimeout(() => {
      handleOnNextClick()
    }, 3000)
    return () => clearTimeout(timer)
  }, [handleOnNextClick]) */

  return (
    <div className="flex relative mb-12">
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
