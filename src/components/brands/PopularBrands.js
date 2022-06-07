import BrandsItem from './brandsItem/BrandsItem'
import BrandsHeadline from './brandsHeadline/BrandsHeadline'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const PopularBrands = () => {
  const [dataArray, setDataArray] = useState([])
  const isFirstRunRef = useRef(false)
  // const [isFirstRunState, setIsFirstRunState] = useState(false)
  console.log('popularBrands Component Render')
  console.log('dataArray', dataArray)
  console.log('Ref', isFirstRunRef)

  /* useEffect(() => {
    if (isFirstRunRef.current === false) {
      console.log('useEfffect Popular Brands')
      //   setIsFirstRunState(true)
      isFirstRunRef.current = true
      console.log('Ref', isFirstRunRef)
      //      console.log('STate',isFirstRunState)

      fetch('https://fakestoreapi.com/products?limit=7')
        .then((res) => res.json())
        .then((data) => setDataArray(data))
    }
  }, []) */

  useEffect(() => {
    let source = axios.CancelToken.source()
    if (isFirstRunRef.current === false) {
      isFirstRunRef.current = true

      const fetchData = async () => {
        try {
          const response = await axios.get(
            'https://fakestoreapi.com/products?limit=7',
            {
              cancelToken: source.token,
            }
          )
          console.log('got response')
          setDataArray(response.data)
        } catch (error) {
          throw error
        }
      }
      fetchData()
     /*  return () => {
        console.log('unmounting')
        source.cancel()
      } */
    }
  }, [])

  /* const data = useHttp('https://fakestoreapi.com/products?limit=7') */

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
