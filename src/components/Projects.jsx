import React from "react";
import { projects } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";

const Project = (props) => {
  return (
    <motion.div
      className="min-w-0 flex flex-col px-6 sm:px-8 py-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card"
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.75, delay: 0.1 }}
    >
      <div className="flex flex-col sm:-mx-4 sm:flex-row">
        {props.image ? <img
          className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
          src={props.image}
          loading="lazy"
          alt={props.title}
        /> : <div aria-hidden="true" className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300 text-teal-200 bg-dimBlue">{React.createElement(props.Icon, { size: 42 })}</div>}

        <div className="min-w-0 mt-4 sm:mx-4 sm:mt-0">
          <h1 className="text-xl font-semibold font-poppins text-gray-700 capitalize md:text-2xl group-hover:text-white text-gradient">
            {props.title}
          </h1>
          <p className="font-poppins font-normal text-dimWhite mt-3">
            Tech Stack
          </p>
          <div className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {props.stack.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={tech.id}
                    className="text-dimWhite inline-flex items-center gap-1.5 text-[18px] hover:text-teal-200"
                  >
                    {IconComponent ? (
                      <>
                        <IconComponent aria-hidden="true" className="shrink-0" />
                        <span className="font-poppins text-xs normal-case">{tech.name}</span>
                      </>
                    ) : (
                      <>
                        ❓
                        <span className="tooltiptext">{tech.name || "Unknown Tech"}</span>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 mb-4 text-dimWhite leading-relaxed font-poppins">
        {props.content}
      </p>

      <div className="flex mt-auto pt-2 gap-3">
        {props.github && (
          <a href={props.github} aria-label={`View ${props.title} on GitHub`} target="_blank" rel="noopener noreferrer">
            <AiFillGithub
              size="2rem"
              className="text-white mr-1 hover:text-teal-200"
            />
          </a>
        )}
        {props.link && (
          <a href={props.link} aria-label={`Open ${props.title} demo`} target="_blank" rel="noopener noreferrer">
            <BsLink45Deg
              size="2rem"
              className="text-white hover:text-teal-200"
            />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Projects
      </h1>

      <div className="container px-2 py-10 mx-auto mb-8">
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {projects.map((project, index) => (
            <Project key={project.id} index={index} {...project} />
          ))}
          <motion.a
            href="https://github.com/devarshvora"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-0 flex flex-col justify-center px-6 sm:px-8 py-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <AiFillGithub aria-hidden="true" size={42} className="text-teal-200 mb-6" />
            <h2 className="text-xl md:text-2xl font-semibold font-poppins text-gradient">Explore More Projects</h2>
            <p className="mt-4 mb-6 text-dimWhite leading-relaxed font-poppins">Explore more AI applications, data experiments, and ongoing builds on GitHub.</p>
            <span className="inline-flex items-center gap-2 text-white font-poppins group-hover:text-teal-200">View on GitHub <BsLink45Deg aria-hidden="true" size="1.5rem" /></span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
