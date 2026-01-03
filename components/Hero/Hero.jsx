"use client";

import React, { useState, useEffect } from "react";
import styles from "../Hero/Hero.module.css";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import HireMe from "../Hire/HireMe"; // ✅ import HireMe

const Hero = () => {
  const [hireMeOpen, setHireMeOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          {/* Left Text */}
          <motion.div
            className={styles.text}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className={styles.badge}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              🚀 <span>ROI-Driven Full-Stack Engineer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              I Build Digital <br />
              <span className={styles.gradientText}>FullStack Project</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Specializing in{" "}
              <strong>high-performance full-stack engineering</strong> and
              <strong> strategic digital marketing</strong>. I bridge the gap
              between complex code and measurable business success.
            </motion.p>

            <motion.div
              className={styles.cta}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <button
                className={styles.primaryBtn}
                onClick={() => setHireMeOpen(true)}
              >
                Let's Scale Your Business
              </button>

              <button className={styles.secondaryBtn}>
                <a href="#expertise" className={styles.downloadBtn}>
                  Review My Projects
                </a>
              </button>
            </motion.div>

            <motion.div
              className={styles.stats}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <div className={styles.statItem}>
                <h4>300%+</h4>
                <span>Avg. Client ROI</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.statItem}>
                <h4>50+</h4>
                <span>Projects Launched</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Section */}
          <motion.div
            className={styles.visualSection}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.glowBg}></div>
              <motion.div
                className={styles.mainImage}
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/header-img.png"
                  alt="Daniel Meduoye"
                  width={600}
                  height={600}
                  priority
                />
              </motion.div>

              {/* Floating Elements for "Wow" Factor */}
              <motion.div
                className={`${styles.floatingCard} ${styles.card1}`}
                animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className={styles.cardIcon}>⚡</div>
                <div className={styles.cardText}>
                  <strong>99+</strong>
                  <span>Performance</span>
                </div>
              </motion.div>

              <motion.div
                className={`${styles.floatingCard} ${styles.card2}`}
                animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className={styles.cardIcon}>📈</div>
                <div className={styles.cardText}>
                  <strong>$1M+</strong>
                  <span>Ad Spend Managed</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <HireMe open={hireMeOpen} setOpen={setHireMeOpen} />
    </section>
  );
};

export default Hero;
