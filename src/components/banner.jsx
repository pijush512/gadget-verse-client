// import React from 'react'

// const Banner = () => {
//   return (
//     <div className="hero min-h-[70vh] bg-base-200 rounded-3xl overflow-hidden my-8">
//       <div className="hero-content flex-col lg:flex-row-reverse p-10">
//         <img
//           src="https://images.unsplash.com/photo-1593364404571-06758652617f?q=80&w=1000&auto=format&fit=crop" 
//           className="max-w-sm rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
//           alt="Gadget"
//         />
//         <div>
//           <h1 className="text-5xl font-heading font-extrabold">
//             Next-Gen <span className="text-primary text-6xl">Gadgets</span> for the Future
//           </h1>
//           <p className="py-6 text-lg font-body opacity-80 max-w-md">
//             Explore the latest in tech, from futuristic wearables to powerful hardware. Elevate your lifestyle with GadgetVerse.
//           </p>
//           <button className="btn btn-primary btn-lg font-nav">Shop Now</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Banner







"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
const Hero = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Apex Pro Laptops",
      subtitle: "UNCOMPROMISED PERFORMANCE",
      desc: "Built for creators and gamers who demand the absolute best in hardware and speed.",
      img: "/banner1.jpeg",
    },
    {
      id: 2,
      title: "Visionary VR Gear",
      subtitle: "STEP INTO THE METAVERSE",
      desc: "Experience ultra-realistic graphics and 360-degree sound with our latest VR sets.",
       img: "/banner2.avif",
     
    },
    {
      id: 3,
      title: "Quantum Wearables",
      subtitle: "SMART LIFE, SMART STYLE",
      desc: "Monitor your health 24/7 with the most advanced sensors ever put in a watch.",
      // img: "/banner3.avif",
      img: "https://images.pexels.com/photos/15249470/pexels-photo-15249470.jpeg?referrer=grok.com"
    },
  ];

  // Next Slide function
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  // Prev Slide function
  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full h-[550px] md:h-[650px] overflow-hidden  shadow-2xl my-8 group bg-black">
      {/* Slides */}
      <div 
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10"></div>
            <img src={slide.img} className="w-full h-full object-cover" alt="" />
            
            {/* Content Container */}
            <div className="absolute inset-0 z-20 flex items-center px-12 md:px-24">
              <div className="max-w-2xl">
                <span className="text-white font-nav font-bold tracking-[0.4em] uppercase mb-4 block animate-pulse">
                  {slide.subtitle}
                </span>
                <h1 className="text-5xl md:text-8xl font-heading font-black text-white mb-6 leading-none">
                  {slide.title}
                </h1>
                <p className="text-gray-300 font-body text-xl mb-10 max-w-lg">
                  {slide.desc}
                </p>
                <Link href="/items" className="btn btn-primary btn-lg rounded-lg px-12 font-nav hover:scale-105 transition-all shadow-xl">
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows (Visible on Hover) */}
      <button 
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Bottom Progress Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4 bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-500 rounded-full ${
              i === current ? "w-10 h-2 bg-primary" : "w-2 h-2 bg-white/40 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;