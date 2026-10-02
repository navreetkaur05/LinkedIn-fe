import React from "react";

const WhoIsLinkedInFor = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-[1000px] mx-auto flex items-center justify-between">

        <div className="w-[450px] h-[360px] bg-[#f3f2ef] flex items-center">

          <div className="ml-[183px] w-[215px]">

            <h2 className="text-[16px] text-[#c44d2f] font-normal mb-1">
              Who is LinkedIn for?
            </h2>

            <p className="text-[11px] text-gray-800 mb-4">
              Anyone looking to navigate their professional life.
            </p>

            <button
              className="w-[215px] h-[32px] bg-[#e9e5df]
                         flex items-center justify-between
                         px-2 text-[10px] text-gray-800
                         mb-2 hover:bg-[#ded9d1]"
            >
              <span>Find a coworker or classmate</span>
              <span className="text-[16px]"><i class="fa-solid fa-angle-right"></i></span>
            </button>

            <button
              className="w-[215px] h-[32px] bg-[#e9e5df]
                         flex items-center justify-between
                         px-2 text-[10px] text-gray-800
                         mb-2 hover:bg-[#ded9d1]"
            >
              <span>Find a new job</span>
              <span className="text-[16px]"><i class="fa-solid fa-angle-right"></i></span>
            </button>

            <button
              className="w-[215px] h-[32px] bg-[#e9e5df]
                         flex items-center justify-between
                         px-2 text-[10px] text-gray-800
                         hover:bg-[#ded9d1]"
            >
              <span>Find a course or training</span>
              <span className="text-[16px]"><i class="fa-solid fa-angle-right"></i></span>
            </button>

          </div>
        </div>

        <div className="w-[420px] h-[420px] flex items-center justify-center">

          <img
            src="https://static.licdn.com/aero-v1/sc/h/eghb2zc0p5s2x42wbi80w4v8a"
            alt=""
            className="w-[420px] h-[420px] object-cover rounded-full"
          />

        </div>

      </div>
    </section>
  );
};

export default WhoIsLinkedInFor;