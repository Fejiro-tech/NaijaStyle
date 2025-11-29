import React from 'react'
import Image from 'next/image';
import Link from "next/link";

const featuredCategories = [
  { title: "Aso Oke", image: "/images/image52.jpg", slug: "asoke" },
  { title: "Agbada", image: "/images/image13.jpg", slug: "men" },
  { title: "Dresses", image: "/images/image22.jpg", slug: "dress" },
  { title: "Gele", image: "/images/image46.jpg", slug: "gele" },
];

const FeaturedCollection = () => {
  return (
    <div className='px-10 py-14'>
      <h2 className="text-2xl font-semibold mb-10 text-center text-yellow-400">
        Featured Collection
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {featuredCategories.map((item) => (
          <Link
            href={`/shop?category=${item.slug}`}
            key={item.title}
            className="rounded-xl overflow-hidden shadow-lg cursor-pointer hover:opacity-90 transition"
          >
            
            <div className="relative w-full aspect-[3/5]">
              <Image
                src={item.image}
                alt={item.title}
                fill           
                className="object-cover rounded-xl"
              />
            </div>

            <p className="text-center py-3 font-medium text-lg text-yellow-400">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FeaturedCollection;
