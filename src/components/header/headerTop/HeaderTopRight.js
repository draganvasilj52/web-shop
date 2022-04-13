import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const HeaderTopRight = () => {
  return (
    <div className="flex text-xs space-x-5">
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
      <div className="border-x border-t border-transparent border-solid hover:border-gray-300">
        <ShoppingCartOutlinedIcon />
      </div>
    </div>
  )
}

export default HeaderTopRight
