import logo from '../../../assets/eBay-logo-square.jpg'
import Button from '@material-tailwind/react/Button'

import SearchIcon from '@mui/icons-material/Search'
const HeaderMiddle = () => {
  return (
    <div className="flex justify-center border-b border-solid border-neutral-200 pt-3 pb-4">
      <img className="w-28 h-12 object-cover" src={logo} alt="" />

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
      <div className="w-2/12 border-solid border-black border-y-2 border-r-2 border-l-0">
        All Categories
      </div>
      <Button
        className="min-w-24"
        color="blue"
        buttonType="filled"
        size="regular"
        rounded={false}
        block={false}
        iconOnly={false}
        ripple="light"
      >
        Button
      </Button>
    </div>
  )
}

export default HeaderMiddle
