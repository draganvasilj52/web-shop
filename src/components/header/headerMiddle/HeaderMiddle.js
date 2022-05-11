import logo from '../../../assets/slika.png'
import SearchIcon from '@mui/icons-material/Search'
import Dropdown from '../../common/Dropdown'
import { useSelector } from 'react-redux'
import './hmiddle.css'
const HeaderMiddle = () => {
  const categories = useSelector((state) => state.starter.categories)

  return (
    <div className="flex justify-center items-center pt-3 pb-4 px-12">
      <img className="w-28 h-12 object-contain" src={logo} alt="logo" />

      <Dropdown
        itemHoverProp
        categories={categories}
        title="Shop by category"
        spanProp=" leading-4 hover:text-blue-600 pl-1"
        containerProp="text-sm specHeight  w-24 flex  ml-2 pr-2 "
        categoriesContainerProp="flex left flex-wrap top-full z-20 bg-white border-2 border-solid border-slate-200 p-6 "
        categoriesItemProp="h-40 leftItem "
      />

      <div className="w-3/6 h-11 relative flex items-center text-gray-500 focus-within:text-black border-y-2 border-l-2 border-solid border-black border-r border-r-gray-300">
        <SearchIcon
          sx={{ fontSize: 18 }}
          className="ml-3 absolute pointer-events-none"
        />
        <input
          className="w-full h-full text-base pl-10 placeholder-gray-500 text-black outline-none focus:placeholder-white"
          type="text"
          placeholder="Search for anything"
        />
      </div>

      <Dropdown
        categories={categories}
        title="All Categories"
        containerProp="text-xs flex items-center w-1/6 h-11 border-solid border-black border-y-2 border-r-2 "
        contentProp="w-full h-full justify-between px-3"
        categoriesContainerProp="middleItem border border-black border-solid flex flex-col top-full z-30 bg-white "
        categoriesItemProp="cursor-pointer hover:bg-blue-500 hover:text-white"
        iconSize={16}
      />
      <button className="cursor-pointer h-11 ml-1.5 py-2 px-4 bg-blue-600 text-white w-40">
        Search
      </button>
      <span className="text-xs flex items-center pl-1.5 text-gray-500 hover:cursor-pointer hover:text-blue-600 ">
        Advanced
      </span>
    </div>
  )
}

export default HeaderMiddle
