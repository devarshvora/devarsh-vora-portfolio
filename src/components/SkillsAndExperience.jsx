import React from "react";
import { skillCategories, experiences } from "../constants";
import { layout } from "../style";
import { motion } from "framer-motion";

export const SkillIcon = ({ icon, name, featured }) => {
  return (
    <div className="flex flex-col items-center min-w-0">
      <span aria-hidden="true" className={`text-[30px] hover:text-teal-200 ${featured ? "text-teal-200" : "text-white"}`}>
        {React.createElement(icon)}
      </span>
      <p className={`font-poppins text-[12px] leading-5 mt-2 text-center break-words max-w-full ${featured ? "text-white font-semibold" : "text-dimWhite"}`}>
        {name}
      </p>
    </div>
  );
};

const SkillCard = ({ title, items }) => {
  return (
    <motion.div
      whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="py-8 first:pt-2 border-b border-gray-800 last:border-b-0"
    >
      <div className="flex flex-row items-center mb-7">
        <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px]">
          {title}
        </h4>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-3 gap-y-7">
        {items.map((item, index) => (
          <SkillIcon key={item.id ?? index} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

const ExperienceCard = ({ logo, initials, organisation, positions, logoBackground = "bg-dimBlue" }) => (
  <motion.div
    whileInView={{ y: [-20, 0], opacity: [0, 1] }}
    transition={{ duration: 1 }}
    className="relative w-full min-w-0 pb-12 md:pb-16 md:flex-1 last:pb-0 md:last:flex-none pl-[76px] sm:pl-[92px] [&:last-child>.experience-rail]:hidden"
  >
    <span aria-hidden="true" className="experience-rail absolute left-[31px] sm:left-[37px] top-16 sm:top-[76px] bottom-0 w-px bg-gray-800" />
    <div className={`absolute left-0 top-0 w-16 h-16 sm:w-[76px] sm:h-[76px] shrink-0 rounded-full ${logoBackground} flex items-center justify-center overflow-hidden ring-1 ring-gray-700`}>
      {logo ? <img
        src={logo}
        alt={organisation}
        className="w-[80%] h-[80%] object-contain"
      /> : <span aria-hidden="true" className="text-teal-200 font-poppins font-semibold">{initials}</span>}
    </div>
    <div className="pt-1">
      <h4 className="font-poppins font-semibold text-[23px] sm:text-[28px] lg:text-[30px] text-gradient leading-[32px] sm:leading-[38px] lg:leading-[42px]">
        {organisation}
      </h4>
    <ol className="mt-4">
      {positions.map((position, index) => (
        <li
          key={index}
          className={index === positions.length - 1 ? "" : "mb-5"}
        >
          <h3 className="font-poppins text-[19px] sm:text-[21px] leading-8 font-semibold text-white">
            {position.title}
          </h3>
          <time className="block mt-2 font-poppins text-[14px] sm:text-[15px] leading-6 font-normal text-gray-400">
            {position.duration}
          </time>
        </li>
      ))}
    </ol>
    </div>
  </motion.div>
);

const SkillsAndExperience = () => {
  return (
    <section id="skills" className="mb-12">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Skills & Experience
      </h1>
      <div className={layout.section}>
        <motion.div className={`min-w-0 mb-6 md:mr-12 ${layout.sectionInfo}`}>
          {skillCategories.map((section, index) => (
            <SkillCard key={index} {...section} />
          ))}
        </motion.div>

        <motion.div className="flex flex-1 min-w-0 items-start justify-start flex-col md:pt-2 md:pl-4 md:pb-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsAndExperience;
