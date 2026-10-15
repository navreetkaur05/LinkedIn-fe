import react from "react"

const SaveButton = ({ onClose }) => {
    return(<>
        <div className="flex justify-end border-t p-6">
            <button 
            onClick={onClose}
            className="bg-blue-700 text-white rounded-full px-6 py-3 font-semibold hover:bg-blue-800">
              Save
            </button>
          </div>
        </>)
}

export default SaveButton