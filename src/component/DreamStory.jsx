import React from "react";

const DreamStory = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="relative max-w-[1000px] mx-auto">

        <div className="ml-[210px] w-[830px] h-[360px] bg-[#f3f8fc] flex items-center">
          <div className="ml-[120px] w-[300px]">

            <h2 className="text-[20px] font-normal text-gray-900 mb-2">
              In it to chase my dream
            </h2>

            <p className="text-[13px] leading-[16px] text-gray-800">
              Check out Gayatri's story of finding a new job on
              <br />
              LinkedIn
            </p>

          </div>

        </div>

        <div className="absolute left-0 top-[85px] w-[300px] h-[250px] bg-black rounded-[2px] overflow-hidden flex flex-col items-left py-8 px-5 gap-2">
            <img src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-650-80.jpg" alt="" className="h-[40px] w-[80px]"/>
            <span className="text-white font-bold">This video is private</span>
            <p className="text-white">If the owner of this video has granted you access, please sign in.</p>
            <button className="h-[38px] w-[100px] px-5 rounded-full border bg-white text-black text-sm font-medium hover:bg-blue-50">
            Sign in
          </button>
        </div>

      </div>
    </section>
  );
};

export default DreamStory;