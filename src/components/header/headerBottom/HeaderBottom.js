import FavoriteIcon from '@mui/icons-material/Favorite'
import { useSelector } from 'react-redux'
const HeaderBottom = () => {
  const categories = useSelector((state) => state.starter.categories)

  return (
    <div>
      <ul className="text-xs flex justify-center px-12 border-b border-solid border-neutral-200 ">
        <li className="py-2 px-3 border-x border-transparent border-solid">
          <span className="border-b-2 border-solid border-black pb-1.5">
            Home
          </span>
        </li>
        <li className="py-2 px-3 flex items-center border-x border-transparent border-solid">
          <FavoriteIcon sx={{ fontSize: 11 }} />
          <span className="ml-0.5 hover:cursor-pointer hover:text-blue-600 hover:underline">
            Saved
          </span>
        </li>
        {categories.map((item) => (
          <li className="py-2 px-3 border-x border-transparent border-solid hover:border-gray-300">
            <span className="pb-1.5 hover:cursor-pointer hover:text-blue-600 hover:underline">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HeaderBottom
