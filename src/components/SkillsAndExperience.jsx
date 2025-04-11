import React from "react";
import {
  skills,
  frameworks,
  tools,
  ml_ai,
  dataEngineering,
  cloudPlatforms,
  experiences,
} from "../constants";
import { layout } from "../style";
import { motion } from "framer-motion";
import { BsLink45Deg } from "react-icons/bs";

export const SkillIcon = ({ icon, name, custom }) => {
  return (
    <div className="flex flex-col items-center min-w-[90px]">
      <span className={`text-white ${custom ? "text-[36px]" : "text-[30px]"} hover:text-teal-200`}>
        {icon ? React.createElement(icon) : <span className="text-white">🧠</span>}
      </span>
      <p className={`font-poppins text-dimWhite ${custom ? "text-[14px]" : "text-[12px]"} mt-2 text-center`}>
        {name}
      </p>
    </div>
  );
};

const SkillCard = ({ title, items, custom = false }) => {
  return (
    <motion.div
      whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="mt-8 mb-10 border-l border-gray-200 dark:border-gray-700 mx-4"
    >
      <div className="relative w-3 h-3 bg-gray-200 rounded-full top-5 right-[6.2px] border dark:border-gray-900 dark:bg-gray-700"></div>
      <div className="flex flex-row items-center mb-6 ml-6">
        <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px]">
          {title}
        </h4>
      </div>
      <div className={`grid ${custom ? "grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-10" : "grid-cols-3 sm:grid-cols-4 gap-8"} ml-8`}>
        {items.map((item, index) => (
          <SkillIcon key={item.id ?? index} {...item} custom={custom} />
        ))}
      </div>
    </motion.div>
  );
};

const Content = ({ text, link }) => (
  <div>
    <p className="font-poppins font-normal text-[15px] md:text-[15px] text-dimWhite mt-4">
      {text}{" "}
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          <BsLink45Deg size="1rem" className="inline hover:text-teal-200" />
        </a>
      )}
    </p>
  </div>
);

const ExperienceCard = ({ logo, organisation, positions }) => (
  <motion.div
    whileInView={{ y: [-20, 0], opacity: [0, 1] }}
    transition={{ duration: 1 }}
    className="mb-12"
  >
    <div className="flex flex-row items-center mb-6">
      <img
        src={logo}
        alt={organisation}
        className="w-[52px] h-[52px] rounded-full z-[2]"
      />
      <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px] ml-2">
        {organisation}
      </h4>
    </div>
    <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-6">
      {positions.map((position, index) => (
        <li
          key={index}
          className={`${index === positions.length - 1 ? "mb-0" : "mb-4"} ml-4`}
        >
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <h3 className="text-lg font-semibold text-white flex items-center">
            {position.title}
            {position.certificate && (
              <a href={position.certificate} target="_blank" rel="noreferrer">
                <BsLink45Deg
                  size="1.4rem"
                  className="ml-2 text-teal-400 hover:text-teal-300"
                  title="View Certificate"
                />
              </a>
            )}
          </h3>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {position.duration}
          </time>
          {position.content.map((info, idx) => (
            <Content key={idx} {...info} />
          ))}
        </li>
      ))}
    </ol>
  </motion.div>
);

const SkillsAndExperience = () => {
  const mergedSections = [
    { title: "Programming Languages", items: skills[0]?.items || [], custom: true },
    {
      title: "Frameworks, Libraries & Tools",
      items: [...(frameworks || []), ...(tools || [])],
    },
    {
      title: "ML / AI & Data Engineering",
      items: [...(ml_ai || []), ...(dataEngineering || [])],
    },
    { title: "Cloud Platforms", items: cloudPlatforms || [] },
  ];

  return (
    <section id="skills" className="mb-12">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Skills & Experience
      </h1>
      <div className={layout.section}>
        <motion.div className={`ml-2 mb-6 mr-10 ${layout.sectionInfo}`}>
          {mergedSections.map((section, index) => (
            <SkillCard key={index} {...section} />
          ))}
        </motion.div>

        <motion.div className="flex flex-1 items-center justify-start flex-col">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsAndExperience;
