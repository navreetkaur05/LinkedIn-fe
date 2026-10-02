import react, {useState} from "react";
import axios from "axios";
import GoogleButton from "../component/buttons/GoogleButton";
import MicrosoftButton from "../component/buttons/MicrosoftButton";
import AppleButton from "../component/buttons/AppleButton";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const loginUser = async () => {
    const response = await axios.post("http://localhost:8000/api/auth/login", {
      email: email,
      password: password,
    });

    setMessage(response.data.message);
  };

  return (
    <>
      <section className="bg-white flex justify-center pt-20">
        <div className="w-[420px] border border-gray-200 rounded-lg px-7 py-7">
          <h1 className="text-[28px] font-semibold text-gray-900 mb-3">
            Sign in
          </h1>
          <p className="text-[12px] text-gray-700 mb-5">
            New to LinkedIn?
            <a
              href="/signup"
              className="text-blue-600 font-medium hover:underline"
            >
              Join Now
            </a>
          </p>
          <GoogleButton />
          <MicrosoftButton />
          <AppleButton />
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

          <div className="flex items-center gap-2 my-4">
            <div className="h-[1px] bg-gray-300 flex-1"></div>
            <span className="text-[15px] text-gray-500">or</span>
            <div className="h-[1px] bg-gray-300 flex-1"></div>
          </div>

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

          <a
            href=""
            className="inline-block text-[14px] text-blue-700
          font-medium mt-1 hover:underline"
          >
            Forgot password?
          </a>

          <div className="flex items-center gap-2 mt-5">
            <input type="checkbox" className="w-[22px] h-[22px]" />

            <span className="text-[15px] text-gray-800">Keep me signed in</span>
          </div>

          <button
            onClick={loginUser}
            className="w-full h-[43px] bg-blue-600 hover:bg-blue-700
          text-white rounded-full font-semibold text-[14px]
           mt-4"
          >
            Sign in
          </button>

          {message && (
            <p className="text-center text-blue-600 mt-3">{message}</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Signin;
