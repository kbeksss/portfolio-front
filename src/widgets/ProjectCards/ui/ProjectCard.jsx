import React from "react";
import "./styles.css";

const ProjectCard = ({
  name,
  start,
  end,
  type,
  img,
  bgColor = "#fff",
  textColor = "#000",
}) => {
  return (
    <div
      className={"project-card"}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
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
