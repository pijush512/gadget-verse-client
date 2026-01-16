"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Star, Eye, ChevronRight } from 'lucide-react';

const FeaturedProducts = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/items') 
      .then((res) => res.json())
      .then((data) => {
        setItems(data.slice(0, 8));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center my-32">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );

  return (
    <div className="my-24 px-4 px-10 w-11/12 mx-auto font-sans">
      <div className="text-center mb-16">

         <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
          Featured <span className="text-primary italic">Gadgets</span>
        </h2>
        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6"></div>
      </div>

      {/* Grid Layout - 8 Compact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item._id} className="group bg-gray-300 rounded-lg border border-base-300  hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
            
            {/* 1. Compact Image Area */}
            <div className="relative aspect-[5/4] overflow-hidden bg-white p-4 flex items-center justify-center">
              <span className="absolute top-4 left-4 z-10 bg-white/20 px-2 py-0.5 rounded-lg text-[8px] font-black uppercase tracking-widest shadow-sm">
                {item.category || "New"}
              </span>
              <img
                src={item.image || "https://via.placeholder.com/400"}
                alt={item.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* 2. Compact Content Area */}
            <div className="p-5 flex flex-col flex-grow">
              {/* Star & Price Row */}
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center  gap-1">
                  <Star size={17} fill="currentColor" className="text-orange-400" />
                  <span className="text-[15px] font-bold opacity-40">4.9</span>
                </div>
                <span className="text-lg font-black text-primary tracking-tight">
                  ${item.price}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-black leading-tight mb-2 line-clamp-1 uppercase">
                {item.name}
              </h3>

              {/* Short Description */}
              <p className="text-[11px] text-base-content/60 font-medium line-clamp-2 mb-4 leading-normal">
                {item.description || "The ultimate gadget for professionals and tech enthusiasts."}
              </p>

              {/* Minimal Buttons */}
              <div className="flex gap-2 mt-auto">
                <Link 
                  href={`/items/${item._id}`} 
                  className="flex-grow btn btn-primary  rounded px-12 font-nav hover:scale-105 transition-all"
                >
                  <Eye size={14} /> View Details
                </Link>
                
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modern View All Link */}
      <div className="mt-16 text-center">
        <Link href="/items" className="btn btn-primary btn-lg rounded-lg px-12 font-nav hover:scale-105 transition-all shadow-xl">
          Browse All Products <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;