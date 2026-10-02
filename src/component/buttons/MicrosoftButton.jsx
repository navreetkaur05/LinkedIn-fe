import react from "react"

const MicrosoftButton = () => {
    return(<>
    <button
            className="w-full h-[40px] rounded-full border border-gray-500
                     flex items-center justify-center gap-2
                     text-[14px] text-gray-800 mb-3
                     hover:bg-gray-50"
          >
            <img
              src="https://icones.pro/wp-content/uploads/2021/06/icone-windows-gris.png"
              alt="Google"
              className="w-[25px] h-[25px] rounded-full"
            />

            <span>Sign in with Microsoft</span>
          </button>
    </>)
}

export default MicrosoftButton;