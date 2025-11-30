"use client"

import Link from "next/link"

import { useState } from "react"
import Cart from "../components/Cart";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {

  const pathname = usePathname();
  const homePage = pathname === "/";

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className={`w-full flex items-center justify-between px-6 sm:px-20 py-4 top-0 left-0 z-50  text-white ${homePage ? "absolute bg-transparent text-white" : "fixed bg-yellow-600 shadow-md text-white"}`}>
      <h1 className="text-xl md:text-2xl font-bold">Naija <span className={`${homePage ?"text-yellow-500" : "text-white"}`}>Style</span> Co</h1>

      <div className=" items-center gap-4 sm:gap-6 text-base sm:text-xl font-bold hidden md:flex">
        <Link href="/" className={`${homePage ? "hover:text-yellow-400" : "hover:text-yellow-200"}`}>Home</Link>
        <Link href="/shop" className={`${homePage ? "hover:text-yellow-400" : "hover:text-yellow-200"}`}>Shop</Link>
        <Link href="/about" className={`${homePage ? "hover:text-yellow-400" : "hover:text-yellow-200"}`}>About Us</Link>

        <button onClick={()=> setIsCartOpen(!isCartOpen)} className="cursor-pointer">
          <Image src="/images/icon-cart.svg" width={22} height={22} alt="cart-icon"/>
        </button>

        {isCartOpen && (
          <>
            {/* Overlay */}
            <div
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/50 hover:text-yellow-200 cursor-pointer"
            />
            
            <div className="fixed right-10  shadow-lg p-4 z-50">
              <Cart />
            </div>
          </>
        )}
        
      </div>

      <button className="cursor-pointer block md:hidden" onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
         <Image src="/hamburger.svg" alt="Menu" width={18} height={18}/>
      </button>

      {/* mobile */}
      {isMenuOpen && 
        <>
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/70 hover:text-yellow-200 cursor-pointer"
          />
          <div className="absolute top-0 right-0 bg-yellow-600  w-[200px] min-h-screen flex flex-col items-center py-24 space-y-14 font-bold text-[20px]">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className={`${homePage ? "hover:text-yellow-400" : "hover:text-yellow-200"}`}>Home</Link>
            <Link href="/shop" onClick={() => setIsMenuOpen(false)} className={`${homePage ? "hover:text-yellow-400" : "hover:text-yellow-200"}`}>Shop</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className={`${homePage ? "hover:text-yellow-400" : "hover:text-yellow-200"}`}>About Us</Link>
            
            <button onClick={()=> {setIsCartOpen(!isCartOpen)}} className="hover:text-yellow-200 cursor-pointer">
              <Image src="/images/icon-cart.svg" width={26} height={26} alt="cart-icon"/>
            </button>

            {isCartOpen && (
              <>
                {/* Overlay */}
                <div
                  onClick={() => setIsCartOpen(false)}
                  className="fixed inset-0   hover:text-yellow-200 cursor-pointer"
                />
                
                <div className="fixed right-10  shadow-lg p-4 z-50">
                  <Cart />
                </div>
              </>
            )}
            

          </div>
        </>
      }
    </nav>
  )
}
