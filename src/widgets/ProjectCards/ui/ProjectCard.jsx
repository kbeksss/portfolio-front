import React from "react";
import "./styles.css";
import dayjs from "dayjs";

const ProjectCard = ({
  name,
  start,
  end,
  type,
  thumbImg,
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
        style={{ backgroundImage: `url(${thumbImg})` }}
      ></div>
      <h4 className={"py-2 font-bold"}>{name}</h4>
      <ul className={"project-card__list"}>
        <li>{type}</li>
        <li>
          {start && dayjs(start).format("MM/YYYY")} -{" "}
          {end && dayjs(end).format("MM/YYYY")}
        </li>
      </ul>
    </div>
  );
};

export default ProjectCard;
