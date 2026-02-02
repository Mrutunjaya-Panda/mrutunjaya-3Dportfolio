import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { div } from "framer-motion/client";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient shadow-card rounded-[20px] p-[1px]"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={`${icon}${icon.includes("?") ? "&" : "?"}tr=f-auto`}
            alt={title}
            loading="lazy"
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[14px] sm:text-[17px] max-w-3xl sm:leading-[30px] leading-1"
      >
        {/* Hi, I’m Swastik Yadav — a passionate Frontend / Full Stack Developer
        with hands-on experience in building modern, responsive web applications
        using technologies like React.js, Tailwind CSS, Node.js, and MongoDB.
        I’ve worked on real-world freelance projects and participated in
        hackathons like ReImagine, where I pushed my creativity and technical
        skills to the next level. */}
        {/* I'm an aspiring full-stack developer and a Computer Science
        undergraduate with strong foundations in HTML, CSS, and JavaScript. I
        have hands-on experience building interactive, user-facing web
        interfaces and I'm currently expanding my skills in React.js and modern
        frontend workflows, along with backend technologies like Node.js,
        Express, and REST APIs. I'm also a keen problem solver, having solved
        over 600+ DSA problems, which has sharpened my debugging and analytical
        skills. */}
        I am a Computer Science undergraduate and Full-Stack Developer who
        thrives at the intersection of core engineering and emerging AI. By
        anchoring my Generative AI fluency in a rigorous academic foundation and
        specialised training from IITM Pravartak and Coding Ninjas, I do more than just build
        apps—I architect intelligent systems. With a track record of solving
        more than 600 DSA problems and a solid foundation in computer science, I
        am able to precisely navigate the rapidly evolving tech landscape by
        dynamically bridging traditional architecture with the next wave of
        AI-driven solutions.
      </motion.p>
      <div className="mt-20 flex  flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
