import BrandsItem from './brandsItem/BrandsItem'
import BrandsHeadline from './brandsHeadline/BrandsHeadline'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getCategories } from '../../features/apiSlice'

const PopularBrands = () => {
  const [dataArray,setDataArray] = useState([])
  const dispatch = useDispatch()
  const posts = useSelector(state => state.listing.list)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  

 /*  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=7')
            .then(res=>res.json())
            .then(data=>setDataArray(data))
  }, [])

  console.log(dataArray) */
 
    return (
    <div className="flex flex-col px-6 mb-16">
      <BrandsHeadline title="Explore Popular Brands" />
      <div className="flex space-x-6 ">
         { posts.map((item, index) => (
          <BrandsItem key={index} item={item}  />
        ))}
      </div>
    </div>
  )
}

export default PopularBrands
