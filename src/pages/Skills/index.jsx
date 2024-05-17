import React, { useMemo } from "react";
import ParallaxText from "../../shared/parallax-text/index.jsx";
import { motion } from "framer-motion";

const getSliced = (array, slicedTo = 7) => {
  let outerArr = [];
  for (let i = 0; i < array.length; i += slicedTo) {
    outerArr.push(array.slice(i, i + slicedTo));
  }
  return outerArr;
};

const Skills = () => {
  const slicedSkills = useMemo(() => getSliced(skills, 5), []);
  console.log(slicedSkills);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <section key={"skills"}>
        {slicedSkills.map((skillSet, index) => (
          <ParallaxText key={index} baseVelocity={index % 2 ? -2 : 2}>
            {skillSet.join(" ")}
          </ParallaxText>
        ))}
      </section>
    </motion.div>
  );
};

let skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "HTML",
  "CSS",
  "SCSS",
  "MUI",
  "React Native",
  "FSD",
  "Redux",
  "Reatom",
  "Recoil",
  "RTK",
  "React Query",
  "styled-components",
  "Bootstrap",
  "Reactstrap",
  "Axios",
  "Websocket",
  "Formik",
  "React hook form",
  "Mongo DB",
  "MYSQL",
  "Jest",
  "Prettier",
  "Husky",
  "ESLint",
  "GIT",
  "GITHUB",
  "gitlab",
  "Storybook",
  "Notion",
  "Jira",
  "Confluence",
  "Trello",
  "Shopify",
  "hubspot",
  "Strapi",
  "Liquid",
  "hubl",
  "hubdb",
];

export default Skills;
