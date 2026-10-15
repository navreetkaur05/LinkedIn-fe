import react from "react"

const ProfileButton = () => {
    return(<>
    <div class="flex flex-wrap gap-2 mt-4">
            <button class="bg-blue-700 text-white px-4 py-2 rounded-full">Open to</button>
            <button class="border border-blue-700 text-blue-700 px-4 py-2 rounded-full">Add section</button>
            <button class="border border-blue-700 text-blue-700 px-4 py-2 rounded-full">Enhance profile</button>
          </div>
    </>)
}

export default ProfileButton;