import BrandsItem from './brandsItem/BrandsItem'
import BrandsHeadline from './brandsHeadline/BrandsHeadline'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const PopularBrands = () => {
  const [dataArray, setDataArray] = useState([])
  const isFirstRunRef = useRef(false)

  // api call using axios to: https://fakestoreapi.com/products?limit=7
  // isFirstRunRef is used here to experiment why use Effect calls twice in strict mode
  // source is used here to experiment with cancelling get request using axios features
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
