"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-700">
      
      <section className="relative w-full h-[60vh] sm:h-[80vh]">
        <Image
          src="/images/hero7.jpg" 
          alt="About us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl text-white font-bold">
            About Our Brand
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 sm:px-20 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-600 mb-4">
          Redefining Nigerian Fashion
        </h2>

        <p className="text-base sm:text-lg leading-relaxed mb-6">
          Our brand was created with a simple mission — to celebrate the beauty, 
          creativity, and cultural richness of African fashion. Every outfit is 
          crafted with precision, designed to help you express your confidence, 
          heritage, and individuality.
        </p>

        <p className="text-base sm:text-lg leading-relaxed mb-6">
          From timeless traditional wear to bold contemporary pieces, we bring 
          together premium quality fabrics, outstanding craftsmanship, and modern 
          design elements that make you stand out effortlessly.
        </p>

        <p className="text-base sm:text-lg leading-relaxed mb-6">
          Whether you're dressing for a special event, everyday elegance, or 
          something uniquely personal — our collections are inspired by you.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 sm:px-20 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="relative w-full h-72">
          <Image src="/images/hero1.jpg" fill className="object-cover rounded-xl" alt="Fashion Image" />
        </div>
        <div className="relative w-full h-72">
          <Image src="/images/hero3.jpg" fill className="object-cover rounded-xl" alt="Fashion Image" />
        </div>
        <div className="relative w-full h-72">
          <Image src="/images/hero4.jpg" fill className="object-cover rounded-xl" alt="Fashion Image" />
        </div>
      </section>

      
      <section className="max-w-5xl mx-auto px-6 sm:px-20 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-600 mb-4">Our Mission</h2>
        <p className="text-base sm:text-lg leading-relaxed">
          To empower individuals through fashion, offer premium-quality pieces, 
          and represent African culture with pride. We believe style should be 
          effortless, bold, expressive — and uniquely yours.
        </p>
      </section>

    </div>
  );
}
