import BrandsItem from './brandsItem/BrandsItem'
import BrandsHeadline from './brandsHeadline/BrandsHeadline'
import { useEffect, useRef, useState } from 'react'

const PopularBrands = () => {
  const [dataArray, setDataArray] = useState([])
  const isFirstRunRef = useRef(false)
// const [isFirstRunState, setIsFirstRunState] = useState(false)


  useEffect(() => {
    if(isFirstRunRef.current === false){
       console.log('useEfffect Popular Brands')
    //   setIsFirstRunState(true)
       isFirstRunRef.current = true
         console.log('Ref',isFirstRunRef)
   //      console.log('STate',isFirstRunState)
   
      fetch('https://ffakestoreapi.com/products?limit=7')
      .then((res) => res.json())
      .then((data) => setDataArray(data))

  
      
    }

   
  }, [])

/*   const getPopularBrands = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products?limit=${limit}`
    )
    return response.json()
  } */

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
