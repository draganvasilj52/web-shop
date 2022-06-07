import { useDispatch } from 'react-redux'
import { removeItemFromShoppingCart } from '../../features/dataSlice'
import {  useState } from 'react'
import Modal from '../common/Modal'
import { Link } from 'react-router-dom'
import NewInput from '../common/NewInput'

const ShoppingCartItem = ({ item }) => {
  const [toggle, setToggle] = useState(false)

  const dispatch = useDispatch()

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
          <NewInput
            item={item}
          />
          <p className="w-2/5 text-xl text-center">US ${item.quantity >= 0 ? item.totalPrice.toFixed(2) : ''}</p>
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
