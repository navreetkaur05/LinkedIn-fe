import React from "react";

const Explore = () => {
  return (
    <section className="w-full h-[255px] bg-[#f3f2ef]">
      
      <div className="max-w-[1100px] mx-auto h-full flex items-start gap-12 pt-10">

        <div className="w-[330px]">
          <h1 className="text-[25px] font-normal text-gray-900 mb-2">
            Explore top LinkedIn content
          </h1>

          <p className="text-[15px] leading-5 text-gray-700">
            Discover relevant posts and expert insights -
            curated by topic and in one place.
          </p>
        </div>

        <div className="w-[500px] flex flex-wrap gap-2">

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Career
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Productivity
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Finance
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Soft Skills & Emotional Intelligence
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Project Management
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Education
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Technology
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Leadership
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Ecommerce
          </button>

          <button className="h-[38px] px-5 rounded-full border border-blue-500 text-blue-600 text-[12px] hover:bg-blue-50">
            Show all
          </button>

        </div>

      </div>

    </section>
  );
};

export default Explore;