import React from "react";

const ConnectPeople = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[550px] mx-auto flex justify-between gap-20">

        <div className="w-[250px]">

          <img
            src="https://static.licdn.com/aero-v1/sc/h/43h6n82li4xu0q23s8jqizk6j"
            alt="Connect with people"
            className="w-[140px] h-[140px] object-contain mb-2"
          />

          <h2 className="text-[16px] leading-[21px] font-normal text-gray-900 w-[230px]">
            Connect with people who can help
          </h2>

          <button
            className="mt-4 h-[28px] px-3 rounded-full
                       border border-gray-500
                       text-[10px] text-gray-800
                       hover:bg-gray-100"
          >
            Find people you know
          </button>

        </div>


        <div className="w-[250px]">

          <img
            src="https://static.licdn.com/aero-v1/sc/h/1dhh8rr3wohexkaya6jhn2y8j"
            alt="Learn skills"
            className="w-[140px] h-[140px] object-contain mb-2"
          />

          <h2 className="text-[16px] leading-[21px] font-normal text-gray-900 w-[230px]">
            Learn the skills you need to succeed
          </h2>

          <button
            className="mt-4 w-[200px] h-[36px]
                       rounded-[4px]
                       border border-gray-200
                       bg-white
                       text-[10px] text-gray-700
                       flex items-center justify-between
                       px-3
                       hover:bg-gray-50"
          >

<select id="cars" name="cars">
  <option value="">Choose a topic to learn about</option>
  <option value="Bussiness">Bussiness</option>
  <option value="Software">Software Development</option>
  <option value="Customer">Customer Services</option>
  <option value="Resources">Human Resources</option>
</select>
          </button>

        </div>

      </div>
    </section>
  );
};

export default ConnectPeople;