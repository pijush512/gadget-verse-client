"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Brands = () => {
  const brands = [
    "Apple", "Samsung", "Sony", "HP", "Asus", "Logitech",
    "Dell", "Intel", "Nvidia", "Microsoft", "Razer", "Lenovo"
  ];

  return (
    <section className=" overflow-hidden border-y border-base-300">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="text-center text-xs font-black uppercase tracking-[0.5em] text-primary/90 pt-5 mb-[-10px]">
          Authorized Retailer Of
        </p>
      </div>
      <div className="flex relative">
        <motion.div
          className="flex flex-nowrap gap-20 items-center"
          animate={{ x: [0, -1000] }} // বাম দিকে মুভ করবে
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear"
            }
          }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="group cursor-default pb-3">
              <span className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-base-content/20 group-hover:text-primary transition-colors duration-500 uppercase italic ">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-base-100 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-base-100 to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default Brands;