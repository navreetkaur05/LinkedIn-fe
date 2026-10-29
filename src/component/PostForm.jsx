import React, { useState } from "react";
import axios from "axios";

const CreatePostForm = ({ onClose }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handlePost = async () => {
    const formData = new FormData();

    formData.append("userId", "6ad07d623cde94c345bf936b");
    formData.append("text", text);

    if (image) {
      formData.append("image", image);
    }

    const response = await axios.post(
      "http://localhost:5000/api/posts",
      formData,
    );

    alert(response.data.message);

    setText("");
    setImage(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      {/* Main Modal */}
      <div className="bg-white w-full max-w-[600px] h-[380px] rounded-lg shadow-xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between p-4 ">
          <div className="flex items-center gap-3">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
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
          </div>

          <button
            onClick={onClose}
            className="text-2xl text-gray-600 hover:bg-gray-100 rounded-full w-8 h-8"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Text Area */}
        <div className="px-5 flex-1 min-h-0 overflow-y-auto">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share your thoughts ..."
            className="w-full h-full text-base resize-none outline-none"
          />

          {/* Image Preview */}
          {image && (
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600 truncate">{image.name}</p>

              <button
                onClick={() => setImage(null)}
                className="text-red-600 text-sm ml-3"
              >
                Remove image
              </button>
            </div>
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
              onChange={(e) => setImage(e.target.files[0] || null)}
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
  );
};

export default CreatePostForm;
