import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex h-20 w-full bg-cyan-700 items-center justify-center p-10">
      <div className="h-full w-[18%] font-bold text-2xl flex items-center justify-center">
        <h2>Sufiyan</h2>
      </div>
      <div className="h-full w-[82%] flex items-center justify-end gap-10">
        <Link className='underline' to="/home">Home</Link>
        <Link className='underline' to="/course">Courses</Link>
        <Link className='underline' to="/product">Product</Link>
        <Link className='underline' to="/about">About</Link>
        <Link className='underline' to="/contact">Contact</Link>
        <Link className='underline' to='/customer'>Customer</Link>
      </div>
    </div>
  );
};

export default Navbar;
