import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItemFromShoppingCart } from '../../features/dataSlice'

const ShoppingCart = () => {
  const shoppingCart = useSelector((state) => state.starter.shoppingCart)
  const dispatch = useDispatch()
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
              <div className="flex justify-center basis-2/5">
                <p className="text-xl">{item.dealPrice}</p>
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
