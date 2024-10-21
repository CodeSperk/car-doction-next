import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoSearch, IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Services",
      path: "/services"
    },
    {
      title: "Blog",
      path: "/blogs"
    },
    {
      title: "Contact",
      path: "/contact"
    },
  ]

  return (
    <div className=" bg-base-100">
 <div className="navbar max-content-width">
 <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-6 shadow">
         <div className='flex flex-col gap-6 font-semibold '>
      {
        navItems.map((item) => 
        <Link key={item.path} href={item.path} className='hover:text-primary duration-300'>
          {item.title}
        </Link>)
      }
    </div>
      </ul>
    </div>
    <Link href="/" >
      <Image alt="logo" src="/assets/logo.svg" width="80" height="40" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <div className='flex gap-6 font-semibold '>
      {
        navItems.map((item) => 
        <Link key={item.path} href={item.path} className='hover:text-primary'>
          {item.title}
        </Link>)
      }
    </div>
  </div>
  <div className="navbar-end flex gap-4">
  <IoCartOutline className='text-2xl'/>
  <IoSearch className='text-2xl'/>
    <button className='btn bg-transparent border-2  border-primary hover:bg-primary hover:text-white duration-300'>Appoinment</button>
    <Link href="/login">
    <button className='btn btn-primary text-white'>Login</button>
    </Link>
  </div>
 </div>
</div>
  );
};

export default Navbar;
