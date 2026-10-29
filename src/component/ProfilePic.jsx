import React from "react";
import { BACKEND_URL } from "../config/constant";

const ProfilePic = () => {
  return (
    <>
      <img
        src={`${BACKEND_URL}/uploads/1792237737363-MERN Developer Portfolio Banner.png`}
        alt=""
        className="w-24 h-24 -mt-16 mb-3 rounded-full border-4 border-white flex items-center justify-center text-3xl"
      />
    </>
  );
};

export default ProfilePic;
