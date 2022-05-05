import BrandsItem from './brandsItem/BrandsItem'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCategories, selectAllPosts } from '../../features/apiSlice'
import BrandsHeadline from './brandsHeadline/BrandsHeadline'

const PopularBrands = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  const postStatus = useSelector((state) => state.categories.status)
  const error = useSelector((state) => state.categories.error)

  console.log(posts)
  console.log(postStatus)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(getCategories({ limit: 7 }))
    }
  }, [postStatus, dispatch])

  let content

  if (postStatus === 'loading') {
    content = 'čekaj'
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
