"use client";

import React from "react";
import styles from "../Heading/Heading.module.css";
import { motion } from "framer-motion";
import CategoryNav from "../Nav/CategoryNav";

const Heading = ({ title, subtitle }) => {
  return (
    <div className={styles.heading}>
      <div className={styles.container}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          {subtitle}
        </motion.p>

        <CategoryNav />
      </div>
    </div>
  );
};

export default Heading;
