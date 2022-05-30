import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemFromShoppingCart } from '../../features/dataSlice'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { addingItemQuantities } from '../../features/dataSlice'
const ShoppingCartItem = ({ item }) => {
  const selectedItem = useSelector((state) =>
    state.starter.shoppingCart.find((x) => x.id === item.id)
  )

  const dispatch = useDispatch()
  const [showDropdown, setShowDropdown] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const quantities = [1, 2, 3, 4, 5]

  const handleAddingQuantities = (quantity, item) => {
    setQuantity(quantity)
    const data = {
      quantity,
      id: item.id,
    }
    dispatch(addingItemQuantities(data))
  }

  return (
    <div className="border border-solid border-gray-300 flex flex-col">
      <div className="flex items-center ">
        <div className="basis-1/5">
          <img src={`${item.dealImage}`} alt="slika" />
        </div>
        <div className="flex justify-center basis-2/5">
          <p className="font-bold underline text-sm p-3">{item.dealName}</p>
        </div>
        <div className="flex justify-center items-center basis-2/5 space-x-20">
          <div className="flex space-x-2">
            <p>Qty:</p>
            <div
              onClick={() => setShowDropdown(!showDropdown)}
              className="relative border border-black border-solid rounded-md flex items-center space-x-2 px-2"
            >
              <p>{quantity}</p>
              <KeyboardArrowDownIcon />
              {showDropdown && (
                <div className="absolute top-full w-full right-0 border-black border-solid border">
                  {quantities.map((quantity, index) => (
                    <p
                      key={index}
                      className={`cursor-pointer pl-1.5 hover:bg-blue-600 hover:text-white `}
                      onClick={() => handleAddingQuantities(quantity, item)}
                    >
                      {quantity}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <p className="text-xl">{item.totalPrice}</p>
          <div className="bg-blue-600 text-white p-2">Proceed to Payment</div>
        </div>
      </div>
      <div
        className="flex justify-end"
        onClick={() => dispatch(removeItemFromShoppingCart(item.id))}
      >
        <p className="underline text-blue-500 cursor-pointer pr-4 pb-1">
          Remove
        </p>
      </div>
    </div>
  )
}

export default ShoppingCartItem
