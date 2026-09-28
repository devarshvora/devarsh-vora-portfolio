import React, { useRef, useState } from "react";
import { BsLink45Deg } from "react-icons/bs";
import { certifications, certificationProfile } from "../constants";
import styles from "../style";

const Certifications = () => {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateControls = () => {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft <= 1);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 2);
  };

  React.useEffect(() => {
    const observer = new ResizeObserver(updateControls);
    observer.observe(trackRef.current);
    updateControls();
    return () => observer.disconnect();
  }, []);

  const move = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".certification-card");
    if (!card) return;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <section className="bg-primary text-white mt-5 md:mt-10 relative" id="certifications">
      <div className="absolute pointer-events-none z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient bottom-40" />
      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth} min-w-0 relative`}>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">Certifications</h1>
          <div className="my-10 sm:my-16">
            <div id="certification-track" ref={trackRef} onScroll={updateControls}
              aria-label="Certifications" tabIndex={0}
              className="flex gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory pb-5">
              {certifications.map((cert) => <CertificationCard key={cert.credential} cert={cert} />)}
              <a href={certificationProfile} target="_blank" rel="noopener noreferrer"
                className="certification-card snap-start shrink-0 w-full xs:w-[320px] md:w-[400px] flex flex-col justify-center gap-4 px-6 py-6 my-5 rounded-[20px] border border-gray-700 hover:border-teal-500 font-poppins">
                <span className="text-xl text-gradient">View more on LinkedIn</span>
                <span className="text-sm text-dimWhite">Explore all certifications <span aria-hidden="true">↗</span></span>
              </a>
            </div>
            <div className="flex justify-end gap-3 mt-3">
              <button onClick={() => move(-1)} disabled={atStart} aria-label="Previous certifications" aria-controls="certification-track"
                className="w-11 h-11 bg-gray-700 rounded-full disabled:opacity-40">&lt;</button>
              <button onClick={() => move(1)} disabled={atEnd} aria-label="Next certifications" aria-controls="certification-track"
                className="w-11 h-11 bg-gray-700 rounded-full disabled:opacity-40">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CertificationCard = ({ cert }) => (
  <a href={cert.credential} target="_blank" rel="noopener noreferrer"
    className="certification-card snap-start shrink-0 w-full xs:w-[320px] md:w-[400px] flex flex-col px-6 py-6 rounded-[20px] my-5 transition-colors duration-300 border hover:border-teal-500 border-gray-700 shadow-lg">
    {cert.Icon ? <cert.Icon aria-hidden="true" className="w-[45px] h-[45px] shrink-0 mb-4" /> :
      <img src={cert.icon} alt={`${cert.issuer} logo`} className="w-[45px] h-[45px] object-contain shrink-0 mb-4" />}
    <p className="font-poppins font-normal text-xl text-white leading-7 mb-2">{cert.title}</p>
    <p className="font-poppins italic text-lg text-gradient mb-3">{cert.issuer}</p>
    {cert.description && <p className="font-poppins text-dimWhite text-sm leading-6 mb-4">{cert.description}</p>}
    <span className="inline-flex items-center mt-auto pt-3 font-poppins text-dimWhite text-sm">
      <BsLink45Deg size="1.5rem" aria-hidden="true" /><span className="ml-1">View Credential</span>
    </span>
  </a>
);

export default Certifications;
