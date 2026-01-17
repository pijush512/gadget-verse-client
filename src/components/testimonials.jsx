"use client";
import React from 'react';
import { Quote, Star, UserCircle } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Ariful Islam",
      role: "Tech Enthusiast",
      text: "GadgetVerse has the best collection of mechanical keyboards. The build quality and service are top-notch. Highly recommended!",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Khan",
      role: "Graphic Designer",
      text: "Found the perfect laptop for my work. The display accuracy is exactly as described. Delivery was super fast and secure!",
      rating: 5
    },
    {
      id: 3,
      name: "Tanvir Ahmed",
      role: "Pro Gamer",
      text: "The gaming mouse I bought is 100% authentic and performing great. Their customer support helped me choose the right one.",
      rating: 4
    },
    {
      id: 4,
      name: "Mehedi Hasan",
      role: "Software Engineer",
      text: "Their after-sales service is incredible. I had a small issue with my monitor and they replaced it within 2 days without any hassle.",
      rating: 5
    },
  ];

  return (
    <section className="py-24 bg-base-100 px-4 md:px-10">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            What Our <span className="text-primary italic">Customers Say</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary mt-4 rounded-full mx-auto"></div>
          <p className="text-base-content/50 mt-6 font-medium max-w-lg mx-auto uppercase tracking-widest text-[10px]">
            Trusted by thousands of tech lovers worldwide
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="group relative bg-gray-100 p-10 rounded-xl border border-base-200 hover:border-primary/20 hover:bg-base-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              <div className="mb-6 text-primary/20 group-hover:text-primary transition-colors">
                <Quote size={40} fill="currentColor" />
              </div>
              <div className="flex gap-1 mb-6 text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < r.rating ? "currentColor" : "none"}
                    className={i < r.rating ? "" : "text-base-300"}
                  />
                ))}
              </div>
              <p className="text-base-content/70 font-medium italic leading-relaxed mb-8 flex-grow">
                {r.text}
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-base-300/50">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-black shadow-lg shadow-primary/20">
                  {r.name[0]}
                </div>
                <div>
                  <h4 className="font-black text-sm uppercase tracking-tight">{r.name}</h4>
                  <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest">{r.role}</p>
                </div>
              </div>
              <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-10 transition-opacity">
                <UserCircle size={80} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;