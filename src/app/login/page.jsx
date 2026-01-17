"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Mail, Lock, LogIn, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "admin@gmail.com" && password === "123456") {
      document.cookie = "isLoggedIn=true; path=/; max-age=86400";

      toast.success("Login Successful! 🎉", {
        style: {
          borderRadius: "15px",
          background: "#1e293b",
          color: "#fff",
        },
      });

      setTimeout(() => {
        window.location.href = "/items";
      }, 1000);
    } else {
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 px-6">
      <div className="max-w-md mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">
            Welcome <span className="text-primary italic">Back!</span>
          </h2>
          <div className="h-1.5 w-16 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 font-medium text-sm">
            Enter your credentials to manage your store.
          </p>
        </div>
        <div className="bg-gray-50 rounded-[.5rem] p-8 md:p-10 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/5 rounded-full"></div>
          <form onSubmit={handleLogin} className="space-y-6 relative z-10">
            <div className="form-control">
              <label className="label py-0 mb-2">
                <span className="label-text font-bold text-gray-600 uppercase text-[10px] tracking-widest flex items-center gap-2">
                  <Mail size={14} className="text-primary" /> Email Address
                </span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="admin@gmail.com"
                className="input input-bordered w-full rounded-2xl bg-white border-gray-200 focus:outline-blue-600 h-14 font-semibold"
                required
              />
            </div>

            {/* Password*/}
            <div className="form-control">
              <label className="label py-0 mb-2">
                <span className="label-text font-bold text-gray-600 uppercase text-[10px] tracking-widest flex items-center gap-2">
                  <Lock size={14} className="text-primary" /> Password
                </span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full rounded-2xl bg-white border-gray-200 focus:outline-blue-600 h-14 font-semibold"
                required
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="h-14 w-full bg-primary text-white rounded-lg font-black uppercase tracking-[0.2em] text-[12px] hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
              >
                <LogIn size={18} />
                Sign In
              </button>
            </div>
          </form>
          <div className="mt-10 pt-8 border-t border-gray-200/60">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] text-center mb-4">
              Test Access
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-gray-100">
                <span className="text-[11px] font-bold text-gray-500 uppercase">Email</span>
                <span className="text-[11px] font-black text-primary">admin@gmail.com</span>
              </div>
              <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-gray-100">
                <span className="text-[11px] font-bold text-gray-500 uppercase">Pass</span>
                <span className="text-[11px] font-black text-primary">123456</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;