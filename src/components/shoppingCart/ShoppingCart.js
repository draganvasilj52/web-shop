import React from 'react'
import { useSelector } from 'react-redux'
import ShoppingCartItemV2 from './ShoppingCartItemV2'

const ShoppingCart = () => {
  const shoppingCart = useSelector((state) => state.starter.shoppingCart)

  return (
    <div className="px-12">
      {shoppingCart.length === 0 ? (
        <p className="font-bold text-3xl">ShoppingCart</p>
      ) : (
        <p className="font-bold text-3xl">
          ShoppingCart ({shoppingCart.reduce((a, b) => a + b.quantity, 0)} item)
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
          <ShoppingCartItemV2 item={item} key={index} />
        ))
      )}
    </div>
  )
}

export default ShoppingCart
