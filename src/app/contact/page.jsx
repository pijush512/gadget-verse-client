"use client";
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto py-24 px-6 font-sans">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
          Get In <span className="text-primary italic">Touch</span>
        </h2>
        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-base-content/60 font-medium max-w-2xl mx-auto">
          Any questions or feedback? Our tech experts are always here to help you.
        </p>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="p-8 bg-base-200 rounded-[2.5rem] border border-base-300 flex items-center gap-6">
            <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-2xl text-primary">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest opacity-40">Email Us</p>
              <p className="font-black text-lg">support@gadgetverse.com</p>
            </div>
          </div>

          <div className="p-8 bg-base-200 rounded-[2.5rem] border border-base-300 flex items-center gap-6">
            <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-2xl text-primary">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest opacity-40">Call Us</p>
              <p className="font-black text-lg">+880 123 456 789</p>
            </div>
          </div>
        </div>
        <div className="bg-base-100 p-10 rounded-[3rem] border border-base-200 shadow-xl">
          <form className="space-y-4">
            <input type="text" placeholder="NAME" className="input input-bordered w-full rounded-xl h-14 font-bold text-xs tracking-widest" />
            <input type="email" placeholder="EMAIL" className="input input-bordered w-full rounded-xl h-14 font-bold text-xs tracking-widest" />
            <textarea rows="4" placeholder="HOW CAN WE HELP?" className="textarea textarea-bordered w-full rounded-xl font-bold text-xs tracking-widest"></textarea>
            <button className="btn btn-primary w-full h-14 rounded-xl font-black uppercase tracking-widest">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;