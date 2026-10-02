import React from "react";

const CreatePost = () => {
  return (<>
      <div className="bg-white border border-gray-300 rounded-lg p-3 h-[100px] w-[500px] mt-6 ">

      <div className="flex items-center">

        <div className="w-9 h-9 rounded-full bg-gray-400 flex items-center justify-center text-white">
          <img
                src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
        </div>

        <button className="ml-3 border border-gray-400 rounded-full h-10 flex-1 text-left px-4 text-gray-600 text-sm">
          Start a post
        </button>

      </div>


      <div className="flex justify-around mt-3">

        <button className="flex items-center gap-2 text-[15px] font-medium">
          <i class="fa-brands fa-youtube text-[16px] text-green-500"></i>
          Video
        </button>

        <button className="flex items-center gap-2 text-[15px] font-medium">
          <i class="fa-regular fa-image text-[16px] text-blue-700"></i>
          Photo
        </button>

        <button className="flex items-center gap-2 text-[15px] font-medium">
          <i class="fa-solid fa-newspaper text-[16px] text-red-700"></i>
          Write article
        </button>

      </div>

    </div>
  </>)
}

export default CreatePost;