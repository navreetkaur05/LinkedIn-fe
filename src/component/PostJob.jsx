import React from "react"

const PostJob = () => {

    return(<>
    <section className="w-full h-[200px] bg-[oklch(88%_0.011_106.6)] flex flex-col items-center gap-10 p-8">
        <h1 className="text-red-700 text-[30px]">Post your job for millions of people to see</h1>
        <button className="h-[45px] px-5 rounded-full border border-blue-500 text-blue-600 text-[20px] hover:bg-blue-50">
            Post a job
          </button>
    </section>
    </>)

}
export default PostJob;