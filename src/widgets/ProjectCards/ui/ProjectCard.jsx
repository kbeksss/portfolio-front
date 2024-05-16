import React from "react";
import "./styles.css";

const ProjectCard = ({ name, start, end, type, img }) => {
  return (
    <div className={"project-card"}>
      <div
        className={"project-card__image"}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <h4 className={"py-2"}>{name}</h4>
      <ul className={"project-card__list"}>
        <li>{type}</li>
        <li>
          {start} - {end}
        </li>
      </ul>
    </div>
  );
};

export default ProjectCard;
