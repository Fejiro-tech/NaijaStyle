"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "../../app/context/CartContext"

const Cart = () => {

  const { cart, clearCart, incrementQuantity, decrementQuantity, } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
       
  //Loading state
  if (cart === undefined) {
    return (
      <div className="absolute right-0 top-[90px] bg-white text-black w-[360px] rounded-lg shadow-2xl p-6 z-50">
        <p className="text-center text-gray-500">Loading cart...</p>
      </div>
    )
  }

  // Empty cart state
  if (cart.length === 0) {
    return (
      <div className="absolute right-0 top-[90px] bg-white text-black w-[260px] rounded-lg shadow-2xl p-6 z-50">
        <h3 className="text-lg font-bold uppercase mb-4">Cart (0)</h3>
        <div className="flex flex-col items-center justify-center py-8">
          <p className="text-gray-500 text-sm">Your cart is empty</p>
          <p className="text-gray-400 text-xs mt-2">Add items to get started</p>
        </div>
      </div>
    )
  }

  return (
    <div className="absolute right-0 top-[50px] sm:top-[90px] bg-white text-black w-[270px] sm:w-[360px] rounded-lg shadow-2xl p-6 z-50">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-base sm:text-lg font-bold uppercase">Cart ({cart.length})</h3>
        <button
          onClick={() => {clearCart()}}
          className="text-gray-500 text-sm hover:text-black transition"
        >
          Remove all
        </button>
      </div>

      <div className="flex flex-col gap-4 mb-6 max-h-[250px] overflow-y-auto">
        {cart.map((item) => (
          <div key={`${item.id}-${item.size}`}className="flex items-center justify-between gap-2">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                className="rounded-lg"
              />
              <div>
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="font-semibold text-sm text-yellow-500">{item.size}</p>
                <p className="text-gray-500 text-sm">$ {item.price.toLocaleString()}</p>
              </div>
            </div>
            
            {/* Quantity Controls */}
            <div className="flex items-center gap-3 bg-[#F1F1F1] px-3 py-2">
              <button
                onClick={() => decrementQuantity(item.id)}
                className="text-gray-500 hover:text-[#D87D4A] font-bold px-2 transition"
              >
                -
              </button>
              <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
              <button
                onClick={() => incrementQuantity(item.id)}
                className="text-gray-500 hover:text-[#D87D4A] font-bold px-2 transition"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-500 uppercase text-sm">Total</p>
        <p className="text-lg font-bold">$ {total.toLocaleString()} </p>
      </div>

      <Link href="/checkout">
        <button className="bg-[#D87D4A] text-white w-full py-3 uppercase text-sm font-medium hover:bg-[#fbaf85] transition cursor-pointer rounded">
          Checkout
        </button>
      </Link>
    </div>
  )
}

export default Cart