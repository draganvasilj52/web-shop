import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItemFromShoppingCart } from '../../features/dataSlice'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const ShoppingCart = () => {
  const shoppingCart = useSelector((state) => state.starter.shoppingCart)
  const dispatch = useDispatch()
  const [showDropdown, setShowDropdown] = useState(false)
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="px-12">
      {shoppingCart.length === 0 ? (
        <p className="font-bold text-3xl">ShoppingCart</p>
      ) : (
        <p className="font-bold text-3xl">
          ShoppingCart ({shoppingCart.length} item)
        </p>
      )}

      {shoppingCart.length === 0 ? (
        <div className="p-12">
          <p className="flex items-center justify-center">
            You don't have any items in your cart.
          </p>
        </div>
      ) : (
        shoppingCart.map((item, index) => (
          <div
            key={index}
            className="border border-solid border-gray-300 flex flex-col"
          >
            <div className="flex items-center ">
              <div className="basis-1/5">
                <img src={`${item.dealImage}`} alt="slika" />
              </div>
              <div className="flex justify-center basis-2/5">
                <p className="font-bold underline text-sm p-3">
                  {item.dealName}
                </p>
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
                        <p
                          onClick={() => setQuantity(1)}
                          className={`cursor-pointer pl-1.5 hover:bg-blue-600 hover:text-white ${
                            quantity === 1 && 'bg-blue-600 text-white'
                          }`}
                        >
                          1
                        </p>
                        <p
                          onClick={() => setQuantity(2)}
                          className={`cursor-pointer pl-1.5 hover:bg-blue-600 hover:text-white ${
                            quantity === 2 && 'bg-blue-600 text-white'
                          }`}
                        >
                          2
                        </p>
                        <p
                          onClick={() => setQuantity(3)}
                          className={`cursor-pointer pl-1.5 hover:bg-blue-600 hover:text-white ${
                            quantity === 3 && 'bg-blue-600 text-white'
                          }`}
                        >
                          3
                        </p>
                        <p
                          onClick={() => setQuantity(4)}
                          className={`cursor-pointer pl-1.5 hover:bg-blue-600 hover:text-white ${
                            quantity === 4 && 'bg-blue-600 text-white'
                          }`}
                        >
                          4
                        </p>
                        <p
                          onClick={() => {
                            setQuantity(5)
                          }}
                          className={`cursor-pointer pl-1.5 hover:bg-blue-600 hover:text-white ${
                            quantity === 5 && 'bg-blue-600 text-white'
                          }`}
                        >
                          5
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-xl">US ${item.dealPrice * quantity}</p>
                <div className="bg-blue-600 text-white p-2">
                  Proceed to Payment
                </div>
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
        ))
      )}
    </div>
  )
}

export default ShoppingCart
