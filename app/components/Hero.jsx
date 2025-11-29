"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen ">
      <Image
        src="/images/hero3.jpg"
        alt="model"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40 flex items-center px-10 sm:px-20 text-sm sm:text-base text-white leading-relaxed ">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
            Step Into Elegance, Naija Style
          </h1>

          <p className="pl-1">
            Wear outfits that speak{" "}
            <span className="text-yellow-500">tradition</span>
            and shine with <span className="text-yellow-500">confidence.</span>
          </p>
          <p className="pl-1 hidden sm:block">
            From rich Aso Oke and lace to vibrant Ankara and statement
            jewelries, every piece is crafted to honor culture — Yoruba, Igbo,
            Hausa — while keeping you stylish for every celebration.
          </p>

          <p className="pl-1 mb-12">
            For weddings, owambes, naming, and big occasions — dress like
            royalty.
          </p>
          <a
            href="/shop"
            className="bg-yellow-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-yellow-700"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
