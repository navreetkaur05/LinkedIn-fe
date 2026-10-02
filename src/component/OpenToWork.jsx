import React from "react";

const OpenToWork = () => {
  return (
    <section className="w-full h-[400px] bg-[#f3f2ef] p-6">
      
      <div className="max-w-[1100px] mx-auto h-full flex items-start gap-[150px] pt-10">

        <div className="w-[330px]">
          <h1 className="text-[25px] font-normal text-red-700 mb-2">
            Let the right people know you're open to work
          </h1>

          <p className="text-[15px] leading-5 text-gray-700">
            with the Open To Work featurre, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.
          </p>
        </div>

        <div className="w-[500px]">
            <img src="https://static.licdn.com/aero-v1/sc/h/dbvmk0tsk0o0hd59fi64z3own" alt="" className="h-[300px] w-[300px]"/>
        </div>

      </div>

    </section>
  );
};

export default OpenToWork;