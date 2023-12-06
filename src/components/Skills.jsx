import React from "react";
import { skillTags } from "../constants/projectDetails.js";
import SkillField from "./SkillField.jsx";

const Skills = () => {
  return (
    <div className="bg-[#1C1C27] h-full w-full lg:w-[70%] px-3 py-4 rounded-lg">
        <span className="text-white bg-[#8806CE] p-1 rounded-md">Skills</span>
        <div className="flex justify-evenly flex-wrap mt-2">
            {
                skillTags.map((skill, index) => <SkillField key={index} field={skill.field} technology={skill.technology}/>)
            }
        </div>
        
    </div>
  );
};

export default Skills;
