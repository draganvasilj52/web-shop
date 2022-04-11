import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

const HeaderTopRight = () => {
  return (
    <div className="flex text-xs space-x-5">
      <p className="pt-1 pb-1.5">Sell</p>
      <p className="pt-1 pb-1.5">My Ebay</p>
      <NotificationsNoneIcon />
      <ShoppingCartOutlinedIcon />
    </div>
  )
}

export default HeaderTopRight
