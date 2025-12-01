import Image from "next/image";
import Link from "next/link";
import { formattedPrice } from "./ProductDetail";

const ProductCard = ({ product }) => {
  return (
    <div>
      <Link href={`/product/${product.id}`} className="py-4 block">
        <div className="relative w-full aspect-3/5 shadow-lg rounded-xl overflow-hidden">
          <Image
            fill
            src={product.image}
            alt={product.name}
            className="object-cover rounded-xl transition-transform hover:scale-105"
          />
        </div>
      </Link>

      <div className="mt-2 text-sm sm:text-base">
        <h3 className="font-semibold text-yellow-600">{product.name}</h3>

        <div className="flex justify-between">
          <p className="text-gray-400 mt-2">{formattedPrice(product.price)}</p>

          <Link
            href={`/product/${product.id}`}
            className="border border-yellow-500 text-xs px-1 py-1 w-24 rounded-lg hover:bg-yellow-300 transition text-center "
          >
            View Options
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
