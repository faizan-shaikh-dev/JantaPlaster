"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ArrowIcon, PhoneIcon } from "../site-components";

const slides = [
  {
    image: "/images/service-gypsum.jpg",
    tag: "RESIDENTIAL & COMMERCIAL",
    title: "Saint-Gobain Gyproc False Ceilings",
    desc: "Seamless suspended gypsum drop ceilings with concealed LED ambient cove troughs, peripheral box drops, and spot downlights.",
    stats: "2-3 Days Execution · 360° Laser Flat",
  },
  {
    image: "/images/service-pop.jpg",
    tag: "ROYAL ARCHITECTURAL",
    title: "Handcrafted POP Ceilings & Mouldings",
    desc: "Intricate floral center medallions, royal ceiling fan rosettes, and ornamental wall cornice borders sculpted in pure white Sakarni POP.",
    stats: "Master Karigars · Hand Sculpted Finish",
  },
  {
    image: "/images/service-pvc.jpg",
    tag: "100% WATERPROOF",
    title: "Luxury UV Marble & Louver Feature Walls",
    desc: "High-gloss Italian marble sheets and acoustic charcoal fluted louvers for stunning TV units, bed heads, and damp-resistant walls.",
    stats: "Zero Paint Needed · 1-Day Clean Fix",
  },
  {
    image: "/images/service-plaster.jpg",
    tag: "MIRROR SMOOTH",
    title: "Interior Plastering & Mirror Punning",
    desc: "Plumb-line wall leveling and glass-smooth POP punning over brickwork, saving paint consumption and boosting final sheen.",
    stats: "Zero Pinholes · Super White Reflection",
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

  // Automatic 3-second slide timer - resets reliably when current changes or pause toggles
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

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
      className="service-carousel-viewport"
      aria-label="Services Image Slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3-Second Golden Progress Countdown Bar */}
      <div className="carousel-progress-track">
        <div
          key={current}
          className={`carousel-progress-bar ${isPaused ? "paused" : ""}`}
        />
      </div>

      {/* Slide Counter Badge */}
      <div className="carousel-counter-badge">
        <span className="cc-num">0{current + 1}</span>
        <span className="cc-div">/</span>
        <span className="cc-max">0{slides.length}</span>
      </div>

      {/* Real Horizontal Sliding Track (400% track with -25% slide increment) */}
      <div
        className="service-carousel-track"
        style={{
          transform: `translate3d(-${current * 25}%, 0, 0)`,
        }}
      >
        {slides.map((slide, idx) => (
          <div className="service-carousel-slide" key={slide.title}>
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={idx === 0}
              className="carousel-slide-image"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="carousel-dark-overlay" />

            <div className="carousel-slide-caption">
              <div className="carousel-caption-content">
                <div className="carousel-tag-pill">
                  <span className="dot-live" /> {slide.tag}
                </div>

                <h2 className="carousel-slide-title">{slide.title}</h2>
                <p className="carousel-slide-desc">{slide.desc}</p>

                <div className="carousel-slide-bottom">
                  <span className="carousel-slide-stat">✦ {slide.stats}</span>
                  <div className="carousel-slide-buttons">
                    <a
                      href={`https://wa.me/918624093996?text=${encodeURIComponent(
                        `Hello Janta Plaster, I am interested in ${slide.title}. Can you provide an estimate?`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-gold text-sm"
                    >
                      <span>Inquire for Project</span>
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
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        type="button"
        className="carousel-arrow carousel-arrow-right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dot Indicators */}
      <div className="carousel-dots-bar" aria-label="Slide indicators">
        {slides.map((slide, idx) => (
          <button
            key={slide.title}
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
  );
}
