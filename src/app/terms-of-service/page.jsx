"use client";
import React from 'react';
import { Gavel, Truck, RotateCcw, ShieldAlert, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white py-12 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-[#422ad5] transition-all mb-12">
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Terms of <span className="text-[#422ad5] italic">Service</span>
          </h1>
          <div className="h-1.5 w-20 bg-[#422ad5] rounded-full mb-6"></div>
          <p className="text-gray-500 font-medium">Agreement for all GadgetVerse users</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="p-8 rounded-[2.5rem] bg-[#fcfcfd] border border-gray-100 space-y-4">
            <Gavel className="text-[#422ad5]" size={32} strokeWidth={2.5} />
            <h3 className="text-lg font-black uppercase tracking-widest">User Conduct</h3>
            <p className="text-xs text-gray-500 font-bold leading-relaxed uppercase tracking-widest">
              Users must provide accurate information and are responsible for maintaining account security.
            </p>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-[#fcfcfd] border border-gray-100 space-y-4">
            <Truck className="text-[#422ad5]" size={32} strokeWidth={2.5} />
            <h3 className="text-lg font-black uppercase tracking-widest">Shipping Policy</h3>
            <p className="text-xs text-gray-500 font-bold leading-relaxed uppercase tracking-widest">
              Delivery times vary. GadgetVerse is not responsible for delays caused by third-party carriers.
            </p>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-[#fcfcfd] border border-gray-100 space-y-4">
            <RotateCcw className="text-[#422ad5]" size={32} strokeWidth={2.5} />
            <h3 className="text-lg font-black uppercase tracking-widest">Refunds</h3>
            <p className="text-xs text-gray-500 font-bold leading-relaxed uppercase tracking-widest">
              We offer a 7-day return policy for manufacturing defects only.
            </p>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-[#fcfcfd] border border-gray-100 space-y-4">
            <ShieldAlert className="text-[#422ad5]" size={32} strokeWidth={2.5} />
            <h3 className="text-lg font-black uppercase tracking-widest">Liability</h3>
            <p className="text-xs text-gray-500 font-bold leading-relaxed uppercase tracking-widest">
              GadgetVerse is not liable for indirect damages arising from the use of products sold.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;