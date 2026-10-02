import React from "react";

const Post = () => {
  return (<>
    <div className="bg-white border border-gray-300 rounded-lg mt-3">

      <div className="p-3 pt-5">

        <div className="flex">
          <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white">
            <img
                src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
          </div>


          <div className="ml-2 flex-1">

            <div className="flex justify-between">

              <div>

                <p className="font-semibold text-sm">
                  Zokhraf M.
                  <span className="font-normal text-gray-500">
                    {" "}• 3rd+
                  </span>
                </p>

                <p className="text-[10px] text-gray-600">
                  Python | FULL STACK DEVELOPER | AI ENGINEER | AI ...
                </p>

                <p className="text-[9px] text-gray-500">
                  1d • Edited
                </p>

              </div>


              <div className="flex gap-2">

                <button className="text-blue-600 text-xs font-semibold">
                  + Follow
                </button>

                

              </div>

            </div>

          </div>

        </div>

        <div className="mt-2 text-[12px] leading-[18px]">

          <p>
            Ready to build real-world AI applications?
          </p>

          <p>
            Join our Free 3-Month AI Internship Program at NCAI, UET Lahore!
          </p>

          <p>
            Gain hands-on experience in core domains:
          </p>

          <p><i class="fa-solid fa-square-check text-green-500 text-[13px]"></i> Machine Learning & Deep Learning</p>

          <p><i class="fa-solid fa-square-check text-green-500 text-[13px]"></i> Computer Vision</p>

          <p><i class="fa-solid fa-square-check text-green-500 text-[13px]"></i> Generative AI & Agentic AI</p>

          <p className="mt-1">
            <i class="fa-solid fa-key text-yellow-600"></i> Key Dates:
          </p>

          <p>
            Apply By: 27 September
          </p>

          <p>
            Starts On: 05 October
          </p>

          <p>
            Scan the QR code on the flyer to apply now
          </p>

           <p className="text-blue-600">
             Form link to apply: https://lnkd.in/dg67t5HP
         </p>

        </div>

      </div>


      {/* Static Post Image */}
      <div className="w-full h-[750px] bg-gray-100 flex items-center justify-center">

        <div className="w-[90%] h-[90%] bg-white flex items-center justify-center border-8 border-white shadow">
            <img src="https://media.licdn.com/dms/image/v2/D4D22AQGmhmH8F1kzVw/feedshare-shrink_480/B4DaBWZZK0JgAk-/0/1788155892897?e=1792022400&v=beta&t=nhBxn-GHBW3WMJ6i-tDQmxEGMbyS82Hh-SMjnePjggk" alt="" />

        </div>

      </div>


      {/* Reactions */}
      <div className="px-4 py-2 flex justify-between text-xs text-gray-500 border-b">

        <span className="flex gap-2 ">
          <i class="fa-solid fa-thumbs-up mt-1"></i> <i class="fa-solid fa-heart mt-1"></i><i class="fa-solid fa-lightbulb mt-1"></i> 123
        </span>

        <span>
          18 comments • 7 reposts
        </span>

      </div>

    </div>
  
  </>);
}

export default Post;