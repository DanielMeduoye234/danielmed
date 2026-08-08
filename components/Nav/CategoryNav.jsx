"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./CategoryNav.module.css";
import { FaCode, FaWordpress, FaShopify, FaPalette, FaHome } from "react-icons/fa";

const categories = [
  { name: "Home", href: "/", icon: <FaHome /> },
  { name: "Next.js / React", href: "/next", icon: <FaCode /> },
  { name: "WordPress", href: "/wordpress", icon: <FaWordpress /> },
  { name: "Shopify", href: "/shop", icon: <FaShopify /> },
  { name: "Graphics", href: "/graphics", icon: <FaPalette /> },
];

export default function CategoryNav() {
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>Recruiter Quick Nav:</div>
      <div className={styles.pillContainer}>
        {categories.map((cat) => {
          const isActive = pathname === cat.href;
          return (
            <Link
              key={cat.href}
              href={cat.href}
              className={`${styles.pill} ${isActive ? styles.active : ""}`}
            >
              <span className={styles.icon}>{cat.icon}</span>
              <span className={styles.name}>{cat.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
