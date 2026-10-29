import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from "./ProfilePic";

const Left = () => {
  return (
    <>
      <div className="p-3 w-[25%]">
        <div className="bg-white rounded-lg border border-gray-300 overflow-hidden h-[200px] w-[100%]">
          <div className="h-[55px] bg-[#b6cde0] relative">
            <div className="absolute -bottom-8 left-[52px]">
              <div className="w-[58px] h-[58px] rounded-full bg-gray-400 border-2 border-white overflow-hidden">
                <ProfilePic />
              </div>

              <div className="absolute -right-1 bottom-0 text-blue-900 rounded-full w-6 h-6 flex items-center justify-center">
                <i className="fa-solid fa-circle-plus text-[18px]"></i>
              </div>
            </div>
          </div>

          <div className="pt-10 px-3 pb-3">
            <Link to="/profile">
              <h2 className="font-semibold text-[16px]">Navreet Kaur</h2>
            </Link>

            <p className="text-[10px] leading-3 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              dolores?
            </p>

            <p className="text-[9px] text-gray-500">
              Lorem ipsum dolor sit amet.
            </p>

            <button className="mt-2 border-dotted border-2 border-gray-500 rounded-sm w-full text-[11px]">
              Experience
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg mt-2 p-3 h-[90px] w-[100%]">
          <p className="text-[9px] text-gray-500">See how Premium helps you</p>

          <p className="text-[9px] text-gray-500">achieve your goals</p>

          <p className="text-[10px] mt-1">Act now: 1 month of free</p>

          <p className="text-[10px]">Premium</p>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg mt-2 p-3 h-[70px] w-[100%]">
          <div className="flex justify-between text-[10px]">
            <span>Profile viewers</span>

            <span className="text-blue-600">20</span>
          </div>

          <a
            href=""
            className="text-[10px] hover:text-blue-800 mt-4 font-medium"
          >
            View all analytics
          </a>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg mt-2 p-3 h-[150px] w-[100%] flex flex-col gap-2">
          <span>
            <i class="fa-solid fa-bookmark"></i> Saved items
          </span>
          <span>
            <i class="fa-solid fa-people-group"></i> Groups
          </span>
          <span>
            <i class="fa-solid fa-newspaper"></i> Newsletters
          </span>
          <span>
            <i class="fa-solid fa-calendar-days"></i> Events
          </span>
        </div>
      </div>
    </>
  );
};

export default Left;
