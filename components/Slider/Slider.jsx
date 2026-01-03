"use client";

import React from "react";
import styles from "../Slider/Slider.module.css";
import {
  FaWordpress,
  FaShopify,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGoogleanalytics,
} from "react-icons/si";

const icons = [
  { icon: <FaWordpress />, name: "WordPress" },
  { icon: <FaShopify />, name: "Shopify" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiTailwindcss />, name: "TailwindCSS" },
  { icon: <SiGoogleanalytics />, name: "Google Analytics" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <FaGitAlt />, name: "Git" },
];

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.sliderTrack}>
        {/* Duplicate icons for infinite loop */}
        {icons.concat(icons).map((item, index) => (
          <div key={index} className={styles.slide} title={item.name}>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
