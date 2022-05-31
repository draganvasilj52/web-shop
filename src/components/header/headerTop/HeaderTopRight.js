import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './classSelector.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderTopRight = () => {
  const shoppingCart = useSelector((state) => state.starter.shoppingCart)
  const navigate = useNavigate()

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
      <div
        onClick={() => navigate('shoppingcart')}
        onMouseEnter={() => setOnHoverShoppingCart(true)}
        onMouseLeave={() => setOnHoverShoppingCart(false)}
        className="relative border-x border-t border-transparent border-solid hover:border-gray-300 dropdownItem hover:bg-white"
      >
        <ShoppingCartOutlinedIcon />
        {shoppingCart.reduce((a, b) => a + b.quantity, 0) > 0 ? (
          <>
            <p className="absolute bg-red-600 borderRadius text-white">
              {shoppingCart.reduce((a, b) => a + b.quantity, 0)}
            </p>
            {onHoverShoppingCart && (
              <div className=" -mb-px -mr-px absolute top-full right-0 w-72 p-3 z-20 bg-white space-y-5 border-x border-b bg-white">
                {shoppingCart.map((item, index) => (
                  <Link
                    to={`daily/${item.id}`}
                    key={index}
                    className="flex items-center group space-x-2"
                  >
                    <img
                      className="w-2/6"
                      src={`${item.dealImage}`}
                      alt="logo"
                    />
                    <div className="flex flex-col w-4/6 space-y-1">
                      <p className="truncate group-hover:underline">
                        {item.dealName}
                      </p>
                      <p className="font-bold">US ${item.dealPrice}</p>
                    </div>
                  </Link>
                ))}
                <Link to="shoppingcart">
                  <div className="text-sm p-3 bg-blue-600 text-white text-center mt-5">
                    View Cart
                  </div>
                </Link>
              </div>
            )}
          </>
        ) : (
          onHoverShoppingCart && (
            <div className="-mb-px  -mr-px absolute top-full right-0 w-72 p-3 z-20 border-x border-b bg-white">
              <p className="text-xl text-slate-400">Your cart is empty</p>
              <p className="text-base">Time to start shopping</p>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default HeaderTopRight
