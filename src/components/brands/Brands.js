import BrandsItem from './brandsItem/BrandsItem'
import { useSelector } from 'react-redux'
import BrandsHeadline from './brandsHeadline/BrandsHeadline'

const Brands = () => {
  const categories = useSelector((state) => state.starter.categories)
  return (
    <div className="flex flex-col px-6">
      <BrandsHeadline />
      <div className="flex ">
        {categories.map((item, index) => (
          <BrandsItem key={index} title={item} />
        ))}
      </div>
    </div>
  )
}

export default Brands
