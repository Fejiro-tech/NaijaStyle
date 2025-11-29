"use client";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("cart");
        if (saved) {
            setCart(JSON.parse(saved));
        }

    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    const addToCart = (product, selectedSize) => {

        setCart((prev) => {
            const exists = prev.find((item) => item.id === product.id && item.size === selectedSize);

            if (exists) {
                    // If item exists increase quantity
                    return prev.map((item) => 
                        item.id === product.id && item.size === selectedSize
                            ? {...item, quantity: item.quantity + 1 && item.size === selectedSize } 
                            : item
                )
            }

            // If item does NOT exist add with quantity 1
            return [...prev, { ...product, quantity: 1, size: selectedSize}];
        })

        toast.success("Added to cart!");
    }

    // Increment quantity
    const incrementQuantity = (id) => {
        setCart((prev) =>
        prev.map((item) =>
            item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        );
    };
   
    // Decrement quantity (remove if 0)
    const decrementQuantity = (id) => {
        setCart((prev) =>
        prev.map((item) =>
            item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0)
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, decrementQuantity, incrementQuantity}}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => useContext(CartContext);