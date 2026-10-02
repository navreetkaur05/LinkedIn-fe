import React from "react";
import { Link } from "react-router-dom";

const NavbarFeed = () => {
  return (
    <nav className="h-[65px] w-full border-b border-gray-200">
      <div className="h-full max-w-[1100px] mx-auto flex items-center">
        <div className="w-[500px] flex gap-2">
          <img src="https://img.magnific.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg?semt=ais_hybrid&w=740&q=80" alt="LinkedIn" className="w-[50px] h-auto" />
          <div className="relative flex items-center flex-1">
            <i className="fa-solid fa-magnifying-glass absolute left-3 text-gray-500 text-sm "></i>
            <input 
              type="search" 
              id="search-input" 
              name="q" 
              placeholder="Search" 
              required 
              className="w-full pl-9 pr-4 py-1.5 border border-gray-700 rounded-[20px]  text-sm text-gray-900 placeholder-gray-600 h-[34px]"
            />
          </div>
        </div>

        <div className="flex items-center justify-end flex-1 gap-5">
          <div className="flex flex-col items-center justify-center text-gray-600 cursor-pointer">
            <i class="fa-solid fa-house-chimney text-[16px]"></i>
            <span className="text-[9px] mt-1">Home</span>
          </div>

          <div className="flex flex-col items-center justify-center text-gray-600 cursor-pointer">
            <i class="fa-solid fa-user-group text-[16px]"></i>
            <span className="text-[9px] mt-1">My Network</span>
          </div>

          <div className="flex flex-col items-center justify-center text-gray-600 cursor-pointer">
            <i class="fa-solid fa-briefcase text-[16px]"></i>
            <span className="text-[9px] mt-1">Jobs</span>
          </div>

          <div className="flex flex-col items-center justify-center text-gray-600 cursor-pointer">
            <i class="fa-solid fa-message text-[16px]"></i>
            <span className="text-[9px] mt-1">Messaging</span>
          </div>

          <div className="flex flex-col items-center justify-center text-gray-600 cursor-pointer">
              <i class="fa-solid fa-bell text-[16px]"></i>            
              <span className="text-[9px] mt-1">Notifications</span>
          </div>

          <div className="flex flex-col items-center justify-center text-gray-600 cursor-pointer">
            <i class="fa-solid fa-user text-[16px]"></i>
            <span className="text-[9px] mt-1">Me</span>
          </div>

          <div className="h-[65px] w-[1px] bg-gray-200"></div>

          <div className="flex flex-col items-center justify-center text-gray-600 cursor-pointer">
           <i class="fa-solid fa-building text-[16px]"></i>
            <span className="text-[9px] mt-1">For Bussiness <i class="fa-solid fa-angle-down text-grey-300"></i></span>
          </div>

          <div className="flex flex-col items-center justify-center text-gray-600 cursor-pointer">
           <i class="fa-solid fa-square text-[16px] text-yellow-500"></i>
            <span className="text-[9px] mt-1">Try Premium for ₹ 0</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarFeed;
