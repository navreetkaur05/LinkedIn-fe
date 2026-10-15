import React, { useState } from "react";
import NavbarFeed from "../component/NavbarFeed";
import ProfileButton from "../component/buttons/ProfileButtons";
import Skills from "../component/Skills";
import ExperienceForm from "../component/ExperienceForm";

const Profile = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
const [experiences, setExperiences] = useState([]);

  return (
    <>
      <NavbarFeed />
      <main className="max-w-6xl mx-auto p-5 flex flex-col lg:flex-row gap-5">
        <section className="w-full flex flex-col gap-4">
          <div className="bg-white border rounded-xl overflow-hidden">
            <img
              src="https://template.canva.com/EAGfgy8MXcw/1/0/1600w-Ul0VxRcgKbw.jpg"
              alt=""
              className="h-36 w-full"
            />

            <div className="p-5">
              <img
                src="https://i.pinimg.com/236x/70/78/88/707888a23862a1e94597c925342cf817.jpg?nii=t"
                alt=""
                className="w-24 h-24 -mt-16 mb-3 rounded-full border-4 border-white flex items-center justify-center text-3xl"
              />

              <h2 className="text-2xl font-semibold">Navreet Kaur</h2>

              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                blanditiis at id possimus aliquid aliquam voluptatum excepturi
                laboriosam suscipit nobis?
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, minima.
              </p>

              <a className="text-sm text-blue-700 mt-2">10 connections</a>

              <ProfileButton />
            </div>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <h2 className="text-lg font-semibold">Analytics</h2>
            <p className="text-sm text-gray-500 mb-4">Private to you</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="border rounded-lg p-4 flex-1">
                <h3 className="font-semibold">profile views</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Discover who's viewed your profile.
                </p>
              </div>

              <div className="border rounded-lg p-4 flex-1">
                <h3 className="font-semibold">post impressions</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Start a post to increase engagement.
                </p>
              </div>

              <div className="border rounded-lg p-4 flex-1">
                <h3 className="font-semibold">search appearance</h3>
                <p className="text-sm text-gray-500 mt-2">
                  See how often you appear in search.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <h2 className="text-lg font-semibold">About</h2>
            <p className="text-sm leading-6 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nemo
              magni voluptates cum inventore. Dicta odit voluptate omnis
              temporibus nulla, similique, sunt ratione quia quam, ipsum dolore
              numquam perferendis cumque!
            </p>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Activity</h2>
              <div className="flex items-center gap-6">
                <i className="fa-solid fa-plus cursor-pointer text-2xl"></i>
                <i className="fa-solid fa-pencil cursor-pointer text-xl"></i>
              </div>
            </div>
            <p className="text-sm text-gray-500">164 followers</p>

            <div className="flex flex-col gap-3 mt-4"></div>
          </div>

          
<div className="bg-white border rounded-xl p-5">
  <div className="flex justify-between items-center">
    <h2 className="text-lg font-semibold">Experience</h2>

    <button
      onClick={() => setShowExperience(true)}
      className="text-2xl"
    >
      <i className="fa-solid fa-plus"></i>
    </button>
  </div>

  {experiences.map((experience, index) => (
    <div
      key={index}
      className="border rounded-lg p-4 mt-4"
    >
      <h3 className="font-semibold">{exp.title}</h3>

      <p className="text-sm">{exp.organization}</p>

      <p className="text-sm text-gray-500 mt-1">
        {exp.startMonth} {exp.startYear} –{" "}
        {exp.currentlyWorking
          ? "Present"
          : `${exp.endMonth} ${exp.endYear}`}
      </p>

      

      <p className="text-sm mt-3 whitespace-pre-line">
        {exp.highlights}
      </p>

      {experience.skills.length > 0 && (
        <p className="text-sm mt-3">
          Skills: {exp.skills.join(", ")}
        </p>
      )}
    </div>
  ))}

  {showExperience && (
    <ExperienceForm
      onClose={() => setShowExperience(false)}
      onSave={(newExperience) =>
        setExperiences((previous) => [...experiences, newExperience])
      }
    />
  )}
</div>


          <div className="bg-white border rounded-xl p-5">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Education</h2>
              <div className="flex items-center gap-6">
                <i className="fa-solid fa-plus cursor-pointer text-2xl"></i>
                <i className="fa-solid fa-pencil cursor-pointer text-xl"></i>
              </div>
            </div>

            <div className="border rounded-lg p-4 mt-4">
              <h3 className="font-semibold">
                Baba Banda Singh Bahadur Engineering College
              </h3>
              <p className="text-sm mt-2">
                B.Tech - Computer Science and Engineering
              </p>
              <p className="text-sm text-gray-500 mt-1">2023 – 2027</p>
              <p className="text-sm mt-2">CGPA: 8.3/10</p>
            </div>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Skills</h2>
              <div className="flex items-center gap-6">
                <button
                  type="button"
                  onClick={() => setShowSkills(true)}
                  aria-label="Add skills"
                  className="text-2xl"
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
                {/* <i className="fa-solid fa-pencil cursor-pointer text-xl"></i> */}
              </div>
            </div>
            {showSkills && (
              <Skills onClose={() => setShowSkills(false)} />
              )}

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="border rounded-full px-3 py-2">React.js</span>
              <span className="border rounded-full px-3 py-2">Node.js</span>
              <span className="border rounded-full px-3 py-2">JavaScript</span>
              <span className="border rounded-full px-3 py-2">Express.js</span>
              <span className="border rounded-full px-3 py-2">MongoDB</span>
              <span className="border rounded-full px-3 py-2">HTML</span>
              <span className="border rounded-full px-3 py-2">CSS</span>
              <span className="border rounded-full px-3 py-2">REST APIs</span>
              <span className="border rounded-full px-3 py-2">
                Cybersecurity
              </span>
            </div>
          </div>
        </section>

        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <div className="bg-white border rounded-xl p-5">
            <h2 className="font-semibold">Profile language</h2>
            <p className="text-sm text-gray-500 mt-3">English</p>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <h2 className="font-semibold">Public profile &amp; URL</h2>
            <p className="text-sm text-gray-500 mt-3 break-words">
              www.linkedin.com/in/navreet-kaur-3625b0280
            </p>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <h2 className="font-semibold">Who your viewers also viewed</h2>
            <p className="text-xs text-gray-500 mt-1">Private to you</p>

            <div className="border rounded-lg p-3 mt-3">
              <h3 className="text-sm font-semibold">
                Someone at Baba Banda Singh Bahadur Engineering College
              </h3>
              <button className="border rounded-full px-4 py-1 mt-3 text-sm">
                View
              </button>
            </div>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <h2 className="font-semibold">People you may know</h2>

            <div className="border rounded-lg p-3 mt-4">
              <h3 className="font-semibold text-sm">Name</h3>
              <p className="text-xs text-gray-500 mt-1">Role</p>
              <button className="border rounded-full px-4 py-1 mt-3 text-sm">
                Connect
              </button>
            </div>

            <div className="border rounded-lg p-3 mt-4">
              <h3 className="font-semibold text-sm">Name</h3>
              <p className="text-xs text-gray-500 mt-1">Role</p>
              <button className="border rounded-full px-4 py-1 mt-3 text-sm">
                Connect
              </button>
            </div>

            <div className="border rounded-lg p-3 mt-4">
              <h3 className="font-semibold text-sm">Name</h3>
              <p className="text-xs text-gray-500 mt-1">Role</p>
              <button className="border rounded-full px-4 py-1 mt-3 text-sm">
                Connect
              </button>
            </div>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <h2 className="font-semibold">You might like</h2>
            <p className="text-xs text-gray-500 mt-1">Pages for you</p>

            <div className="border rounded-lg p-3 mt-3">
              <h3 className="font-semibold">Company</h3>
              <p className="text-xs text-gray-500 mt-1">Services</p>
              <button className="border rounded-full px-4 py-1 mt-3 text-sm">
                Follow
              </button>
            </div>

            <div className="border rounded-lg p-3 mt-3">
              <h3 className="font-semibold">Company</h3>
              <p className="text-xs text-gray-500 mt-1">Services</p>
              <button className="border rounded-full px-4 py-1 mt-3 text-sm">
                Follow
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
