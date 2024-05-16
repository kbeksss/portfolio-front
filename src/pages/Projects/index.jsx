import React from "react";
import { ProjectCards } from "../../widgets";

const Projects = () => {
  return (
    <div className={'pt-10 sm:pt-20'}>
      <div className="overflow-x-auto">
          <div className='px-8'>
              <ProjectCards />
          </div>
      </div>
    </div>
  );
};

export default Projects;
