import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-[500px] bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-row items-center justify-between px-8 pt-10">

        <div className="w-[550px] flex flex-col items-start">

          <h1 className="text-[35px] leading-[1.1] font-normal text-black mb-5">
            Build your professional brand & network to get ahead in your career
          </h1>

          <button
            className="w-[268px] h-[40px] bg-blue-600 hover:bg-blue-700 
                       rounded-full text-white flex items-center justify-center 
                       gap-2 text-[12px] font-medium mb-3"
          >
            <img
              src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/250px-Google_%22G%22_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
              alt="Google"
              className="w-[20px] h-[20px] rounded-full bg-white border-[2px]"
            />

            <span>Continue with Google</span>
          </button>

          <button
            className="w-[268px] h-[40px] bg-white border border-gray-500 
                       rounded-full text-gray-700 text-[12px] 
                       hover:bg-gray-100 mb-4"> Sign in with email
          </button>

          
          <p className="w-[300px] text-center text-[9px] leading-4 text-gray-500 mb-5">
            By clicking Continue to join or sign in, you agree to LinkedIn's{" "}
            <a href="" className="text-blue-700 hover:underline">
              User Agreement
            </a>
            ,{" "}
            <a href="" className="text-blue-700 hover:underline">
              Privacy Policy
            </a>
            , and{" "}
            <a href="" className="text-blue-700 hover:underline">
              Cookie Policy
            </a>
            .
          </p>

          <p className="text-[12px] text-gray-700 ml-[78px]">
            New to LinkedIn?{" "}
            <a
              href=""
              className="text-blue-600 font-medium hover:underline"
            >
              Join now
            </a>
          </p>

        </div>

        <div className="w-[600px] flex justify-center items-center">
          <img
            src="Hero.png"
            alt="Hero right img"
            className="w-[520px] h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;