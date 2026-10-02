import React from "react";
import Navbar from "../component/Navbar";
import EditorsPicks from "../component/EditorPicks";
import TopicCategories from "../component/TopicCategories";
import Footer from "../component/Footer";

const TopContent = () => {
  return (
    <>
    <Navbar />
    <div className="w-full border-l-2 border-gray-400 bg-[#f3f2ef] py-4">

      <h1 className="text-center text-[29px] font-semibold text-gray-900 mb-8">
        What topics do you want to explore?
      </h1>

      <div className="flex flex-wrap justify-center gap-2 px-2">

        <button className="h-[25px] px-4 rounded-full border border-gray-400 text-[11px] text-gray-800 bg-white">
          Tips for Managing Stressors with Mental Toughness
        </button>

        <button className="h-[25px] px-4 rounded-full border border-gray-400 text-[11px] text-gray-800 bg-white">
          How to Navigate Difficult Conversations for Personal Growth
        </button>

        <button className="h-[25px] px-4 rounded-full border border-gray-400 text-[11px] text-gray-800 bg-white">
          Top Emerging AI Use Cases and Their Capabilities
        </button>

        <button className="h-[25px] px-4 rounded-full border border-gray-400 text-[11px] text-gray-800 bg-white">
          How Leaders Foster Psychological Safety
        </button>

        <button className="h-[25px] px-4 rounded-full border border-gray-400 text-[11px] text-gray-800 bg-white">
          Tips for Curating a Professional Network
        </button>

        <button className="h-[25px] px-4 rounded-full border border-gray-400 text-[11px] text-gray-800 bg-white">
          Tips for Strategic Career Planning
        </button>

        <button className="h-[25px] px-4 rounded-full border border-gray-400 text-[11px] text-gray-800 bg-white">
          How to Find the Right Mentor for Your Career
        </button>

        <button className="h-[25px] px-4 rounded-full border border-gray-400 text-[11px] text-gray-800 bg-white">
          Tips for Optimizing Your LinkedIn Profile
        </button>

        <button className="h-[25px] px-4 rounded-full border border-gray-400 text-[11px] text-gray-800 bg-white">
           How to Set Priorities as a Leader
        </button>

      </div>

        <EditorsPicks />
        <TopicCategories />

       <div className="w-full h-[58px] bg-white border-t border-gray-200">

        <div className="max-w-[1200px] mx-auto h-full px-10 flex items-center gap-4">

          <img
            src="Logo.png"
            alt="LinkedIn"
            className="w-[65px]"
          />

          <span className="text-[12px] text-gray-600">
            <i class="fa-regular fa-copyright"></i>2026
          </span>

          <a href="" className="text-[12px] text-gray-600 hover:text-blue-900 hover:underline hover:font-bold">
            About
          </a>

          <a href="" className="text-[12px] text-gray-600 hover:text-blue-900 hover:underline hover:font-bold">
            Accessibility
          </a>

          <a href="" className="text-[12px] text-gray-600 hover:text-blue-900 hover:underline hover:font-bold">
            User Agreement
          </a>

          <a href="" className="text-[12px] text-gray-600 hover:text-blue-900 hover:underline hover:font-bold">
            Privacy Policy
          </a>

          <a href="" className="text-[12px] text-gray-600 hover:text-blue-900 hover:underline hover:font-bold">
            Cookie Policy
          </a>

          <a href="" className="text-[12px] text-gray-600 hover:text-blue-900 hover:underline hover:font-bold">
            Copyright Policy
          </a>

          <a href="" className="text-[12px] text-gray-600 hover:text-blue-900 hover:underline hover:font-bold">
            Brand Policy
          </a>

          <a href="" className="text-[12px] text-gray-600 hover:text-blue-900 hover:underline hover:font-bold">
            Guest Controls
          </a>

          <a href="" className="text-[12px] text-gray-600 hover:text-blue-900 hover:underline hover:font-bold">
            Community Guidelines
          </a>

          <button className="text-[12px] text-gray-600 flex items-center gap-1 hover:text-blue-900 hover:font-bold">
            Language
            <i className="fa-solid fa-angle-down text-[16px]"></i>
          </button>

        </div>

      </div>
    </div>
    </>
  );
};

export default TopContent;
