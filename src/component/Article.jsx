import react from "react"

const Article = () => {
    return(<>
        <section
                className="flex gap-3
                 pb-7
                 mb-6
                 border-b border-gray-200"
              >
                <div
                  className="w-[171px] h-[96px]
                   rounded-md
                   overflow-hidden
                   shrink-0
                   course-image
                   bg-gradient-to-br from-orange-500 via-red-400 to-purple-700"
                >
                </div>

                <div className="pt-0">
                  <div className="text-[9px] text-gray-500 uppercase mb-1">
                    Video
                  </div>

                  <h2 className="text-[13px] leading-5 font-medium">
                    Welcome From: Choosing the Right Partner: Smarter Vendor
                    Selection with AHP (PT TMI Case Study) by Council of Supply
                    Chain Management Professionals (CSCMP)
                  </h2>
                </div>
              </section>
    </>)
}
export default Article;
