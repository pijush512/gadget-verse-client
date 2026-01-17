"use client";
import React from 'react';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Fast Delivery",
      desc: "Express shipping within 24 hours to your doorstep.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25c0-.447-.25-.847-.643-1.04l-2.25-1.102a1.125 1.125 0 0 0-1.009.043L15.3 10.153a1.125 1.125 0 0 1-1.11.025L12 8.25V5.25A2.25 2.25 0 0 0 9.75 3h-3a2.25 2.25 0 0 0-2.25 2.25v9" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Secure Payment",
      desc: "Multiple secure payment gateways for your safety.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0 1 12 2.714Z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Quality Guarantee",
      desc: "Only 100% authentic and certified tech products.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "24/7 Support",
      desc: "Our tech experts are always here to help you.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-24 bg-base-300 px-4 md:px-10 w-11/12 mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
          Why Choose <span className="text-primary italic">GadgetVerse?</span>
        </h2>
        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-base-content/60 font-medium max-w-2xl mx-auto">
          We combine cutting-edge technology with world-class service to provide you with the most reliable tech shopping experience.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f) => (
          <div
            key={f.id}
            className="group p-10 bg-base-100 rounded-[3rem] border border-base-200 hover:border-primary/20 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden text-center flex flex-col items-center"
          >
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 mb-8 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                {f.icon}
              </div>
              <h3 className="font-black text-2xl mb-3 tracking-tight group-hover:text-primary transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-base-content/60 leading-relaxed font-semibold">
                {f.desc}
              </p>
              <div className="mt-6 w-8 h-1 bg-base-300 group-hover:w-20 group-hover:bg-primary transition-all duration-500 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;