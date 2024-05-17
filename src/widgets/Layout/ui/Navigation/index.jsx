import React from "react";
import { NavLink } from "react-router-dom";

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
            <NavLink
              to={link.url}
              className={({ isActive }) =>
                isActive ? "underline font-bold" : "font-bold"
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
