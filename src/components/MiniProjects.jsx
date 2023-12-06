import React from "react";
import { miniProjets } from "../constants/projectDetails";
import MiniApp from "./MiniApp";

const MiniProjects = () => {
  return (
    <div className="w-full lg:w-[29%] h-full bg-[#1C1C27] mt-4 lg:mt-0 lg:ml-4 rounded-lg px-3 py-4">
      <span className="text-[#1C1C27] bg-[#B1B2B3] p-1 rounded-md font-bold">
        More Projects
      </span>

      <div className="flex flex-col mt-3">
        {miniProjets.map((field) => (
          <MiniApp key={field.title} field={field} />
        ))}
      </div>
    </div>
  );
};
//lg w
export default MiniProjects;

//amazon clone css based
//video rental api
//Trip booking application css based
//Student info manager
