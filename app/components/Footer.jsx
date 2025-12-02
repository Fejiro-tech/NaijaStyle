import Link from "next/link";
import Image from "next/image";

export default function Footer() {

    return (
    <footer className="bg-black text-white py-12 mt-20">
        <div className="w-full px-6 sm:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 ">

        <div>
            <h2 className="text-2xl font-bold text-yellow-500">NaijaStyle</h2>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                Your number one spot for premium Nigerian fashion —  
                lace, Ankara, gele, kaftans and more.  
                Dress like royalty every day.
            </p>
        </div>

        <div>
            <h3 className="font-semibold text-lg mb-3 text-yellow-500">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="/" className="hover:text-yellow-400">Home</a></li>
                <li><a href="/shop" className="hover:text-yellow-400">Shop</a></li>
                <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
                <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
        </div>

        <div>
            <h3 className="font-semibold text-lg mb-3 text-yellow-500">Categories</h3>
            <div className="flex flex-col space-y-2 text-gray-300 text-sm">
                <Link href="/shop?category=dress" className="hover:text-yellow-400">Dresses</Link>
                <Link href="/shop?category=gele" className="hover:text-yellow-400">Gele</Link>
                <Link href="/shop?category=shoes" className="hover:text-yellow-400">Shoes</Link>
                <Link href="/shop?category=men" className="hover:text-yellow-400">Men's Collections</Link>
                <Link href="/shop?category=accessories" className="hover:text-yellow-400">Accessories</Link>
            </div>
        </div>

        <div>
        <h3 className="font-semibold text-lg mb-3 text-yellow-500">Contact</h3>
        <p className="text-gray-300 text-sm">📍 Lagos, Nigeria</p>
        <p className="text-gray-300 text-sm mt-1">📞 +234 123 456 7890</p>
        <p className="text-gray-300 text-sm mt-1">📧 info@naijastyle.com</p>

        <div className="flex gap-4 mt-4">
            <Link href="#">
                <Image src="/images/whatsapp.png" width={20} height={20} alt="whatsapp"/>
            </Link>
            <Link href="#">
                <Image src="/images/instagram.png" width={20} height={20} alt="instagram"/>
            </Link>
            <Link href="#">
                <Image src="/images/icon-twitter.svg" width={20} height={20} alt="twitter"/>
            </Link>
            
        </div>
        </div>

    </div>

    <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} NaijaStyle. All Rights Reserved.
    </div>
    </footer>

    )
}