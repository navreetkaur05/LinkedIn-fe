import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL, BACKEND_URL } from "../config/constant";

const CreatePost = () => {
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handlePost = async () => {
    const formData = new FormData();

    formData.append("userId", "6ad07d623cde94c345bf936b");
    formData.append("text", text);

    if (image) {
      formData.append("image", image);
    }

    const response = await axios.post(`${API_BASE_URL}/post`, formData);

    alert(response.data.message);

    setText("");
    setImage(null);
    setShowForm(false);
  };

  return (
    <>
      <div className="bg-white border border-gray-300 rounded-lg p-3 h-[100px] w-full ">
        <div className="flex items-center">
          <div className="w-9 h-9 rounded-full bg-gray-400 flex items-center justify-center text-white">
            <img
              src={`${BACKEND_URL}/uploads/1792237737363-MERN Developer Portfolio Banner.png`}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="ml-3 border border-gray-400 rounded-full h-10 flex-1 text-left px-4 text-gray-600 text-sm"
          >
            Start a post
          </button>
        </div>

        <div className="flex justify-around mt-3">
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 text-[15px] font-medium"
          >
            <i class="fa-brands fa-youtube text-[16px] text-green-500"></i>
            Video
          </button>

          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 text-[15px] font-medium"
          >
            <i class="fa-regular fa-image text-[16px] text-blue-700"></i>
            Photo
          </button>

          <button className="flex items-center gap-2 text-[15px] font-medium">
            <i class="fa-solid fa-newspaper text-[16px] text-red-700"></i>
            Write article
          </button>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          {/* Main Modal */}
          <div className="bg-white w-full max-w-[600px] h-[400px] rounded-lg shadow-xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 p-4 shrink-0">
              <img
                src={`${BACKEND_URL}/uploads/1792237737363-MERN Developer Portfolio Banner.png`}
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover"
              />

              <div className="flex-1 min-w-0">
                <h2 className="text-sm font-semibold">
                  Navreet Kaur
                  <i className="fa-solid fa-caret-down ml-2"></i>
                </h2>

                <div className="flex flex-wrap gap-2 mt-2">
                  <button className="bg-gray-200 rounded-full px-3 py-1 text-xs">
                    <i className="fa-solid fa-eye mr-1"></i>
                    Post to Anyone
                    <i className="fa-solid fa-caret-down ml-1"></i>
                  </button>

                  <button className="bg-gray-200 rounded-full px-3 py-1 text-xs">
                    <i className="fa-regular fa-comment mr-1"></i>
                    Comments: Anyone
                    <i className="fa-solid fa-caret-down ml-1"></i>
                  </button>
                </div>
              </div>

              <button
                onClick={() => setShowForm(false)}
                className="self-start text-2xl text-gray-600 hover:bg-gray-100 rounded-full w-8 h-8"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Text Area */}
            <div className="flex-1 min-h-0 px-5 pt-2 overflow-y-auto">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Share your thoughts ..."
                className="w-full h-full text-base outline-none resize-none"
              />

              {image && (
                <p className="text-gray-600 text-sm mb-2">
                  Selected image: {image.name}
                </p>
              )}
            </div>

            {/* Bottom Toolbar */}
            <div className="flex items-center gap-5 px-5 py-3 shrink-0">
              <button className="border border-gray-400 rounded-full px-3 py-1 text-xs">
                Proofread
              </button>

              <button className="text-lg text-gray-700">
                <i className="fa-regular fa-face-smile"></i>
              </button>

              <label className="text-lg text-gray-700 cursor-pointer">
                <i className="fa-regular fa-image"></i>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="hidden"
                />
              </label>

              <button className="text-lg text-gray-700">
                <i className="fa-solid fa-certificate"></i>
              </button>

              <button className="text-2xl text-gray-700">+</button>
            </div>

            {/* Footer */}
            <div className="flex justify-end items-center gap-3 border-t px-5 py-3 shrink-0">
              <button className="bg-gray-100 rounded-full w-10 h-10 text-lg">
                <i className="fa-regular fa-clock"></i>
              </button>

              <button
                onClick={handlePost}
                disabled={!text.trim() && !image}
                className="bg-blue-700 text-white rounded-full px-6 py-2 text-sm font-semibold disabled:bg-gray-200 disabled:text-gray-500"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePost;
