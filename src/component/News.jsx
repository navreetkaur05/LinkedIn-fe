import react from "react"
import NewsItems from "./NewsItems";
import Puzzles from "./Puzzle";

const News = () =>  {
  return (<>
  <section className="bg-white border border-gray-300 rounded-lg mt-3 p-3">
    <div>

      <h2 className="font-semibold text-[16px]">
        LinkedIn News
      </h2>

      <p className="text-[15px] text-gray-500 mt-2">
        Top stories
      </p>

        <NewsItems />
        <NewsItems />
        <NewsItems />
        <a  href=" " className="text-xs font-medium mt-2">
        Show more news 
      </a>
        <Puzzles />

    </div>
    </section>
    </>)
}


export default News;