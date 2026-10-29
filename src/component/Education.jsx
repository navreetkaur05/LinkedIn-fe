import React from "react";

const Education = () => {
  return (
    <>
      <div className="bg-white border rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Education</h2>
          <div className="flex items-center gap-6">
            <i className="fa-solid fa-plus cursor-pointer text-2xl"></i>
            <i className="fa-solid fa-pencil cursor-pointer text-xl"></i>
          </div>
        </div>

        <div className="border rounded-lg p-4 mt-4">
          <h3 className="font-semibold">
            Baba Banda Singh Bahadur Engineering College
          </h3>
          <p className="text-sm mt-2">
            B.Tech - Computer Science and Engineering
          </p>
          <p className="text-sm text-gray-500 mt-1">2023 – 2027</p>
        </div>
      </div>
    </>
  );
};
export default Education;
