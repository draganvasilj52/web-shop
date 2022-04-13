import logo from '../../../assets/slika.png'
import SearchIcon from '@mui/icons-material/Search'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
const HeaderMiddle = () => {
  return (
    <div className="flex justify-center border-b border-solid border-neutral-200 pt-3 pb-4">
      <img className="w-28 h-12 object-contain" src={logo} alt="logo" />
      <button className="text-sm h-12 w-24 flex items-center mx-1.5 p-2">
        <span className="pr-1 leading-4 hover:cursor-pointer hover:text-blue-600">
          Shop by category
        </span>
        <KeyboardArrowDownIcon />
      </button>

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
      <div className="text-xs flex items-center justify-between px-4 w-2/12 border-solid border-black border-y-2 border-r-2 border-l-0">
        <span>All Categories</span>
        <KeyboardArrowDownIcon className="text-gray-400" />
      </div>
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
