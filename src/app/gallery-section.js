"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowIcon } from "./site-components";

const designs = [
  {
    id: "tray",
    title: "Double Tray Ambient Cove Ceiling",
    category: "Living Room & Hall",
    image: "/images/ceiling-cove.jpg",
    description: "Suspended multi-tier Gyproc false ceiling with concealed warm LED cove troughs and recessed downlights.",
    features: ["Indirect Warm Cove Lighting", "Recessed COB Downlights", "Seamless Gyproc Jointing"],
    tag: "Trending",
  },
  {
    id: "gypsum-drop",
    title: "Architectural Perimeter Drop Box",
    category: "Master Bedroom",
    image: "/images/service-gypsum.jpg",
    description: "Outer perimeter drop box framing with central fan island, providing optimal headroom and layered elegance.",
    features: ["Dual-Zone Dimming", "Heavy GI Steel Framing", "Acoustic Insulation"],
    tag: "Popular",
  },
  {
    id: "pvc-wall",
    title: "High-Gloss UV Marble Feature Wall",
    category: "TV Units & Living Spaces",
    image: "/images/service-pvc.jpg",
    description: "Waterproof UV-coated Italian marble sheets accented with brushed metallic profiles for luxury backdrops.",
    features: ["100% Water & Termite Proof", "High-Gloss Finish", "1-Day Clean Fixation"],
    tag: "Luxury",
  },
  {
    id: "louvers",
    title: "Acoustic Fluted Charcoal Louvers",
    category: "Modern Accent Cladding",
    image: "/images/mat-louvers.jpg",
    description: "Interlocking vertical fluted louvers for bedroom headboards, entrance foyers, and dining wall accents.",
    features: ["Rich Natural Wood Texture", "Concealed Wiring Slots", "Zero Paint Dust"],
    tag: "Modern",
  },
  {
    id: "pop-royal",
    title: "Royal POP Medallions & Cornices",
    category: "Heritage & Living Rooms",
    image: "/images/service-pop.jpg",
    description: "Handcrafted Plaster of Paris fan rosettes, floral center medallions, and ornamental perimeter cornices.",
    features: ["Grade-A Sakarni POP", "Hand-Sculpted Detail", "Mirror Punning"],
    tag: "Classic",
  },
  {
    id: "plaster-finish",
    title: "Mirror-Smooth Wall Plaster & Punning",
    category: "Interior Wall Surfacing",
    image: "/images/service-plaster.jpg",
    description: "Plumb-line wall leveling and super-fine POP punning over brickwork, saving paint consumption.",
    features: ["Zero Pinholes", "Super White Sheen", "25% Paint Savings"],
    tag: "Essential",
  },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredDesigns = activeTab === "all"
    ? designs
    : designs.filter((d) => (activeTab === "residential" ? d.id !== "pvc-wall" && d.id !== "louvers" : d.id === "pvc-wall" || d.id === "louvers"));

  return (
    <section className="gallery-section" id="designs" data-reveal>
      <div className="section-head-center">
        <div className="badge-pill">
          <span className="dot-live" /> DESIGN INSPIRATION
        </div>
        <h2 className="section-title">
          False Ceiling &amp; <span>Wall Inspirations</span>
        </h2>
        <p className="section-desc">
          Browse real false ceiling concepts, cove lighting layouts, and feature wall designs executed in Jalgaon.
        </p>
      </div>

      <div className="gallery-tabs">
        <button
          type="button"
          className={`gallery-tab-btn ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All Concepts ({designs.length})
        </button>
        <button
          type="button"
          className={`gallery-tab-btn ${activeTab === "residential" ? "active" : ""}`}
          onClick={() => setActiveTab("residential")}
        >
          False Ceilings &amp; Mouldings
        </button>
        <button
          type="button"
          className={`gallery-tab-btn ${activeTab === "panels" ? "active" : ""}`}
          onClick={() => setActiveTab("panels")}
        >
          Feature Walls &amp; Louvers
        </button>
      </div>

      <div className="gallery-grid" data-stagger>
        {filteredDesigns.map((design) => (
          <article className="design-card" key={design.id}>
            <div className="design-card-visual">
              <Image
                src={design.image}
                alt={design.title}
                fill
                className="design-card-img"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <span className="design-tag">{design.tag}</span>
            </div>

            <div className="design-card-body">
              <span className="design-category">{design.category}</span>
              <h3>{design.title}</h3>
              <p>{design.description}</p>

              <div className="design-features-list">
                {design.features.map((feat) => (
                  <span key={feat} className="feature-pill">
                    ✓ {feat}
                  </span>
                ))}
              </div>

              <a
                href={`https://wa.me/918624093996?text=${encodeURIComponent(
                  `Hello Janta Plaster, I liked the "${design.title}" style on your website. Could you share an estimate for my space in Jalgaon?`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="design-inquire-link"
              >
                <span>Inquire for This Design</span>
                <ArrowIcon />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
