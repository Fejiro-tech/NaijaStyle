"use client"

import Image from "next/image";
import { products } from "@/app/data/products";
import { useCart } from "../../app/context/CartContext"
import { useState } from "react";
import toast from "react-hot-toast";

export const formattedPrice = (price) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
}).format(price);


export default function ProductDetail({ id }) {

  const {addToCart }= useCart();

  const [selectedSize, setSelectedSize] = useState(null);
  
  // Find the product with matching id
  const product = products.find((item) => item.id === id);

  if (!product) {
    return <div className="p-10 text-red-500 text-xl">Product not found.</div>;
  }
  
  
  return (
   <div className=" px-10 py-20">

    <div className="max-w-6xl grid md:grid-cols-2 gap-10 mt-8 mx-auto rounded-xl shadow-xl px-6 py-10">

      <div className="relative w-full aspect-3/5 ">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold text-yellow-500">{product.name}</h1>
        <p className="text-gray-600 mt-2">{formattedPrice(product.price)}</p>
        <p className="mt-4 text-gray-500">{product.description}</p>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Available Sizes:</h3>
          <div className="flex gap-2">
            {product.sizes.map((size) => (
              <span
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border border-yellow-500 text-yellow-600 rounded-lg cursor-pointer 
                  ${selectedSize === size ? "bg-yellow-500 text-white" : "bg-yellow-100 text-yellow-100"}`}
              >
                {size}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col w-[150px] justify-between">
          <button 
            onClick={() => {
              if(!selectedSize) {
                toast.error("Please select a size");
                return;
              }
              addToCart(product, selectedSize)

            }} 
            className="mt-8 bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
          >
            Add to Cart
          </button>

        <a href="/shop" className="text-xl font-bold mt-10">Back</a>
        </div>
      

      </div>
    </div>
  
</div>

);
}