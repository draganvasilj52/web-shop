import FavoriteIcon from '@mui/icons-material/Favorite'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import './cssclasses.css'

const HeaderBottom = () => {
  const categories = useSelector((state) => state.starter.categories)

  const [hoveredItem, setHoveredItem] = useState('')

  return (
    <div className="relative border-y border-solid border-neutral-200 px-2">
      <ul className={`text-xs flex justify-center`}>
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
            className={`z-10 item p-2 border-x border-transparent border-solid hover:border-gray-300 hover:bg-white`}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem('')}
          >
            <span className=" hover:cursor-pointer hover:text-blue-600 hover:underline  ">
              {item}
            </span>
            {hoveredItem === item && (
              <ul className="bg-white mt-px absolute top-full inset-x-12  h-72 border-x-2 border-b-2 bg-slate-200">
                <li>Home</li>
                <li>About</li>
                <li>Search</li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HeaderBottom
