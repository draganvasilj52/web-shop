import BrandsItem from './brandsItem/BrandsItem'
import { useSelector } from 'react-redux'
import BrandsHeadline from './brandsHeadline/BrandsHeadline'

const PopularBrands = () => {
  const categories = useSelector((state) => state.starter.categories)
  return (
    <div className="flex flex-col px-6 mb-16">
      <BrandsHeadline title="Explore Popular Categories" />
      <div className="flex ">
        {categories.map((item, index) => (
          <BrandsItem
            itemContainer="flex items-center flex-col hover:underline pad"
            itemImage="hover:cursor-pointer max-w-full w-32 h-32 hover:border-gray-300 border border-solid border-transparent imgRad bg-center bg-cover bg-clip-padding"
            itemTitle="text-center mt-2.5 font-bold text-base "
            key={index}
            title={item}
          />
        ))}
      </div>
    </div>
  )
}

export default PopularBrands
