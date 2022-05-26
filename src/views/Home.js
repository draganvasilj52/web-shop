import CarouselBanner from '../components/banner/CarouselBanner'
import PopularBrands from '../components/brands/PopularBrands'
import PopularCategories from '../components/brands/PopularCategories'
import HeaderBottom from './../components/header/headerBottom/HeaderBottom'
import { useEffect, useState } from 'react'

const Home = () => {
  const [mounted, setMounted] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setMounted(false)
    }, 500)
  }, [])
  return (
    <>
      <HeaderBottom />
      <CarouselBanner />
      {mounted && <PopularBrands />}
      <PopularCategories />
    </>
  )
}

export default Home
