import React from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";

const Middle = () => {
  return (
    <>
      <div className="flex flex-col">
        <CreatePost />

        <div className="flex-1 items-center justify-end text-[10px] text-gray-700">
          <div className="flex items-center gap-2 mt-2">
            <div className="h-[1px] bg-gray-300 flex-1"></div>
            <span>Sort by:</span><span className="font-semibold">Top</span>
          <i class="fa-solid fa-caret-down"></i>
          </div>
        </div>

        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
};

export default Middle;
