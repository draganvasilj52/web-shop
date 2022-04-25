import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import image1 from '../../assets/today-offer.jpg'
import image2 from '../../assets/ebay.jpg'

const CarouselBanner = () => {
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
  return (
    <Carousel
      infiniteLoop
      autoPlay={true}
      useKeyboardArrows
      interval={3000}
      showThumbs={false}
      showStatus={false}
    >
      {featuredProducts.map((item, index) => (
        <div className="flex relative mb-12">
          <div className="w-2/5 bg-red-700 p-8 space-y-6">
            <h2 className="text-orange-300 text-4xl">{item.title}</h2>
            <h3 className="text-orange-300 text-base">{item.message}</h3>
            <button className="w-4/12 text-orange-300 border-2 border-orange-300 border-solid">
              {item.buttonText}
            </button>
          </div>
          <img className="w-8/12 h-80" src={item.path} alt="banner" />
        </div>
      ))}

      {featuredProducts.map((item, index) => (
        <div className="flex relative mb-12">
          <div className="w-2/5 p-8 space-y-6 bg-blue-700">
            <h2 className="text-blue-300 text-4xl">{item.title}</h2>
            <h3 className="text-blue-300 text-base">{item.message}</h3>
            <button className="w-4/12 text-blue-300 border-2 border-blue-300 border-solid">
              {item.buttonText}
            </button>
          </div>
          <img className="w-8/12 h-80" src={item.path} alt="banner" />
        </div>
      ))}
    </Carousel>
  )
}

export default CarouselBanner
