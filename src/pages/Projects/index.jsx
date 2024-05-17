import React from "react";
import { ProjectCards } from "../../widgets";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className={"page pt-10 sm:pt-20"}
      key={"projects"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <motion.div
        className="overflow-x-auto"
      >
        <div className="px-8">
          <ProjectCards />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
