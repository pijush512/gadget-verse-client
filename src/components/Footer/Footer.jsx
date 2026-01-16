"use client";
import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, Cpu, Lock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral text-neutral-content py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* উপরের মেইন অংশ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* ১. লোগো ও বর্ণনা */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-white">
              <Cpu size={28} className="text-primary" strokeWidth={2.5} />
              <span className="text-2xl font-black tracking-tighter uppercase italic">
                Gadget<span className="text-primary">Verse</span>
              </span>
            </Link>
            <p className="text-sm opacity-60 leading-relaxed max-w-xs">
             Your ultimate destination for premium gadgets. We are committed to simplifying your tech life with the latest innovations and quality service.
            </p>
          </div>

          {/* ২. গুরুত্বপূর্ণ লিংক (Easy List) */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Quick Links</h4>
            <Link href="/items" className="text-sm hover:text-primary transition-colors">All Products</Link>
            <Link href="/privacy-policy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-sm hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact Us</Link>
          </div>

          {/* ৩. সোশ্যাল ও কন্টাক্ট */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Connect With Us</h4>
            <div className="flex gap-4">
              <Facebook size={20} className="hover:text-primary cursor-pointer" />
              <Instagram size={20} className="hover:text-primary cursor-pointer" />
              <Twitter size={20} className="hover:text-primary cursor-pointer" />
            </div>
            <div className="pt-4 space-y-2 text-sm opacity-70">
              <p className="flex items-center gap-2"><Mail size={16} /> info@gadgetverse.com</p>
              <p className="flex items-center gap-2"><Phone size={16} /> +880 123 456 789</p>
            </div>
          </div>

        </div>

        {/* নিচের কপিরাইট অংশ */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">
            © {currentYear} GadgetVerse. All Rights Reserved.
          </p>
          
          {/* সিকিউরিটি ব্যাজ - গোল্ডেন তালা সহ */}
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-60">
            <Lock size={12} className="text-[#f3bd0c]" strokeWidth={3} />
            Secure Checkout
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;