"use client";
import React from 'react';
import { ShoppingBag, Users, Star, Headset } from 'lucide-react';

const Statistics = () => {
  const stats = [
    { 
      id: 1, 
      value: "10K+", 
      label: "Products Sold", 
      icon: <ShoppingBag size={28} className="text-primary" /> 
    },
    { 
      id: 2, 
      value: "5K+", 
      label: "Happy Users", 
      icon: <Users size={28} className="text-primary" /> 
    },
    { 
      id: 3, 
      value: "99%", 
      label: "Positive Reviews", 
      icon: <Star size={28} className="text-primary" /> 
    },
    { 
      id: 4, 
      value: "24h", 
      label: "Fast Support", 
      icon: <Headset size={28} className="text-primary" /> 
    },
  ];

  return (
    <section className="my-24 px-4 md:px-10 w-11/12 mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
          Our <span className="text-primary italic">Impact</span> in Numbers
        </h2>
        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-base-content/60 max-w-xl mx-auto font-medium">
          Premium service and authentic gadgets have made us the leading tech shop.
        </p>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div 
            key={stat.id} 
            className="relative group bg-base-100 p-8 rounded-[2.5rem] border border-base-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            {/* Hover Background Accent */}
            <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              {/* Icon Container */}
              <div className="w-16 h-16 mb-6 rounded-2xl bg-base-200 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <div className="group-hover:text-white transition-colors">
                  {stat.icon}
                </div>
              </div>

              {/* Text Data */}
              <h3 className="text-4xl font-black font-heading tracking-tighter mb-2 group-hover:text-primary transition-colors">
                {stat.value}
              </h3>
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-base-content/40 group-hover:text-base-content transition-colors">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;