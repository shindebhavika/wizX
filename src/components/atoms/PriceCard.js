"use client";
import React from "react";

function PriceCard({ plan, isSelected, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className={`rounded-xl border p-6 transition duration-300 cursor-pointer ${
        isSelected
          ? "bg-white/10 shadow-xl border-pink-400"
          : "bg-white/5 border-white/10"
      }`}
    >
      <h3 className="text-xl font-medium mb-2 ml-6">{plan.title}</h3>
      <p className="text-4xl font-semibold mb-4  ml-6">
        {plan.price} <sup className="text-sm align-super">$</sup>
      </p>

      <ul className="text-sm text-left space-y-2 mb-6">
  {[...plan.features, ...plan.extras].map((item, i) => {
    const isExtra = i >= plan.features.length;
    return (
      <li key={i} className={`flex items-center gap-2 ${isExtra ? "text-white/60" : ""}`}>
        <span className={`text-green-200 text-xl ${isExtra ? "invisible" : ""}`}>✓</span>
        <span>{item}</span>
      </li>
    );
  })}
</ul>


      <button
        className={`w-full py-2 rounded-full font-bold transition border-1 ${
          isSelected ? "bg-pink-600" : "hover:bg-white/30"
        }`}
        onClick={onSelect}
      >
        Get Started
      </button>
    </div>
  );
}

export default PriceCard;
