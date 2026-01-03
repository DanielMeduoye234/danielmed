import React from "react";
import styles from "../About/About.module.css";
import {
  FaReact,
  FaWordpress,
  FaShopify,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaDatabase,
  FaSearchDollar,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGoogleanalytics,
} from "react-icons/si";

const About = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.aboutContent}>
          {/* Left Text */}
          <div className={styles.left}>
            <h1>Crafting Digital Excellence</h1>
            <p>
              I am <strong>Daniel Meduoye</strong>, a Full-Stack Developer and
              Digital Marketing Strategist with a focus on building
              <strong> growth-oriented digital experiences</strong>. With over 5
              years of expertise, I bridge the gap between complex engineering
              and high-impact marketing.
            </p>
            <p>
              My approach combines <strong>technical precision</strong> with
              <strong> strategic insight</strong>. Whether it's architecting
              scalable Next.js applications or engineering high-converting SEO
              funnels, I deliver solutions that don't just work—they perform.
            </p>

            {/* Tech Stack */}
            <div className={styles.techStack}>
              <h3>Core Tech Stack</h3>
              <div className={styles.icons}>
                <FaJsSquare title="JavaScript" />
                <FaReact title="React" />
                <SiNextdotjs title="Next.js" />
                <FaNodeJs title="Node.js" />
                <SiMongodb title="MongoDB" />
                <SiPostgresql title="PostgreSQL" />
                <SiTailwindcss title="TailwindCSS" />
                <FaWordpress title="WordPress" />
                <FaShopify title="Shopify" />
                <SiGoogleanalytics title="Google Analytics" />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className={styles.right}>
            <h2>Strategic Impact</h2>
            <div className={styles.experience}>
              <div className={styles.expBox}>
                <h3>300%+ ROI</h3>
                <p>Average Client Growth</p>
              </div>
              <div className={styles.expBox}>
                <h3>5+ Years</h3>
                <p>Full-Stack Engineering</p>
              </div>
              <div className={styles.expBox}>
                <h3>50+ Projects</h3>
                <p>Successfully Launched</p>
              </div>
              <div className={styles.expBox}>
                <h3>MERN Stack</h3>
                <p>Core Specialization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
