"use client";

import React, { useState } from "react";
import styles from "../Header/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [showForm, setShowForm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        {/* ✅ Logo */}
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

        {/* ✅ Desktop Navigation */}
        <div className={styles.navlinks}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/wordpress">WordPress</Link>
            </li>
            <li>
              <Link href="/next">Next.js / React.js</Link>
            </li>
            <li>
              <Link href="/shop">Shopify</Link>
            </li>
            <li className={styles.navbtn}>
              <a href="/cv.pdf" download className={styles.downloadBtn}>
                DOWNLOAD CV
              </a>
            </li>
          </ul>
        </div>

        {/* ✅ Hamburger for Mobile */}
        <div
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <FaBars size={24} />
        </div>
      </div>

      {/* ✅ Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className={styles.mobileHeader}>
              <Image src="/logo.png" alt="Logo" width={100} height={35} />
              <div
                className={styles.closeIconWrapper}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaTimes size={24} />
              </div>
            </div>

            <motion.ul
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
            >
              {[
                { name: "Home", href: "/" },
                { name: "WordPress", href: "/wordpress" },
                { name: "Next.js / React.js", href: "/next" },
                { name: "Shopify", href: "/shop" },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}

              <motion.li
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 },
                }}
                className={styles.navbtn}
              >
                <a
                  href="/cv.pdf"
                  download
                  className={styles.downloadBtn}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  DOWNLOAD CV
                </a>
              </motion.li>
            </motion.ul>

            <motion.div
              className={styles.mobileFooter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p>Let's build something exceptional.</p>
              <span>danielmeduoye@gmail.com</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Hire Me Popup */}
      {showForm && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h3>Hire Me Form</h3>
            <button onClick={() => setShowForm(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
