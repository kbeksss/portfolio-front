import React from "react";
import ProjectCard from "./ui/ProjectCard.jsx";
import { useGetProjectsQuery } from "shared/api/services/projectApi.js";

const ProjectCards = () => {
  const res = useGetProjectsQuery();
  console.log("res", res);
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
    bgColor: "#145C9E",
    textColor: "#fff",
  },
  {
    name: "Another project name",
    type: "Full-time",
    start: "Dec 2018",
    end: "Feb 2019",
    img: "/projects/novum.jpg",
    bgColor: "#D6E5E3",
    textColor: "#000",
  },
  {
    name: "One more project name",
    type: "Full-time",
    start: "Dec 2018",
    end: "Feb 2019",
    img: "/projects/richmate.jpg",
    bgColor: "#56203D",
    textColor: "#fff",
  },
  {
    name: "Classlytics",
    type: "Full-time",
    start: "Dec 2018",
    end: "Feb 2019",
    img: "/projects/classlytics.jpg",
    bgColor: "#AA6DA3",
    textColor: "#fff",
  },
  {
    name: "Another project name",
    type: "Full-time",
    start: "Dec 2018",
    end: "Feb 2019",
    img: "/projects/novum.jpg",
    bgColor: "#E0FF4F",
    textColor: "#000",
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
