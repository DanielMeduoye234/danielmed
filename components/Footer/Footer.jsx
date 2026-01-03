"use client";

import React, { useState } from "react";
import styles from "../Footer/Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import HireMe from "../Hire/HireMe";

const Footer = () => {
  const [hireMeOpen, setHireMeOpen] = useState(false);

  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footertext}>
          <h2>Let's Connect Here</h2>
        </div>
        <div className={styles.footerbtn}>
          {/* ✅ Open modal */}
          <button onClick={() => setHireMeOpen(true)}>Hire Me</button>
        </div>
      </div>
      <div className={styles.footerBtm}>
        <div className={styles.footerColum}>
          <div className={styles.col1}>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={120}
                  height={40}
                  priority
                />
              </Link>
            </div>
            <p>
              Full-stack developer and digital marketing strategist specializing
              in building scalable web applications and driving measurable
              business growth. I combine technical expertise with marketing
              strategy to deliver solutions that generate real ROI.
            </p>
          </div>
          <div className={styles.col2}>
            <h3 className={styles.footh3}>Platform</h3>
            <ul>
              <li>
                <Link href="/">Overview</Link>
              </li>
              <li>
                <Link href="/wordpress">WordPress</Link>
              </li>
              <li>
                <Link href="/next">Full-Stack</Link>
              </li>
              <li>
                <Link href="/shop">E-Commerce</Link>
              </li>
            </ul>
          </div>
          <div className={styles.col3}>
            <h3 className={styles.footh3}>Direct Contact</h3>
            <p>+234 701 3468 525</p>
            <p>danielmeduoye@gmail.com</p>
          </div>
          <div className={styles.col4}>
            <h3 className={styles.footh3}>Connect</h3>
            <div className={styles.socials}>
              <a
                href="https://github.com/DanielMeduoye234"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-meduoye/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://x.com/Daniel93356687"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/coxatech/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Popup rendered here */}
      <HireMe open={hireMeOpen} setOpen={setHireMeOpen} />
    </div>
  );
};

export default Footer;
