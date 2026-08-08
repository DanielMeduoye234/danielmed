"use client";

import React, { useEffect, useState } from "react";
import styles from "../Categories/project.module.css";
import { client } from "../../sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

const WordpressProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project" && (category->slug.current == "wordpress" || category->slug.current match "word*")] | order(_createdAt desc){
          _id,
          title,
          link,
          "imageUrl": image.asset->url
        }`
      )
      .then((data) => {
        setProjects(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching WordPress projects:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className={styles.projects}>
      <div className={styles.grid}>
        {loading ? (
          Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className={`${styles.card} ${styles.skeletonCard}`}>
              <div className={styles.skeletonImage}></div>
              <div className={styles.cardContent}>
                <div className={styles.skeletonTitle}></div>
                <div className={styles.skeletonBtn}></div>
              </div>
            </div>
          ))
        ) : projects.length > 0 ? (
          projects.map((project) => (
            <div key={project._id} className={styles.card}>
              {project.imageUrl && (
                <div className={styles.imageWrap}>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className={styles.cardImage}
                  />
                </div>
              )}
              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                {project.link && (
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project →
                  </Link>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noProjectsText}>No WordPress projects found.</p>
        )}
      </div>
    </section>
  );
};

export default WordpressProjects;
