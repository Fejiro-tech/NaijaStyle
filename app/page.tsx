import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCollection from "./components/FeaturedCollection";


export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedCollection />
    </div>
  );
}
