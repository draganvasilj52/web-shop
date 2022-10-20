import BrandsItem from './brandsItem/BrandsItem'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import { getCategories, selectAllPosts } from '../../features/apiSlice'
import BrandsHeadline from './brandsHeadline/BrandsHeadline'

const PopularBrands = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  const postStatus = useSelector((state) => state.categories.status)
  const error = useSelector((state) => state.categories.error)

  const isFirstRunRef = useRef(false)

  // using redux thunk to get data from: https://fakestoreapi.com/products?limit=7
  // isFirstRunRef is used here to experiment why use Effect calls twice in strict mode

  useEffect(() => {
    if (isFirstRunRef.current === false) {
      isFirstRunRef.current = true
      if (postStatus === 'idle') {
        dispatch(getCategories({ limit: 7 }))
      }
    }
  }, [postStatus, dispatch])

  let content

  if (postStatus === 'loading') {
    content = 'Loading...'
  } else if (postStatus === 'succeeded') {
    content = posts.map((item, index) => <BrandsItem key={index} item={item} />)
  } else if (postStatus === 'failed') {
    content = error
  }

  return (
    <div className="flex flex-col px-6 ">
      <BrandsHeadline title="Explore Popular Categories" />
      <div className="flex space-x-6 ">{content}</div>
    </div>
  )
}

export default PopularBrands
