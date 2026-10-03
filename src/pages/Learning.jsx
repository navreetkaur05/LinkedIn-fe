import react from "react";
import Article from "../component/Article";
import { Link } from "react-router-dom";

const Learning = () => {
  return (
    <>
      <section className="bg-white text-[#111827]">
        <header className="border-b border-gray-200">
          <div className="max-w-[900px] mx-auto h-[54px] flex items-center">
            <div className="flex items-center gap-2 mr-7">
              <img
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/960px-LinkedIn_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
                className="h-[30px] w-[30px]"
                alt=""
              />

              <span className="text-[12px] tracking-[3px] font-medium">
                LEARNING
              </span>
            </div>

            <button
              className="h-[32px] px-4 bg-[#eef3f8]
               border-r border-gray-300
               text-[12px]
               flex items-center gap-2"
            >
              Learning
              <i className="fa-solid fa-caret-down text-[12px]"></i>
            </button>

            <div className="flex h-[32px] w-[435px]">
              <input
                type="text"
                placeholder="Search skills, subjects, or software"
                className="flex-1 bg-[#eef3f8]
                 px-3
                 text-[12px]
                 outline-none
                 border-l border-gray-200"
              />

              <button
                className="w-[32px] bg-[#eef3f8]
                 border-l border-gray-300
                 flex items-center justify-center"
              >
                <i class="fa-solid fa-magnifying-glass text-[13px]"></i>
              </button>
            </div>

            <div className="ml-[15px] flex items-center gap-4">
              <Link
                to="/signin"
                className="h-[38px] px-5 rounded-full border border-blue-600
             text-blue-600 text-sm font-medium
             flex items-center hover:bg-blue-50"
              >
                Sign in
              </Link>

              <Link
                to="/signup"
                className="h-[38px] px-5 rounded-full bg-blue-600 text-white
             text-white-600 text-sm font-medium
             flex items-center hover:bg-blue-500"
              >
                Join now
              </Link>
            </div>
          </div>

          <div className="max-w-[900px] mx-auto h-[42px] flex items-center gap-1.5">
            <button
              className="h-[27px]
               px-3
               rounded-full
               bg-[#057642]
               text-white
               text-[11px]
               font-medium
               flex items-center gap-2"
            >
              Best Match
              <i className="fa-solid fa-caret-down text-[12px]"></i>
            </button>

            <button
              className="h-[27px]
               px-3
               rounded-full
               border border-gray-400
               text-[11px]
               flex items-center gap-2"
            >
              Level
              <i className="fa-solid fa-caret-down text-[12px]"></i>
            </button>

            <button
              className="h-[27px]
               px-3
               rounded-full
               border border-gray-400
               text-[11px]
               flex items-center gap-2"
            >
              Type
              <i className="fa-solid fa-caret-down text-[12px]"></i>
            </button>

            <button
              className="h-[27px]
               px-3
               rounded-full
               border border-gray-400
               text-[11px]
               flex items-center gap-2"
            >
              Time to complete
              <i className="fa-solid fa-caret-down text-[12px]"></i>
            </button>

            <button
              className="h-[27px]
               px-3
               rounded-full
               border border-gray-400
               text-[11px]
               flex items-center gap-2"
            >
              Software
              <i className="fa-solid fa-caret-down text-[12px]"></i>
            </button>
          </div>
        </header>

        <div className="bg-[#f3f6f8] h-[28px]">
          <div
            className="max-w-[900px] mx-auto
             h-full
             flex items-center justify-end
             gap-4
             text-[10px]
             text-gray-600"
          >
            <span>Solutions for:</span>

            <a href="#">Business</a>
            <a href="#">Higher Education</a>
            <a href="#">Government</a>
            <a href="#">Buy for my team</a>
          </div>
        </div>

        <main className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-[600px_218px] gap-7 pt-3">
            <div>
              <h1 className="text-[18px] font-normal mb-7">
                Browse most popular courses
              </h1>

              <Article />
              <Article />
              <Article />
              <Article />
              <Article />
              <Article />
            </div>

            <div>
              <h2 className="text-[18px] font-normal mb-3">Explore Topics</h2>

              <div className="flex flex-col items-start gap-2 mb-6">
                <button
                  className="border border-gray-300
                   rounded-full
                   px-3 py-1
                   text-[10px]"
                >
                  Business
                </button>

                <button
                  className="border border-gray-300
                   rounded-full
                   px-3 py-1
                   text-[10px]"
                >
                  Technology
                </button>
              </div>

              <div
                className="border border-gray-200
                 rounded-lg
                 p-3"
              >
                <p className="text-[14px] leading-5 mb-3">
                  Buy LinkedIn Learning for your business, higher education, or
                  government team
                </p>

                <button
                  className="border border-[#0A66C2]
                   text-[#0A66C2]
                   rounded-full
                   px-4 py-2
                   text-[12px]"
                >
                  Buy for my team
                </button>
              </div>
            </div>
          </div>
        </main>

        <div className="max-w-[900px] mx-auto pt-2 pb-14">
          <p className="text-[18px] mb-3">
            Not seeing what you're looking for? Join now to see all 286,673
            results.
          </p>

          <button
            className="bg-blue-700
             text-white
             rounded-full
             px-7 py-2.5
             text-[14px]
             font-semibold"
          >
            Join now
          </button>
        </div>
      </section>
    </>
  );
};

export default Learning;
