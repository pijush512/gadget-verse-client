"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import { Cpu, LogOut, UserCircle } from 'lucide-react'; 

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const isLogged = cookies.find((row) => row.startsWith("isLoggedIn=true"));
    setIsLoggedIn(!!isLogged);
  }, []);

  const handleLogout = () => {
    document.cookie = "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
    router.push("/");
  };

  const links = <>
    <Link href="/" className={pathname === "/" ? "text-primary font-black uppercase tracking-widest text-[11px] mr-6" : "mr-6 font-black uppercase tracking-widest text-[11px] opacity-60 hover:opacity-100 hover:text-primary transition-all"}>Home</Link>
    <Link href="/items" className={pathname === "/items" ? "text-primary font-black uppercase tracking-widest text-[11px] mr-6" : "mr-6 font-black uppercase tracking-widest text-[11px] opacity-60 hover:opacity-100 hover:text-primary transition-all"}>Item List</Link>
    <Link href="/about" className={pathname === "/about" ? "text-primary font-black uppercase tracking-widest text-[11px] mr-6" : "mr-6 font-black uppercase tracking-widest text-[11px] opacity-60 hover:opacity-100 hover:text-primary transition-all"}>About Us</Link>
    <Link href="/contact" className={pathname === "/contact" ? "text-primary font-black uppercase tracking-widest text-[11px] mr-6" : "mr-6 font-black uppercase tracking-widest text-[11px] opacity-60 hover:opacity-100 hover:text-primary transition-all"}>Contact</Link>
    {isLoggedIn && (
      <Link href="/add-item" className={pathname === "/add-item" ? "text-primary font-black uppercase tracking-widest text-[11px] mr-6" : "mr-6 font-black uppercase tracking-widest text-[11px] opacity-60 hover:opacity-100 hover:text-primary transition-all"}>Add Item</Link>
    )}
  </>

  return (
    <div className='bg-base-300 border-b border-gray-100 sticky top-0 z-50'>
      <div className="navbar w-11/12 mx-auto h-17">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-[2rem] z-[1] mt-3 w-52 p-4 shadow-2xl border border-base-200">
              {links}
            </ul>
          </div>
          <Link href="/" className='flex items-center gap-2'>
            <Cpu size={28} className="text-primary" strokeWidth={2.5} />
            <span className="text-2xl font-black tracking-tighter uppercase italic hidden md:inline-block">
              Gadget<span className="text-primary">Verse</span>
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

        <div className="navbar-end gap-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="h-12 px-6 bg-[#123456] text-white rounded-lg font-black uppercase tracking-[0.2em] text-[10px] hover:scale-105 transition-all flex items-center gap-2 group shadow-lg shadow-slate-200"
            >
              <LogOut size={14} className="opacity-70 group-hover:opacity-100 transition-opacity text-slate-300" />
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="h-12 px-8 bg-primary text-white rounded-lg font-black uppercase tracking-[0.2em] text-[10px] hover:scale-105 transition-all flex items-center gap-2 group shadow-lg shadow-blue-200"
            >
              Login
              <UserCircle size={16} className="opacity-70 group-hover:opacity-100 transition-opacity text-blue-100" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar