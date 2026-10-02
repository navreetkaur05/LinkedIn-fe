import react, {useState} from "react";
import axios from "axios";

import GoogleButton from "../component/buttons/GoogleButton";
import MicrosoftButton from "../component/buttons/MicrosoftButton";
import AppleButton from "../component/buttons/AppleButton";

const JoinNow = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  const registerUser = async () => {

    const response = await axios.post("http://localhost:8000/api/auth/register", 
      {
      email: email,
      password: password
    });

    setMessage(response.data.message);
  };
  
  return (<>
  <section className="min-h-screen w-full bg-[#f3f2ef] py-20">

    <div className="flex flex-col items-center">

    <h1 className="text-[33px]">Join LinkedIn now - it's free!</h1>

    <span className="text-[15px] mb-[20px] text-gray-500">25+ people you may know are here</span>

      <div className="bg-white border border-gray-200 rounded-lg flex justify-center">
        <div className="w-[420px] px-7 pt-7">
          <label className="text-[15px] text-gray-800">Email or phone</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[42px] border-2 border-gray-600 rounded-[3px]
                     mt-1 mb-3 px-2 outline-none
                     focus:border-blue-600"
          />

          <label className="text-[15px] text-gray-800">Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[42px] border-2 border-gray-600 rounded-[3px]
                     mt-1 mb-3 px-2 outline-none
                     focus:border-blue-600"
          />

          <div className="flex items-center gap-2 mt-5">
            <input type="checkbox" className="w-[22px] h-[22px]" />

            <span className="text-[15px] text-gray-800">Remember me</span>
          </div>

          <p className="text-[13px] leading-[14px] text-gray-600 mt-5">
            By continuing you agree to LinkedIn's{" "}
            <a href="" className="text-blue-600">
              User Agreement, Privacy Policy
            </a>{" "}
            and{" "}
            <a href="" className="text-blue-600">
              Cookie Policy
            </a>
          </p>

          <button
          onClick={registerUser}
            className="w-full h-[43px] bg-blue-600 hover:bg-blue-700
                     text-white rounded-full font-semibold text-[14px]
                     mt-4"
          >
            Agree & Join
          </button>

           {message && (
              <p className="text-center text-blue-600 mt-3">
                {message}
              </p>
            )}

          <div className="flex items-center gap-2 my-4">
            <div className="h-[1px] bg-gray-300 flex-1"></div>
            <span className="text-[15px] text-gray-500">or</span>
            <div className="h-[1px] bg-gray-300 flex-1"></div>
          </div>

          <GoogleButton />
          <MicrosoftButton />
            
          <p className="text-[15px] text-gray-700 mb-5 ml-[90px] mt-[40px]">
            Already on LinkedIn?{" "}
            <a href="" className="text-blue-600 font-medium hover:underline">
              Sign in
            </a>
          </p>
          </div>
      </div>
      <span className="mt-5">Looking to create a page for a business? <a href="" className="text-blue-600">Get help</a></span>
    </div>
    </section>
    </>
  );
};

export default JoinNow;
