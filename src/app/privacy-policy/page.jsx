"use client";
import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-12 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Link */}
        <Link href="/" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-[#422ad5] transition-all mb-12">
          <ArrowLeft size={14} /> Back to Home
        </Link>

        {/* Header Style - আপনার প্রজেক্টের মত */}
        <div className="mb-16">
          <h1 className="text-4xl text-center md:text-6xl font-black uppercase tracking-tighter mb-4">
            Privacy <span className="text-[#422ad5]  italic">Policy</span>
          </h1>
          <div className="h-1.5 w-20 bg-[#422ad5] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 text-center font-medium">Last updated: January 2026</p>
        </div>

        {/* Content Section */}
        <div className="space-y-12">
          
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-[#422ad5]">
              <Eye size={24} strokeWidth={2.5} />
              <h2 className="text-xl font-black uppercase tracking-widest">Information We Collect</h2>
            </div>
            <p className="text-gray-600 leading-relaxed font-medium">
              We collect information to provide better services to all our users. This includes your name, email address, and shipping details when you place an order on GadgetVerse.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-[#422ad5]">
              <Lock size={24} strokeWidth={2.5} />
              <h2 className="text-xl font-black uppercase tracking-widest">How We Use Data</h2>
            </div>
            <p className="text-gray-600 leading-relaxed font-medium">
              Your data allows us to process transactions, provide customer support, and improve our website experience. We never sell your personal information to third parties.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-[#422ad5]">
              <ShieldCheck size={24} strokeWidth={2.5} />
              <h2 className="text-xl font-black uppercase tracking-widest">Security Measure</h2>
            </div>
            <p className="text-gray-600 leading-relaxed font-medium">
              We use industry-standard encryption and security protocols to protect your personal information during transmission and storage.
            </p>
          </section>

        </div>

        {/* Contact Note */}
        <div className="mt-20 p-8 rounded-[2rem] bg-gray-50 border border-gray-100">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest text-center">
            Questions? Email us at <span className="text-[#422ad5]">privacy@gadgetverse.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;