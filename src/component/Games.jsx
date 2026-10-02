import React from "react"

const Games = () => {
  return (
    <section className="w-full h-[255px]">
      
      <div className="max-w-[1100px] mx-auto h-full flex items-start gap-12 py-20">

        <div className="w-[330px]">
          <h1 className="text-[25px] font-normal text-gray-900 mb-2">
            Keep your mind sharp with games
          </h1>
          <p className="text-[15px] leading-5 text-gray-700">
Take a break and reconnect with your network through quick daily games.</p>
        </div>

        <div className="w-[500px] flex flex-wrap gap-2">

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
Patches          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
             Zip
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
           Mini Sudoku
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
             Queens
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Tango
          </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
                Pinpoint          
            </button>

          <button className="h-[38px] px-5 rounded-full border border-gray-400 text-gray-800 text-[12px] hover:bg-gray-200">
            Crossclimb
          </button>
        </div>
      </div>
    </section>
  );
};

export default Games;