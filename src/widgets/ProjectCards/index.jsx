import React from "react";
import ProjectCard from "./ui/ProjectCard.jsx";
import { useGetProjectsQuery } from "shared/api/services/projectApi.js";

const ProjectCards = () => {
  const { data } = useGetProjectsQuery();
  return (
    <div className={"flex gap-5"}>
      {data?.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  );
};

export default ProjectCards;
