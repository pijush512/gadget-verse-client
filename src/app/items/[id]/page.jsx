"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ShoppingCart, ShieldCheck, Truck, RotateCcw, Star, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

const ItemDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://gadget-verse-server.vercel.app/items/${id}`)
      .then(res => res.json())
      .then(data => {
        setItem(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center font-black uppercase tracking-[0.4em] text-[10px] text-[#422ad5]">Syncing...</div>;

  return (
    <div className="min-h-screen bg-base-200 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Minimal Back Button */}
        <button
          onClick={() => router.back()}
          className="flex btn items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-white hover:bg-primary rounded-lg transition-all mb-12"
        >
          <ArrowLeft size={14} /> Return to Store
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: High-Sharp Image Showcase */}
          <div className="relative group">
            <div className="bg-[#fcfcfd] rounded-[3rem] p-12 border border-gray-100 flex items-center justify-center overflow-hidden shadow-sm">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105 brightness-[1.02] contrast-[1.05] drop-shadow-[0_15px_30px_rgba(0,0,0,0.08)]"
              />
            </div>
            <div className="absolute top-8 right-8 bg-green-500 text-white px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-green-200">
              <CheckCircle2 size={12} /> Authentic Product
            </div>
          </div>

          {/* Right: Content & Detailed Services */}
          <div className="space-y-10 bg-base-100 p-10">
            <div className="space-y-3">
              <div className="flex items-center gap-1.5 text-amber-500">
                <Star size={14} fill="currentColor" />
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Top Rated Choice</span>
              </div>
              <h1 className="text-5xl font-black uppercase tracking-tighter text-gray-900 leading-[0.9]">
                {item.name}
              </h1>
              <p className="text-4xl font-black text-[#422ad5] tracking-tight">${item.price}</p>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed font-medium max-w-md">
              {item.description}
            </p>

            {/* --- Enhanced Service & Security Grid --- */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Security Card */}
              <div className="p-5 rounded-2xl hover:shadow-lg  border border-gray-100 bg-gray-50/50 hover:border-[#422ad5]/30 transition-colors">
                <ShieldCheck className="text-[#422ad5] mb-3" size={24} strokeWidth={2.5} />
                <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-900">Secure Store</h4>
                <p className="text-[9px] font-bold text-gray-400 mt-1 uppercase">100% Protection</p>
              </div>
              {/* Shipping Card */}
              <div className="p-5 hover:shadow-lg  rounded-2xl border border-gray-100 bg-gray-50/50 hover:border-[#422ad5]/30 transition-colors">
                <Truck className="text-[#422ad5] mb-3" size={24} strokeWidth={2.5} />
                <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-900">Free Shipping</h4>
                <p className="text-[9px] font-bold text-gray-400 mt-1 uppercase">Next Day Delivery</p>
              </div>
              {/* Service Card */}
              <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:border-[#422ad5]/30 transition-colors hover:shadow-lg transition-all">
                <RotateCcw className="text-[#422ad5] mb-3" size={24} strokeWidth={2.5} />
                <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-900">Easy Return</h4>
                <p className="text-[9px] font-bold text-gray-400 mt-1 uppercase">7 Days Policy</p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
              <button
                onClick={() => toast.success('Added to Bag')}
                className="h-16 w-full sm:flex-1 bg-[#422ad5] text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[12px] hover:scale-105 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl shadow-[#422ad5]/20"
              >
                <ShoppingCart size={18} strokeWidth={2.5} /> Add to Cart
              </button>

              <div className="text-right">
                <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-gray-300">Availability</span>
                <span className="text-xs font-black text-gray-900 uppercase tracking-widest">{item.stock}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ItemDetails;