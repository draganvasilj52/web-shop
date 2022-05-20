import { Outlet } from 'react-router-dom'
import CarouselBanner from '../components/banner/CarouselBanner'
import PopularBrands from '../components/brands/PopularBrands'
import PopularCategories from '../components/brands/PopularCategories'
import HeaderBottom from './../components/header/headerBottom/HeaderBottom'

const Home = () => {
  return (
    <>
      <HeaderBottom />
      <CarouselBanner />
      <PopularBrands />
      <PopularCategories />
    </>
  )
}

export default Home
