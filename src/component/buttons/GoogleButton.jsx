import react from "react";

const GoogleButton = () => {
  return (
    <>
      <button
        className="w-full h-[40px] rounded-full border-2 border-gray-600
                     flex items-center justify-center gap-2
                     text-[14px] text-gray-800 mb-3
                     hover:bg-gray-50">
        <img
          src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/250px-Google_%22G%22_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
          alt="Google"
          className="w-[25px] h-[25px] rounded-full bg-white border-[2px]"
        />
        <span>Continue with Google</span>
      </button>
    </>
  );
};

export default GoogleButton;
