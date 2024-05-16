import React from "react";
import { Link } from "react-router-dom";

const links = [
  { url: "/projects", name: "Projects" },
  { url: "/skills", name: "Skills" },
];

const Navigation = () => {
  return (
    <nav>
      <ul>
        {links.map((link, idx) => (
          <li key={idx} className={"inline-block pr-7"}>
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
