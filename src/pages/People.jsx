import React from "react";

const People = () => {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <nav className="h-[65px] w-full bg-white border-b border-gray-200 flex">
        <div className="h-full max-w-[1200px] mx-auto flex items-center">
          <div className="w-[120px]">
            <img src="/Logo.png" alt="LinkedIn" className="w-[90px] h-auto" />
          </div>

          <div className="h-[42px] w-[560px] bg-[#eef3f8] rounded-md flex items-center">
            <div className="h-full w-[120px] flex items-center justify-center gap-1 border-r border-gray-300 cursor-pointer">
              <span className="text-[14px] text-gray-700">People</span>

              <i className="fa-solid fa-caret-down text-[12px] text-gray-700"></i>
            </div>

            <input
              type="text"
              placeholder="First Name"
              className="h-full w-[205px] bg-transparent px-5
              text-[14px] text-gray-700 outline-none
              border-r border-gray-300"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="h-full w-[205px] bg-transparent px-5
              text-[14px] text-gray-700 outline-none"
            />

            <button
              className="h-full w-[50px] flex items-center
              justify-center border-l border-gray-300"
            >
              <i className="fa-solid fa-magnifying-glass text-[17px] text-gray-500"></i>
            </button>
          </div>

          <div className="flex items-center gap-6 ml-[50px]">
            

            <a href="/signup" className="text-gray-800 text-[15px] font-medium">
              Join now
            </a>

            <a
              href="/signin"
              className="h-[38px] px-6 rounded-full border border-blue-600
              text-blue-600 text-sm font-medium flex items-center hover:bg-blue-50"
            >
              Sign in
            </a>
          </div>
        </div>
      </nav>

<div className="flex flex-col items-center pt-[140px]">

  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hs9uC4IG-Hy5bvJrYR-QPsB1H1xLPI-K98ECBSAEEs3P1RXD4m6nb_K0&s=10"
    alt=""
    className="w-[250px] h-[250px] rounded-full"
  />

  <p className="text-[20px] text-gray-900 mt-[40px]">
    Try searching for your co-worker, classmate, professor, or friend.
  </p>

</div>
    </div>
  );
};

export default People;
