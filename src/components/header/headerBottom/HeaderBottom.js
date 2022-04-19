import FavoriteIcon from '@mui/icons-material/Favorite'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const HeaderBottom = () => {
  const categories = useSelector((state) => state.starter.categories)
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className="relative border-y border-solid border-neutral-200">
      <ul
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
        className={`text-xs flex justify-center px-12 `}
      >
        <li className="py-2 px-3 border-x border-transparent border-solid ">
          <span className="border-b-2 border-solid border-black pb-1.5 ">
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
          <li
            className={`py-2 px-3 border-x border-transparent border-solid ${
              showDropdown === true && 'hover:border-gray-300 bg-white'
            } `}
          >
            <span className="pb-1.5 hover:cursor-pointer hover:text-blue-600 hover:underline ">
              {item}
            </span>
          </li>
        ))}
        {showDropdown && (
          <div className="bg-white absolute z-10 top-full w-full h-72 border-x-2 border-b-2 bg-slate-200"></div>
        )}
      </ul>
    </div>
  )
}

export default HeaderBottom
