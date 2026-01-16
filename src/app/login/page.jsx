"use client";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // ১. অ্যাসাইনমেন্ট অনুযায়ী হার্ডকোডেড ক্রেডেনশিয়াল চেক
    if (email === "admin@gmail.com" && password === "123456") {
      
      // ২. কুকিতে লগইন তথ্য সেভ করা (isLoggedIn=true)
      // রিকোয়ারমেন্ট অনুযায়ী আমরা কুকি ব্যবহার করছি
      document.cookie = "isLoggedIn=true; path=/; max-age=86400"; // ১ দিন স্থায়ী থাকবে
      
      alert("Login Successful!");
      
      // ৩. লগইন শেষে items পেজে রিডাইরেক্ট করা এবং পেজ রিফ্রেশ দেওয়া 
      // যাতে নেববার সাথে সাথে আপডেট হয়
      window.location.href = "/items"; 
    } else {
      alert("ভুল ইমেইল বা পাসওয়ার্ড! (সঠিক: admin@gmail.com / 123456)");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <h2 className="text-3xl font-bold text-center text-primary mb-4">Login Now</h2>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="admin@gmail.com"
              className="input input-bordered focus:input-primary"
              required
            />
          </div>

          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="123456"
              className="input input-bordered focus:input-primary"
              required
            />
          </div>

          <div className="form-control mt-8">
            <button type="submit" className="btn btn-primary text-white w-full uppercase">
              Login
            </button>
          </div>
          
          <p className="text-center text-sm mt-4">
            লগইন করতে ব্যবহার করুন: <br/> 
            <span className="badge badge-ghost">admin@gmail.com</span> / <span className="badge badge-ghost">123456</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;