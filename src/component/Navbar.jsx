import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="h-[65px] w-full border-b border-gray-200">
      <div className="h-full max-w-[1200px] mx-auto flex items-center">
        <div className="w-[120px]">
          <img src="/Logo.png" alt="LinkedIn" className="w-[90px] h-auto" />
        </div>

        <div className="flex items-center justify-end flex-1 gap-5">
          <Link to="/topcontent" className="flex flex-col items-center justify-center text-gray-600 cursor-pointer">
            <i className="fa-solid fa-rocket text-[16px]"></i>
            <span className="text-[9px] mt-1">Top Content</span>
          </Link>

          <Link className="flex flex-col items-center justify-center text-gray-600 cursor-pointer">
            <i className="fa-solid fa-users text-[16px]"></i>
            <span className="text-[9px] mt-1">People</span>
          </Link>

          <Link className="flex flex-col items-center justify-center text-gray-600 cursor-pointer">
            <i className="fa-regular fa-square-caret-right text-[16px]"></i>
            <span className="text-[9px] mt-1">Learning</span>
          </Link>

          <Link className="flex flex-col items-center justify-center text-gray-600 cursor-pointer">
            <i className="fa-solid fa-briefcase text-[16px]"></i>
            <span className="text-[9px] mt-1">Jobs</span>
          </Link>

          <Link className="flex flex-col items-center justify-center text-gray-600 cursor-pointer">
            <i className="fa-solid fa-puzzle-piece text-[16px]"></i>
            <span className="text-[9px] mt-1">Games</span>
          </Link>

          <Link className="flex flex-col items-center justify-center text-gray-600 cursor-pointer">
            <i className="fa-solid fa-laptop text-[16px]"></i>
            <span className="text-[9px] mt-1">Get the app</span>
          </Link>

          <div className="h-[40px] w-[1px] bg-gray-200"></div>

          <Link
            to="/signin"
            className="h-[38px] px-5 rounded-full border border-blue-600
             text-blue-600 text-sm font-medium
             flex items-center hover:bg-blue-50"
          >
            Sign in
          </Link>

          <Link to="/signup" className="h-[38px] px-5 rounded-full bg-blue-600 text-white
             text-blue-600 text-sm font-medium
             flex items-center hover:bg-blue-500">
            Join now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
