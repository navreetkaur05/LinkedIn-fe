import React from "react";

const FindJob = () => {
  return (
    <section className="w-full h-[255px]">
      
      <div className="max-w-[1100px] mx-auto h-full flex items-start gap-12 pt-10">

        <div className="w-[330px]">
          <h1 className="text-[25px] font-normal text-gray-900 mb-2">
            Find the right job or internship for you
          </h1>
        </div>

        <div className="w-[500px] flex flex-wrap gap-2">

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Engineering
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Business Development
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Finance
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Administrative Assistant
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Retail Associate
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Customer Service
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Operations
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Information Technology
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Marketing
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Human Resources
          </button>

          <button className="h-[38px] px-5 rounded-full border border-blue-500 text-blue-600 text-[12px] hover:bg-blue-50">
            Show more 
          </button>

        </div>

      </div>

    </section>
  );
};

export default FindJob;