import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

const ShoppingBag = ({ counter }) => {
  return (
    <>
      <div className="relative">
        <ShoppingCartOutlinedIcon />
      </div>
      <div className="absolute right-1 ">{counter}</div>
    </>
  )
}

export default ShoppingBag
