import react from "react"

const AppleButton = () => {
    return(<>
    <button
            className="w-full h-[40px] rounded-full border border-gray-500
                     flex items-center justify-center gap-2
                     text-[14px] text-gray-800
                     hover:bg-gray-50"
          >
            <img
              src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/250px-Apple_logo_grey.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
              alt="Apple"
              className="w-[20px] h-[25px] rounded-full "
            />

            <span>Sign in with Apple</span>
          </button>
    </>)
}

export default AppleButton;