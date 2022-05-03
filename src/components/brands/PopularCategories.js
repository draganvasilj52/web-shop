import BrandsItem from './brandsItem/BrandsItem'
import { useSelector } from 'react-redux'
import BrandsHeadline from './brandsHeadline/BrandsHeadline'

const PopularBrands = () => {
  const categories = useSelector((state) => state.starter.categories)
  return (
    <div className="flex flex-col px-6 ">
      <BrandsHeadline title="Explore Popular Categories" />
   
    </div>
  )
}

export default PopularBrands
