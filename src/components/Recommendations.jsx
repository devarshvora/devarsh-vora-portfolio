import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import alejandro from "../assets/alejandro.jpg";
import arpit from "../assets/arpit.jpg";
import { recommendationSource } from "../constants";
import { zainiPhoto } from "../assets";

const RecommendationCard = ({
  image,
  name,
  title,
  summary,
  email,
  phone,
  linkedin,
  profile,
}) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
    className="relative min-w-0 h-full flex flex-col p-6 bg-[#0f0f0f] rounded-2xl border border-gray-700 shadow-md hover:shadow-teal-400/20 hover:border-teal-400"
  >
    <div className="flex items-center gap-4 mb-4">
      {image ? <img
        src={image}
        alt={name}
        className="w-16 h-16 shrink-0 rounded-full object-cover ring-2 ring-teal-400 shadow-md"
      /> : <span aria-hidden="true" className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full ring-2 ring-teal-400 text-teal-200 text-xl">{name.split(" ").map(part => part[0]).join("")}</span>}
      <div className="min-w-0 min-h-[58px]">
        <h3 className="text-white text-lg font-semibold">{profile ? <a href={profile} target="_blank" rel="noopener noreferrer" className="hover:text-teal-200">{name}</a> : name}</h3>
        <p className="text-sm text-gray-400">{title}</p>
      </div>
    </div>

    <p className="min-h-[112px] text-[15px] leading-7 text-gray-300 mb-5 italic">"{summary}"</p>

    <div className="text-sm text-teal-400 flex flex-col gap-1 mt-auto break-words">
      {email && <a href={`mailto:${email}`} className="hover:underline">
        {email}
      </a>}
      {phone && <a href={`tel:${phone}`} className="hover:underline">
        {phone}
      </a>}
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
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateControls = () => {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft <= 1);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 2);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    const observer = new ResizeObserver(updateControls);
    observer.observe(track);
    updateControls();
    return () => observer.disconnect();
  }, []);

  const move = (direction) => {
    const track = trackRef.current;
    const card = track.querySelector("article");
    if (!card) return;
    track.scrollBy({ left: direction * (card.offsetWidth + 24), behavior: "smooth" });
  };

  const recommendations = [
    {
      image: zainiPhoto,
      name: "Zaini Barmaiya",
      title: "Business Analyst | Transforming Requirements into Reality",
      profile: "https://www.linkedin.com/in/zainibarmaiya/",
      linkedin: recommendationSource,
      summary: "Recognized for translating complex data challenges into practical business solutions and making technical insights useful for decision-making. A reliable, collaborative partner across product, engineering, and business teams.",
      email: "zbarmaiya@gmail.com",
      phone: "+91 7247647567",
    },
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

      <div className="container px-2 py-10 mx-auto overflow-hidden">
        <div ref={trackRef} onScroll={updateControls} tabIndex={0} aria-label="Recommendations"
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-5 mt-8 md:mt-16">
          {recommendations.map((rec, index) => (
            <article key={index} className="snap-start shrink-0 w-full sm:w-[430px] min-h-[390px]">
              <RecommendationCard {...rec} />
            </article>
          ))}
        </div>
        <div className="flex justify-end gap-3 mt-3">
          <button type="button" onClick={() => move(-1)} disabled={atStart} aria-label="Previous recommendation" className="w-11 h-11 bg-gray-700 text-white text-xl rounded-full enabled:hover:bg-gray-600 disabled:opacity-40">&lt;</button>
          <button type="button" onClick={() => move(1)} disabled={atEnd} aria-label="Next recommendation" className="w-11 h-11 bg-gray-700 text-white text-xl rounded-full enabled:hover:bg-gray-600 disabled:opacity-40">&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
