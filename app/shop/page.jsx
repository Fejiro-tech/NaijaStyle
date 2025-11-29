"use client";

import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useState, useEffect, Suspense } from "react";
import FilterBar from "../components/FilterBar";
import { useSearchParams } from "next/navigation";

function ShopContent() {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category") || ""; 

  const [selected, setSelected] = useState("all");
  const [searchText, setSearchText] = useState("");

  // When URL changes: update the filter state
  useEffect(() => {
    if (urlCategory) {
      setSelected(urlCategory);
    }
  }, [urlCategory]);

  const filteredProducts = products
    .filter((p) => selected === "all" || p.category === selected)
    .filter((p) => p.name.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div className="px-10 sm:px-20 py-24">
      <h2 className="text-2xl font-semibold mb-6">
        {selected === "all" ? "All Products" : `Showing: ${selected}'s Collections`}
      </h2>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <FilterBar selected={selected} setSelected={setSelected} />

        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search products..."
          className="w-full md:w-1/2 px-4 py-1 sm:py-2 border border-yellow-500 rounded-full focus:outline-none focus:ring-1 focus:ring-yellow-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="px-10 sm:px-20 py-24">
        <div className="text-center text-gray-500">Loading products...</div>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}