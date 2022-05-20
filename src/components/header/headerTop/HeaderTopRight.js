import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './classSelector.css'

const HeaderTopRight = () => {
  const counter = useSelector((state) => state.starter.shoppingCart.length)

  return (
    <div className="flex text-xs space-x-5 ">
      <p className="pt-1 pb-1.5 hover:cursor-pointer hover:text-blue-600">
        Ship to
      </p>
      <p className="pt-1 pb-1.5 hover:cursor-pointer hover:underline">Sell</p>
      <div className="pt-1 pb-1.5 flex items-center">
        Watchlist <KeyboardArrowDownIcon style={{ fontSize: 16 }} />
      </div>
      <div className="pt-1 pb-1.5 flex items-center">
        My Ebay <KeyboardArrowDownIcon style={{ fontSize: 16 }} />
      </div>
      <div className="border-x border-t border-transparent border-solid hover:border-gray-300">
        <NotificationsNoneIcon />
      </div>
      <Link
        to="shoppingcart"
        className=" border-x border-t border-transparent border-solid hover:border-gray-300"
      >
        {counter > 0 ? (
          <div className="relative">
            <ShoppingCartOutlinedIcon />
            <p className="absolute bg-red-600 borderRadius text-white">
              {counter}
            </p>
          </div>
        ) : (
          <ShoppingCartOutlinedIcon />
        )}
      </Link>
    </div>
  )
}

export default HeaderTopRight
