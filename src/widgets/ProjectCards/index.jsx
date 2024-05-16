import React from "react";
import ProjectCard from "./ui/ProjectCard.jsx";

const ProjectCards = () => {
  return (
    <div className={"flex gap-5"}>
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  );
};

const projects = [
  {
    name: "Classlytics",
    type: "Full-time",
    start: "Dec 2018",
    end: "Feb 2019",
    img: "/projects/classlytics.jpg",
  },
  {
    name: "Another project name",
    type: "Full-time",
    start: "Dec 2018",
    end: "Feb 2019",
    img: "/projects/novum.jpg",
  },
  {
    name: "One more project name",
    type: "Full-time",
    start: "Dec 2018",
    end: "Feb 2019",
    img: "/projects/richmate.jpg",
  },
  {
    name: "Classlytics",
    type: "Full-time",
    start: "Dec 2018",
    end: "Feb 2019",
    img: "/projects/classlytics.jpg",
  },
  {
    name: "Another project name",
    type: "Full-time",
    start: "Dec 2018",
    end: "Feb 2019",
    img: "/projects/novum.jpg",
  },
  {
    name: "One more project name",
    type: "Full-time",
    start: "Dec 2018",
    end: "Feb 2019",
    img: "/projects/richmate.jpg",
  },
  {
    name: "Classlytics",
    type: "Full-time",
    start: "Dec 2018",
    end: "Feb 2019",
    img: "/projects/classlytics.jpg",
  },
  {
    name: "Another project name",
    type: "Full-time",
    start: "Dec 2018",
    end: "Feb 2019",
    img: "/projects/novum.jpg",
  },
  {
    name: "One more project name",
    type: "Full-time",
    start: "Dec 2018",
    end: "Feb 2019",
    img: "/projects/richmate.jpg",
  },
  {
    name: "Classlytics",
    type: "Full-time",
    start: "Dec 2018",
    end: "Feb 2019",
    img: "/projects/classlytics.jpg",
  },
  {
    name: "Another project name",
    type: "Full-time",
    start: "Dec 2018",
    end: "Feb 2019",
    img: "/projects/novum.jpg",
  },
  {
    name: "One more project name",
    type: "Full-time",
    start: "Dec 2018",
    end: "Feb 2019",
    img: "/projects/richmate.jpg",
  },
];

export default ProjectCards;
