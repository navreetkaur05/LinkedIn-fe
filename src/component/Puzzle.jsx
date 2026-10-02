import react from "react"
const Puzzles = () => {
  return (
    <div>

      <h2 className="font-semibold text-[16px] mt-3 ">
        Today's puzzles
      </h2>

      <div className="flex items-center py-2">

        <div className="text-xl w-8 text-green-600">
          <i class="fa-solid fa-puzzle-piece"></i>
        </div>

        <div className="flex-1">
          <p className="text-[15px] font-semibold">
            Zip #559
          </p>

          <p className="text-[13px] text-gray-500">
            1 connection played
          </p>
        </div>

        <i class="fa-solid fa-chevron-right text-[15px]"></i>

      </div>

      <div className="flex items-center py-2">

        <div className="text-xl w-8">
          <i class="fa-solid fa-square text-orange-600"></i>
        </div>

        <div className="flex-1">
          <p className="text-[15px] font-semibold">
            Wend #110
          </p>

          <p className="text-[13px] text-gray-500">
            1 connection played
          </p>
        </div>

        <i class="fa-solid fa-chevron-right text-[15px]"></i>

      </div>

      <div className="flex items-center py-2">

        <div className="text-xl w-8">
          <i class="fa-solid fa-square text-red-300"></i>
        </div>

        <div className="flex-1">
          <p className="text-[15px] font-semibold">
            Patches #193
          </p>

          <p className="text-[13px] text-gray-500">
            1 connection played
          </p>
        </div>

       <i class="fa-solid fa-chevron-right text-[15px]"></i>

      </div>


      {/* Mini Sudoku */}
      <div className="flex items-center py-2">

        <div className="text-xl w-8">
          <i class="fa-solid fa-square text-green-400"></i>
        </div>

        <div className="flex-1">
          <p className="text-[15px] font-semibold">
            Mini Sudoku #411
          </p>

          <p className="text-[13px] text-gray-500">
            1 connection played
          </p>
        </div>

        <i class="fa-solid fa-chevron-right text-[15px]"></i>

      </div>


      {/* Show More */}
      <button className="text-xs font-medium mt-2">
        Show more
      </button>

    </div>
  );
};

export default Puzzles;