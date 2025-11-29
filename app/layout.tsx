import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../app/context/CartContext"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        <CartProvider>
          <Toaster position="top-center"/>
          <Navbar />
            {children}
          <Footer />
        </CartProvider>
        
      </body>
    </html>
  );
}
