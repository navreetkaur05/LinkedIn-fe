import React from "react";

const JoinLinkedIn = () => {
  return (
    <section className="w-full h-[490px] relative overflow-hidden">

      <img
        src="/JoinLinkedIn.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 max-w-[1000px] mx-auto pt-[60px]">

        <h1 className="text-[25px] leading-[32px] font-bold text-gray-900 w-[550px]">
          Join your colleagues, classmates, and friends on LinkedIn
        </h1>

        <button
          className="mt-3 bg-blue-600 hover:bg-blue-700
                     text-white text-[15px] font-medium
                     px-4 py-2 rounded-full"
        >
          Get started
        </button>

      </div>

    </section>
  );
};

export default JoinLinkedIn;