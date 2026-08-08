// components/Categories/GraphicsProjects.jsx
"use client";

import React, { useEffect, useState } from "react";
import styles from "./project.module.css"; // CSS file in same folder
import { client } from "../../sanity/lib/client";
import Image from "next/image";

export default function GraphicsProjects() {
  const [graphics, setGraphics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGraphics() {
      try {
        // fetch each graphics doc with its images array
        const data = await client.fetch(
          `*[_type == "graphics"] | order(_createdAt desc){
            _id,
            title,
            "images": images[] { "url": asset->url, "id": asset->_id }
          }`
        );
        // For debugging: uncomment next line to inspect the returned structure in console
        // console.log("graphics fetched:", data);
        setGraphics(data || []);
      } catch (err) {
        console.error("Error fetching graphics:", err);
        setGraphics([]);
      } finally {
        setLoading(false);
      }
    }

    fetchGraphics();
  }, []);

  if (loading) {
    return (
      <section className={styles.projects}>
        <p className={styles.centerText}>Loading graphics…</p>
      </section>
    );
  }

  if (!graphics || graphics.length === 0) {
    return (
      <section className={styles.projects}>
        <p className={styles.centerText}>No graphics found yet.</p>
      </section>
    );
  }

  return (
    <section className={styles.projects}>
      <div className={styles.grid}>
        {graphics.map((item) => (
          <article key={item._id} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>

            <div className={styles.imageGallery}>
              {item.images && item.images.length > 0 ? (
                item.images.map((img, idx) =>
                  img?.url ? (
                    <div className={styles.imageWrap} key={img.id ?? idx}>
                      <Image
                        src={img.url}
                        alt={`${item.title} ${idx + 1}`}
                        width={600}
                        height={400}
                        className={styles.cardImage}
                        priority={idx === 0} // give first image priority for LCP
                      />
                    </div>
                  ) : null
                )
              ) : (
                <p className={styles.centerText}>No images in this gallery.</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
