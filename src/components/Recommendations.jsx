import React from "react";
import { motion } from "framer-motion";
import alejandro from "../assets/alejandro.jpg";
import arpit from "../assets/arpit.jpg";

const RecommendationCard = ({
  image,
  name,
  title,
  summary,
  email,
  phone,
  linkedin,
}) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
    className="relative flex flex-col p-6 bg-[#0f0f0f] rounded-2xl border border-gray-700 shadow-md hover:shadow-teal-400/20 hover:border-teal-400"
  >
    <div className="flex items-center gap-4 mb-4">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover ring-2 ring-teal-400 shadow-md"
      />
      <div>
        <h3 className="text-white text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-400">{title}</p>
      </div>
    </div>

    <p className="text-[15px] text-gray-300 mb-4 italic">"{summary}"</p>

    <div className="text-sm text-teal-400 flex flex-col gap-1">
      <a href={`mailto:${email}`} className="hover:underline">
        {email}
      </a>
      <a href={`tel:${phone}`} className="hover:underline">
        {phone}
      </a>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline text-xs mt-1"
      >
        View full recommendation on LinkedIn →
      </a>
    </div>
  </motion.div>
);

const Recommendations = () => {
  const recommendations = [
    {
      image: alejandro,
      name: "Alejandro Ruiz",
      title: "Sr. Manager, Educational Partnerships, Dallas College - North Lake Campus",
      summary:
        "Devarsh applied his technical data analytics skills to drive informed decisions while managing digital projects and workshops with confidence and clarity.",
      email: "aruiz2@dallascollege.edu",
      phone: "+1 (972) 273-3177",
      linkedin:
        "https://www.linkedin.com/in/devarshvora/details/recommendations/",
    },
    {
      image: arpit,
      name: "Arpit Sharma",
      title: "Vice President, Quintessence Knowledge Services",
      summary:
        "Devarsh demonstrated outstanding business intelligence skills by leveraging data to support strategic initiatives. His analytical mindset made a measurable impact.",
      email: "arpitsharma0506@gmail.com",
      phone: "+91-9818233889",
      linkedin:
        "https://www.linkedin.com/in/devarshvora/details/recommendations/",
    },
  ];

  return (
    <section id="recommendations" className="mt-[80px] mb-[80px]">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Recommendations
      </h1>

      <div className="container px-2 py-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-16">
          {recommendations.map((rec, index) => (
            <RecommendationCard key={index} {...rec} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
