import React from "react";

const SoftwareTools = () => {
  return (
    <section className="w-full h-[255px]">
      
      <div className="max-w-[1100px] mx-auto h-full flex items-start gap-12 pt-10">

        <div className="w-[330px]">
          <h1 className="text-[25px] font-normal text-gray-900 mb-2">
            Discover the best software tools
          </h1>
          <p className="text-[15px] leading-5 text-gray-700">
            Connect with buyers who have first-hand experience to find the best products for you.
          </p>
        </div>

        <div className="w-[500px] flex flex-wrap gap-2">

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            E-Commerce Platforms
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
             CRM Software
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Human Resources Management Systems
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
             Recruiting Software
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Sales Intelligence Software
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Project Management Software
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Help Desk Software
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Social Networking Software
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Desktop Publishing Software
          </button>

          <button className="h-[38px] px-5 rounded-full border border-blue-500 text-blue-600 text-[12px] hover:bg-blue-50">
            Show all 
          </button>

        </div>

      </div>

    </section>

    
  );
};

export default SoftwareTools;