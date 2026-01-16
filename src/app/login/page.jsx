// "use client";
// import { useRouter } from "next/navigation";
// import React from "react";

// const LoginPage = () => {
//   const router = useRouter();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     // ১. অ্যাসাইনমেন্ট অনুযায়ী হার্ডকোডেড ক্রেডেনশিয়াল চেক
//     if (email === "admin@gmail.com" && password === "123456") {
      
//       // ২. কুকিতে লগইন তথ্য সেভ করা (isLoggedIn=true)
//       // রিকোয়ারমেন্ট অনুযায়ী আমরা কুকি ব্যবহার করছি
//       document.cookie = "isLoggedIn=true; path=/; max-age=86400"; // ১ দিন স্থায়ী থাকবে
      
//       alert("Login Successful!");
      
//       // ৩. লগইন শেষে items পেজে রিডাইরেক্ট করা এবং পেজ রিফ্রেশ দেওয়া 
//       // যাতে নেববার সাথে সাথে আপডেট হয়
//       window.location.href = "/items"; 
//     } else {
//       alert("ভুল ইমেইল বা পাসওয়ার্ড! (সঠিক: admin@gmail.com / 123456)");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
//       <div className="card w-full max-w-sm shadow-2xl bg-base-100">
//         <form onSubmit={handleLogin} className="card-body">
//           <h2 className="text-3xl font-bold text-center text-primary mb-4">Login Now</h2>
          
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text font-semibold">Email</span>
//             </label>
//             <input
//               name="email"
//               type="email"
//               placeholder="admin@gmail.com"
//               className="input input-bordered focus:input-primary"
//               required
//             />
//           </div>

//           <div className="form-control mt-4">
//             <label className="label">
//               <span className="label-text font-semibold">Password</span>
//             </label>
//             <input
//               name="password"
//               type="password"
//               placeholder="123456"
//               className="input input-bordered focus:input-primary"
//               required
//             />
//           </div>

//           <div className="form-control mt-8">
//             <button type="submit" className="btn btn-primary text-white w-full uppercase">
//               Login
//             </button>
//           </div>
          
//           <p className="text-center text-sm mt-4">
//             লগইন করতে ব্যবহার করুন: <br/> 
//             <span className="badge badge-ghost">admin@gmail.com</span> / <span className="badge badge-ghost">123456</span>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


"use client";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // ১. হার্ডকোডেড ক্রেডেনশিয়াল চেক
    if (email === "admin@gmail.com" && password === "123456") {
      
      // ২. কুকিতে লগইন তথ্য সেভ করা
      document.cookie = "isLoggedIn=true; path=/; max-age=86400"; // ১ দিন স্থায়ী
      
      alert("Login Successful! 🎉");
      
      // ৩. পেজ রিফ্রেশ করে রিডাইরেক্ট করা যাতে নেববার আপডেট হয়
      window.location.href = "/items"; 
    } else {
      alert("ভুল ইমেইল বা পাসওয়ার্ড! (সঠিক: admin@gmail.com / 123456)");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 px-4">
      <div className="card w-full max-w-md shadow-2xl bg-base-100 border border-base-300">
        <div className="card-body p-8">
          
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-4xl font-extrabold text-primary mb-2">Welcome Back</h2>
            <p className="text-base-content/60 font-medium">Please login to your GadgetVerse account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Input Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-base-content/70">Email Address</span>
              </label>
              <div className="relative">
                <input
                  name="email"
                  type="email"
                  placeholder="admin@gmail.com"
                  className="input input-bordered w-full focus:input-primary pl-10"
                  required
                />
                <span className="absolute left-3 top-3.5 text-base-content/40">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Password Input Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-base-content/70">Password</span>
              </label>
              <div className="relative">
                <input
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full focus:input-primary pl-10"
                  required
                />
                <span className="absolute left-3 top-3.5 text-base-content/40">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Login Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary btn-block text-white font-bold text-lg hover:scale-[1.01] active:scale-95 transition-all">
                Login
              </button>
            </div>
          </form>

          {/* Demo Info Divider */}
          <div className="divider text-xs text-base-content/40 uppercase mt-8">Test Access</div>
          
          <div className="bg-base-200 rounded-xl p-4 border border-dashed border-base-300">
            <div className="flex flex-col gap-2 text-center">
              <p className="text-sm font-medium">
                Email: <span className="badge badge-outline badge-primary">admin@gmail.com</span>
              </p>
              <p className="text-sm font-medium">
                Pass: <span className="badge badge-outline badge-primary">123456</span>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};


export default LoginPage;