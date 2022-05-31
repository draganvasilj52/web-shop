import { useDispatch } from 'react-redux'
import { removeItemFromShoppingCart } from '../../features/dataSlice'
import { useEffect, useState } from 'react'
import {
  incrementInputValue,
  decrementInputValue,
  setInputValueDefault,
} from '../../features/dataSlice'
import Modal from '../common/Modal'
import { Link } from 'react-router-dom'

const ShoppingCartItem = ({ item }) => {
  const [toggle, setToggle] = useState(false)
  //const [inputValue, setInputValue] = useState(item.quantity)
  // console.log(inputValue)
  const dispatch = useDispatch()

  const handleIncrement = (item) => {
    //  setInputValue((val) => val + 1)
    dispatch(incrementInputValue(item.id))
  }

  const handleDecrement = (item) => {
    //  setInputValue((val) => val - 1)

    dispatch(decrementInputValue(item.id))
  }

  const handleInputChange = (inputValue, item) => {
    // setInputValue(inputValue)
    const data = {
      inputValue,
      id: item.id,
    }
    dispatch(setInputValueDefault(data))
  }

  useEffect(() => {
    if (item.quantity < 0) {
      dispatch(removeItemFromShoppingCart(item.id))
    }
  }, [item.quantity, dispatch, item.id])

  return (
    <div className="border border-solid border-gray-300 flex flex-col mt-6 ">
      <div className="flex items-center space-x-5 ">
        <div className="basis-1/5">
          <img src={`${item.dealImage}`} alt="slika" />
        </div>
        <div className="flex justify-center items-center basis-2/5">
          <Link
            to={`/daily/${item.id}`}
            className="font-bold underline text-sm p-3 hover:text-blue-600"
          >
            {item.dealName}
          </Link>
        </div>
        <div className="pr-6 flex justify-center items-center items-center basis-2/5 space-x-8">
          <div className="flex space-x-2 w-1/5">
            <p
              className="text-center cursor-pointer"
              onClick={() => handleDecrement(item)}
            >
              -
            </p>

            <input
              value={item.quantity}
              onChange={(e) => handleInputChange(Number(e.target.value), item)}
              className="w-6 border border-solid border-black text-center"
            />

            <p
              className="text-center cursor-pointer"
              onClick={() => handleIncrement(item)}
            >
              +
            </p>
          </div>
          <p className="w-2/5 text-xl text-center">US ${item.totalPrice}</p>
          <div
            className="w-2/5 bg-blue-600 text-white p-2 text-center cursor-pointer text-sm "
            onClick={() => setToggle(true)}
          >
            Proceed to Payment
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <p
          onClick={() => dispatch(removeItemFromShoppingCart(item.id))}
          className="underline text-blue-500 cursor-pointer p-3 mr-4 "
        >
          Remove
        </p>
      </div>
      <Modal toggle={toggle} setToggle={setToggle} />
    </div>
  )
}

export default ShoppingCartItem
