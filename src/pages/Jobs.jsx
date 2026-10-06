import react from "react";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <>
      <nav className="border-b border-gray-200">
        <div className="max-w-[900px] mx-auto h-[63px] flex items-center">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.png"
            className="h-[40px] mr-[20px]"
            alt=""
          />

          <button
            className="h-[32px] px-3 bg-[#eef3f8]
               border-r border-gray-300
               text-[10px]
               flex items-center gap-2"
          >
            Jobs
            <i className="fa-solid fa-caret-down text-[11px]"></i>
          </button>

          <input
            type="text"
            placeholder="Jobs"
            className="h-[32px] w-[250px]
               bg-[#eef3f8]
               px-3
               text-[10px]
               outline-none
               border-r border-gray-300"
          />

          <div
            className="h-[32px] w-[250px]
               bg-[#eef3f8]
               flex items-center
               px-3
               text-[10px]"
          >
            United States
          </div>

          <button
            className="h-[32px] w-[32px]
               bg-[#eef3f8]
               border-l border-gray-300
               flex items-center justify-center"
          >
            <i className="fa-solid fa-magnifying-glass text-[13px]"></i>
          </button>

          <div className="ml-auto flex items-center gap-2">
            <Link
              to="/signin"
              className="border border-[#0A66C2]
                 text-[#0A66C2]
                 rounded-full
                 px-5 py-2
                 text-[10px]"
            >
              Sign in
            </Link>

            <Link
              to="/signup"
              className="bg-[#0A66C2]
                 text-white
                 rounded-full
                 px-5 py-2
                 text-[10px]
                 font-semibold"
            >
              Join now
            </Link>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto h-[42px] flex items-center gap-2">
          <button
            className="border border-gray-400
               rounded-full
               px-3 py-1
               text-[9px]
               flex items-center gap-2"
          >
            Date posted
            <i className="fa-solid fa-caret-down text-[11px]"></i>
          </button>

          <button
            className="border border-gray-400
               rounded-full
               px-3 py-1
               text-[9px]
               flex items-center gap-2"
          >
            Company
            <i className="fa-solid fa-caret-down text-[11px]"></i>
          </button>

          <button
            className="border border-gray-400
               rounded-full
               px-3 py-1
               text-[9px]"
          >
            Under 10 applicants
          </button>

          <span className="ml-auto text-[9px] text-gray-700">
            <i className="fa-solid fa-flag text-[9px]"></i> Where are the filters?
          </span>
        </div>
      </nav>

      <main className="max-w-[900px] mx-auto">
        <div className="flex flex-col gap-[10px]">
          <div className="h-[90px] p-3">
            <p className="text-[9px] mb-2">
              Get notified about new Jobs jobs in{" "}
              <span className="font-bold">United States.</span>
            </p>

            <button
              className="border border-[#0A66C2]
                   text-[#0A66C2]
                   rounded-full
                   px-4 py-1.5
                   text-[9px]"
            >
              Sign in to create job alert
            </button>
            <br />
            <span className="text-[9px] mb-2">
              11,000+ Jobs in United States
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default Jobs;
