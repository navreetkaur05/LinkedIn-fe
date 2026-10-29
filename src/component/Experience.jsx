import React, { useState } from "react";
import ExperienceForm from "./ExperienceForm";

const Experience = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [experiences, setExperiences] = useState([]);

  return (
    <>
      <div className="bg-white border rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Experience</h2>

          <button onClick={() => setShowExperience(true)} className="text-2xl">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>

        {experiences.map((experience, index) => (
          <div key={index} className="border rounded-lg p-4 mt-4">
            <h3 className="font-semibold">{exp.title}</h3>

            <p className="text-sm">{exp.organization}</p>

            <p className="text-sm text-gray-500 mt-1">
              {exp.startMonth} {exp.startYear} –{" "}
              {exp.currentlyWorking
                ? "Present"
                : `${exp.endMonth} ${exp.endYear}`}
            </p>

            <p className="text-sm mt-3 whitespace-pre-line">{exp.highlights}</p>

            {experience.skills.length > 0 && (
              <p className="text-sm mt-3">Skills: {exp.skills.join(", ")}</p>
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
    </>
  );
};
export default Experience;
