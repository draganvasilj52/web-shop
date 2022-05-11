import FavoriteIcon from '@mui/icons-material/Favorite'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import './cssclasses.css'
import HeaderBottomHoveredCategoryItem from './HeaderBottomHoveredCategoryItem'
import fakeImg from '../../../assets/mac.jpeg'

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

        {categories.map((item, index) => (
          <li
            className={`z-10 item p-2 border-x border-transparent border-solid hover:border-gray-300 hover:bg-white`}
            onMouseEnter={() => setHoveredItem(item.categoryName)}
            onMouseLeave={() => setHoveredItem('')}
            key={index}
          >
            <span className=" hover:cursor-pointer hover:text-blue-600 hover:underline  ">
              {item.categoryName}
            </span>
            {hoveredItem === item.categoryName && (
              <div className="flex bg-white mt-px absolute top-full inset-x-12  h-72 border-x-2 border-b-2 bg-slate-200">
                <div className="p-3 w-1/6 mt-2">
                  <h3 className="font-bold border-b border-solid border-gray-300 pb-1 	">
                    Most Popular Categories
                  </h3>
                  {item.mostPopularCategories.map((item, index) => (
                    <HeaderBottomHoveredCategoryItem item={item} key={index} />
                  ))}
                </div>

                <div className="p-3 w-1/6 mt-2">
                  <h3 className="font-bold border-b border-solid border-gray-300 pb-1 	">
                    More Categories
                  </h3>
                  {item.moreCategories.map((item, index) => (
                    <HeaderBottomHoveredCategoryItem item={item} key={index} />
                  ))}
                </div>

                <div className="w-4/6 flex cursor-pointer p-3">
                  <div className="w-1/5 h-full flex items-center flex-col justify-between bg-black py-6">
                    <p className="text-center text-white text-sm">
                      {item.categoryName}
                    </p>
                    <button className="text-white border-2 border-white rounded-r-xl rounded-l-xl w-6/12 p-2 text-center">
                      Shop now
                    </button>
                  </div>
                  <div
                    style={{ backgroundImage: `url(${fakeImg})` }}
                    className="minW bg-center bg-no-repeat bg-cover"
                  ></div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HeaderBottom
