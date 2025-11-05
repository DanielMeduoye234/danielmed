"use client";

import React, { useEffect, useState } from "react";
import styles from "../Categories/project.module.css";
import { client } from "../../sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

const ShopifyProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project" && category->slug.current == "shopify"]{
          _id,
          title,
          link,
          "imageUrl": image.asset->url
        }`
      )
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching Shopify projects:", err));
  }, []);

  return (
    <section className={styles.projects}>

      <div className={styles.grid}>
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project._id} className={styles.card}>
              {project.imageUrl && (
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className={styles.cardImage}
                />
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
          <p style={{ textAlign: "center", color: "#fff" }}>
            No Shopify projects available at the moment.
          </p>
        )}
      </div>
    </section>
  );
};

export default ShopifyProjects;

/*This component fetches and displays Shopify projects from Sanity CMS. It uses React hooks for state management and side effects, and Next.js Image and Link components for optimized image rendering and navigation. The projects are displayed in a grid layout with conditional rendering for cases when no projects are available.*/