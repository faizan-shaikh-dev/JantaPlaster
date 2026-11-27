"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ArrowIcon, PhoneIcon } from "../site-components";

const slides = [
  {
    id: "gypsum",
    tabLabel: "Gyproc Ceilings",
    num: "01",
    image: "/images/service-gypsum.jpg",
    tag: "SUSPENDED GYPSUM COVE LIGHTING",
    title: "Saint-Gobain Gyproc False Ceilings",
    desc: "Laser-flat suspended false ceilings executed with genuine Saint-Gobain boards, heavy 0.5mm GI channels, and multi-tier concealed LED cove light pelmets.",
    stats: "2–3 Days Execution · 360° Laser Calibrated · 100% Sag Resistant",
    badge: "Most Popular in Jalgaon",
  },
  {
    id: "pop",
    tabLabel: "Royal POP Mouldings",
    num: "02",
    image: "/images/service-pop.jpg",
    tag: "HANDCRAFTED HERITAGE ART",
    title: "Royal Handcrafted POP Ceilings & Mouldings",
    desc: "Opulent floral center medallions, ornate cornice borders, and intricate ceiling carvings hand-sculpted in pure high-whiteness Sakarni Plaster of Paris.",
    stats: "Master Karigars · Hand-Sculpted Reliefs · Mirror-Smooth Finish",
    badge: "Heritage Craftsmanship",
  },
  {
    id: "pvc",
    tabLabel: "UV Marble & Louvers",
    num: "03",
    image: "/images/service-pvc.jpg",
    tag: "100% WATERPROOF & TERMITE-PROOF",
    title: "Luxury UV Marble & Fluted Louver Feature Walls",
    desc: "Bookmatched high-gloss Italian UV marble sheets paired with matte acoustic fluted louvers and warm LED backlight strips for modern TV and bed headboard walls.",
    stats: "1-Day Clean Installation · Zero Painting Dust · 100% Washable",
    badge: "Modern Luxury Living",
  },
  {
    id: "plaster",
    tabLabel: "Mirror Wall Punning",
    num: "04",
    image: "/images/service-plaster.jpg",
    tag: "SUPER-WHITE PLUMB-LINE FINISH",
    title: "Interior Plastering & Mirror Wall Punning",
    desc: "Flawless glass-smooth wall punning and right-angle corner leveling directly over brickwork and plaster, saving 25% paint consumption and ensuring pristine walls.",
    stats: "Zero Pinholes · 90° True Plumb Corners · Satin-Smooth Sheen",
    badge: "Architectural Precision",
  },
];

export default function ServicesCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Automatic 4-second slide timer - resets reliably when current changes or pause toggles
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [current, isPaused]);

  // Touch Swipe Handlers for mobile & tablets
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div
      className="service-showcase-master"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main hero service image viewport */}
      <div className="service-carousel-viewport" aria-label="Services Image Slider">
        {/* Real Horizontal Sliding Track */}
        <div
          className="service-carousel-track"
          style={{
            transform: `translate3d(-${current * 25}%, 0, 0)`,
          }}
        >
          {slides.map((slide, idx) => (
            <div className="service-carousel-slide" key={slide.id}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                className="carousel-slide-image"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />

              {/* Refined gradient overlay: leaves upper 60% bright and clear */}
              <div className="carousel-dark-overlay" />

              {/* Slide Content Header Bar */}
              <div className="carousel-top-bar">
                <div className="carousel-tag-pill">
                  <span className="dot-live" />
                  <span>{slide.tag}</span>
                </div>

                <div className="carousel-badge-pill">
                  <span>{slide.badge}</span>
                </div>
              </div>

              {/* Slide Lower Caption & Direct Action Banner */}
              <div className="carousel-slide-caption">
                <div className="carousel-caption-content">
                  <h2 className="carousel-slide-title">{slide.title}</h2>
                  <p className="carousel-slide-desc">{slide.desc}</p>

                  <div className="carousel-slide-bottom">
                    <span className="carousel-slide-stat">✦ {slide.stats}</span>
                    <div className="carousel-slide-buttons">
                      <a
                        href={`https://wa.me/918624093996?text=${encodeURIComponent(
                          `Hello Janta Plaster, I want to inquire about on-site contractor services for: ${slide.title}. Can you share rates and site inspection details?`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="button button-gold text-sm"
                      >
                        <span>Instant WhatsApp Estimate</span>
                        <ArrowIcon />
                      </a>
                      <a href="tel:+918624093996" className="button button-outline text-sm">
                        <PhoneIcon /> Call Store
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left / Right Navigation Arrows */}
        <button
          type="button"
          className="carousel-arrow carousel-arrow-left"
          onClick={prevSlide}
          aria-label="Previous service"
        >
          ‹
        </button>

        <button
          type="button"
          className="carousel-arrow carousel-arrow-right"
          onClick={nextSlide}
          aria-label="Next service"
        >
          ›
        </button>

        {/* Mobile Slide Dot Indicators */}
        <div className="carousel-dots-bar" aria-label="Slide indicators">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              className={`carousel-dot-pill ${idx === current ? "active" : ""}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Slide ${idx + 1}`}
            >
              <span className="dot-pill-inner" />
            </button>
          ))}
        </div>
      </div>

      {/* Service selector sits directly below the hero image */}
      <div className="svc-tab-selector-bar" role="tablist" aria-label="Services selector">
        {slides.map((s, idx) => {
          const isActive = idx === current;
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`svc-tab-btn ${isActive ? "active" : ""}`}
              onClick={() => setCurrent(idx)}
            >
              <span className="svc-tab-num">{s.num}</span>
              <span className="svc-tab-title">{s.tabLabel}</span>
              {isActive && (
                <span className={`svc-tab-progress ${isPaused ? "paused" : ""}`} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
