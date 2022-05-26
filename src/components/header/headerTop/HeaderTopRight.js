import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './classSelector.css'
import { useState } from 'react'

const HeaderTopRight = () => {
  const shoppingCart = useSelector((state) => state.starter.shoppingCart)
  const counter = useSelector((state) => state.starter.shoppingCart.length)
  const [onHoverShoppingCart, setOnHoverShoppingCart] = useState(false)

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
        to="shoppingCart"
        onMouseEnter={() => setOnHoverShoppingCart(true)}
        onMouseLeave={() => setOnHoverShoppingCart(false)}
        className="relative border-x border-t border-transparent border-solid hover:border-gray-300 dropdownItem hover:bg-white"
      >
        <ShoppingCartOutlinedIcon />
        {counter > 0 ? (
          <>
            <p className="absolute bg-red-600 borderRadius text-white">
              {counter}
            </p>
            {onHoverShoppingCart && (
              <div className="-mb-px -mr-px absolute top-full right-0 w-72 p-3 z-20 bg-gray-200 space-y-3 border-x border-b bg-white">
                {shoppingCart.map((item, index) => (
                  <div key={index} className="flex items-center  space-x-2">
                    <img className="w-2/6" src={`${item.dealImage}`} alt="" />
                    <div className="flex flex-col w-4/6 space-y-1">
                      <p className="truncate ">{item.dealName}</p>
                      <p className="font-bold">US ${item.dealPrice}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          onHoverShoppingCart && (
            <div className="-mb-px  -mr-px absolute top-full right-0 w-72 h-40 p-3 z-20 border-x border-b bg-white">
              <p className="text-xl text-slate-400">Your cart is empty</p>
              <p className="text-base pb-4">Time to start shopping</p>
              <Link
                to="shoppingCart"
                className="text-blue-600 bg-slate-200 text-center py-2"
              >
                View Cart
              </Link>
            </div>
          )
        )}
      </Link>
    </div>
  )
}

export default HeaderTopRight
