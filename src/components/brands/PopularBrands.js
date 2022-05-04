import BrandsItem from './brandsItem/BrandsItem'
import BrandsHeadline from './brandsHeadline/BrandsHeadline'
import { useEffect, useState } from 'react'

const PopularBrands = () => {
  const [dataArray, setDataArray] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=7')
      .then((res) => res.json())
      .then((data) => setDataArray(data))
  }, [])

  return (
    <div className="flex flex-col px-6 mb-16">
      <BrandsHeadline title="Explore Popular Brands" />
      <div className="flex space-x-6 ">
        {dataArray.map((item, index) => (
          <BrandsItem key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default PopularBrands
