"use client";
import React from 'react';
import { Send, Mail, Sparkles, Lock } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="w-full bg-base-200 py-24 border-y border-base-200">
      <div className="w-11/12 mx-auto px-6 md:px-10 ">
        <div className="bg-gray-200  p-8 md:p-16  flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
      
          {/* টেক্সট সাইড */}
          <div className="text-center lg:text-left relative z-10 flex-1">
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-4">
              <Sparkles size={14} /> Weekly Updates
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-base-content uppercase tracking-tighter mb-4">
              Join the <span className="text-primary italic">Squad</span>
            </h2>
            <p className="text-base-content/60 text-lg font-medium max-w-sm mx-auto lg:mx-0">
              Subscribe to get latest tech news and <span className="text-primary font-bold">20% discount</span> on first order.
            </p>
          </div>

          {/* ফর্ম সাইড */}
          <div className="w-full max-w-lg relative z-10">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-base-content/30 group-focus-within:text-primary transition-colors" size={20} />
                <input 
                  type="email" 
                  placeholder="Your professional email" 
                  className="w-full h-16 pl-14 bg-base-100 border border-base-300 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-base-content" 
                  required
                />
              </div>
              <button className="btn btn-primary h-16 px-10 rounded-2xl text-white font-black uppercase tracking-widest gap-2 shadow-xl border-none">
                Join <Send size={20} />
              </button>
            </form>
            <p className="text-[10px] text-base-content/40 mt-4 text-center lg:text-left flex gap-2 uppercase tracking-widest font-bold ml-2">
              <span><Lock 
              strokeWidth={3}
              size={14} className="text-[#f3bd0c] font-bold" /></span> Your data is safe with us
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;