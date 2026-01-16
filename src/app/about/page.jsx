"use client";
import React from 'react';
import { Target, Zap, ShieldCheck, Cpu } from 'lucide-react';

const About = () => {
  const values = [
    { 
      id: 1, 
      title: "Our Mission", 
      desc: "To bridge the gap between human curiosity and the next generation of gadgets.", 
      icon: <Target size={32} />
    },
    { 
      id: 2, 
      title: "Our Vision", 
      desc: "To be the most trusted global destination for authentic tech innovation.", 
      icon: <Zap size={32} />
    },
    { 
      id: 3, 
      title: "Quality First", 
      desc: "Every product is 100% certified and sourced directly from manufacturers.", 
      icon: <ShieldCheck size={32} />
    },
    { 
      id: 4, 
      title: "Tech Experts", 
      desc: "Guided by professionals who live and breathe technology every day.", 
      icon: <Cpu size={32} />
    },
  ];

  return (
    <div className="bg-base-100 min-h-screen py-24 px-4 md:px-10">
      <div className="w-11/12 mx-auto">
        
        {/* Centered Heading Style - হুবহু Features সেকশনের মতো */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Who is <span className="text-primary italic">GadgetVerse?</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-base-content/60 font-medium max-w-2xl mx-auto leading-relaxed italic">
            Your trusted tech partner since 2024. We don't just sell gadgets; we power your digital life.
          </p>
        </div>

        {/* Story Section - Modern Compact Card */}
        <div className="mb-20 bg-base-300 p-8 md:p-12 rounded-[3.5rem] border border-base-200 text-center max-w-5xl mx-auto">
            <h3 className="text-2xl font-black uppercase mb-6 tracking-tight">The Genesis</h3>
            <p className="text-base-content/70 font-semibold leading-loose text-sm md:text-base">
                GadgetVerse started in a small room with a big dream: to make world-class technology accessible to everyone. 
                Today, we are proud to serve thousands of tech-enthusiasts with honesty and passion. 
                Our journey is built on your trust and our obsession with innovation.
            </p>
        </div>

        {/* Values Grid - Features সেকশনের কার্ড স্টাইল কপি */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <div 
              key={v.id} 
              className="group p-10 bg-base-100 rounded-[3rem] border border-base-200 hover:border-primary/20 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden text-center flex flex-col items-center"
            >
              {/* Background Accent Sphere */}
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10 flex flex-col items-center">
                {/* Icon Container - Same as Features */}
                <div className="w-16 h-16 mb-8 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                  {v.icon}
                </div>
                
                {/* Text Content */}
                <h3 className="font-black text-2xl mb-3 tracking-tight group-hover:text-primary transition-colors uppercase">
                  {v.title}
                </h3>
                <p className="text-sm text-base-content/60 leading-relaxed font-semibold">
                  {v.desc}
                </p>

                {/* Dynamic Bottom Line */}
                <div className="mt-6 w-8 h-1 bg-base-300 group-hover:w-20 group-hover:bg-primary transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;