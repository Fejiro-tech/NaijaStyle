"use client";
import React from "react";

const categories = [
  "all",
  "men",
  "dress",
  "asoke",
  "accessories",
  "shoes",
  "gele"
];

export default function FilterBar({ selected, setSelected }) {
  return (
    <div className="flex gap-1.5 sm:gap-4 flex-wrap my-4 ">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`px-2 py-1 rounded-full border border-yellow-500 cursor-pointer text-xs sm:text-sm
            ${selected === cat ? "bg-yellow-500 text-white" : "bg-white text-black hover:bg-yellow-200"}
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
