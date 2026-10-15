import React from "react";
import SaveButton from "./buttons/SaveButton";

const Skills = ({ onClose }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center">

        <div className="bg-white w-[85%] rounded-xl">

          <div className="flex justify-between items-center border-b p-5">
            <h1 className="text-3xl font-semibold">
              Add skill
            </h1>

            <button 
             onClick={onClose}
             className="text-4xl text-gray-600">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="p-9">

            <p className="text-gray-500 mb-12">
              * Indicates required
            </p>

            <label className="block text-lg mb-2">
              Skill*
            </label>

            <input
              type="text"
              placeholder="Project Management"
              className="w-full border border-gray-400 rounded-md p-3 text-lg outline-none"
            />

            <div className="mt-12 bg-gray-100 border rounded-xl p-6">

              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold">
                  Suggested based on your profile
                </h2>

                <button className="text-xl text-gray-600">
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>

              <div className="flex flex-wrap gap-3">

                <button className="border border-gray-400 rounded-full px-4 py-2 hover:bg-gray-200">
                  Web Development 
                </button>

                <button className="border border-gray-400 rounded-full px-4 py-2 hover:bg-gray-200">
                  Front-End Development 
                </button>

                <button className="border border-gray-400 rounded-full px-4 py-2 hover:bg-gray-200">
                  HTML 
                </button>

                <button className="border border-gray-400 rounded-full px-4 py-2 hover:bg-gray-200">
                  Web Applications 
                </button>

                <button className="border border-gray-400 rounded-full px-4 py-2 hover:bg-gray-200">
                  Software Development 
                </button>

              </div>
            </div>
          </div>

          <SaveButton />

        </div>
      </div>
    </>
  );
};

export default Skills;
