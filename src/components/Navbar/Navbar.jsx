"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import LogoImg from '../../../public/icon.png'
import { usePathname, useRouter } from 'next/navigation';


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
    // কুকি ডিলিট করা
    document.cookie = "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
    router.push("/");
  };

  const links = <>
    <Link href="/" className={pathname === "/" ? "underline font-semibold mr-4" : "mr-4 font-semibold"}>Home</Link>
    <Link href="/items" className={pathname === "/items" ? "underline font-semibold mr-4" : "mr-4 font-semibold"}>Item List</Link>
    <Link href="/about" className={pathname === "/about" ? "underline font-semibold mr-4" : "mr-4 font-semibold"}>About Us</Link>
    <Link href="/contact" className={pathname === "/contact" ? "underline font-semibold mr-4" : "mr-4 font-semibold"}>Contact</Link>
    {
      isLoggedIn && (
        
           <Link href="/add-item" className={pathname === "/add-item" ? "underline font-semibold mr-4" : "mr-4 font-semibold"}>Add Item</Link>
        
      )
    }
  
  </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link href="/">
          <img className='w-10 h-10'
            src={LogoImg.src} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          isLoggedIn ? (
            <button onClick={handleLogout} className="btn btn-error btn-outline btn-sm">Logout</button>
          ) : (
            <Link className='btn btn-primary'
          href="/login">Login</Link>
          )
        }
        
      </div>
    </div>
  )
}

export default Navbar
