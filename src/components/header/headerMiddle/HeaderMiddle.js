import logo from '../../../assets/slika.png'
import SearchIcon from '@mui/icons-material/Search'
import Dropdown from '../../common/Dropdown'
import { useSelector } from 'react-redux'
const HeaderMiddle = () => {
  const categories = useSelector((state) => state.starter.categories)
  return (
    <div className="flex justify-center pt-3 pb-4">
      <img className="w-28 h-12 object-contain" src={logo} alt="logo" />

      <Dropdown
        categories={categories}
        title="Shop by category"
        spanProp="pr-1 leading-4 hover:text-blue-600 "
        containerProp="text-sm h-12 w-24 flex items-center mx-1.5 p-2 hover:cursor-pointer "
        categoriesContainerProp="flex min-w-max flex-wrap absolute top-full z-10 bg-white border-2 border-solid border-slate-200"
        categoriesItemProp="h-14 basis-2/6 shrink-0 grow-0 "
      />

      <div className="w-2/4 relative flex items-center text-gray-500 focus-within:text-black border-2 border-solid border-black border-r border-r-gray-300">
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
        containerProp="text-xs flex items-center justify-between px-3 w-fit border-solid border-black border-y-2 border-r-2 border-l-0"
        categoriesContainerProp="flex flex-col flex-wrap absolute top-full w-full right-0.5 z-10 bg-white border-2 border-solid border-slate-200"
        categoriesItemProp=""
      />
      <button className="cursor-pointer ml-1.5 py-2 px-4 bg-blue-600 text-white w-40">
        Search
      </button>
      <span className="text-xs flex items-center px-2.5 text-gray-500 hover:cursor-pointer hover:text-blue-600 ">
        Advanced
      </span>
    </div>
  )
}

export default HeaderMiddle
