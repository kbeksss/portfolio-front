import React from "react";
import { ProjectCards } from "../../widgets";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className={"page pt-20 sm:pt-20 sm:mt-10"}
      key={"projects"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <div className="overflow-x-auto">
        <div className="px-8">
          <ProjectCards />
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
