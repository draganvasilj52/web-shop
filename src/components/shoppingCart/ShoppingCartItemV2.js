import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { removeItemFromShoppingCart } from '../../features/dataSlice'

import {
  incrementInputValue,
  decrementInputValue,
  setInputValueDefault,
} from '../../features/dataSlice'

const ShoppingCartItem = ({ item }) => {
  const handleRef = useRef(item.quantity)
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState(item.quantity)

  const handleIncrement = (item) => {
    dispatch(incrementInputValue(item.id))
  }

  const handleDecrement = (item) => {
    dispatch(decrementInputValue(item.id))
  }

  const handleInputChange = (inputValue, item) => {
    setInputValue(inputValue)
    const data = {
      inputValue,
      id: item.id,
    }

    dispatch(setInputValueDefault(data))
  }

  /*  useEffect(() => {
    if (item.quantity <= 0) {
      dispatch(removeItemFromShoppingCart(item.id))
    }
  }, [dispatch, item.quantity, item.id])
 */
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
            <button onClick={() => handleDecrement(item)}>-</button>

            <p className="border border-solid border-black">
              <input
                value={item.quantity}
                onChange={(e) => handleInputChange(e.target.value, item)}
                className="w-8"
              />
            </p>

            <button onClick={() => handleIncrement(item)}>+</button>
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
