"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { ArrowIcon } from "./site-components";

export default function CeilingTransformation() {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  return (
    <section className="section-lux transformation-section" data-reveal>
      <div className="section-head-center">
        <div className="badge-pill">
          <span className="dot-live" /> BEFORE VS AFTER TRANSFORMATION
        </div>
        <h2 className="section-title">
          The Power of <span>Architectural Ceilings</span>
        </h2>
        <p className="section-desc">
          Drag the slider to see how Janta Plaster transforms a cold, unfinished concrete slab into a radiant 5-star living room sanctuary.
        </p>
      </div>

      <div className="transformation-slider-card">
        {/* Comparison Viewport */}
        <div
          ref={containerRef}
          className="comp-viewport"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={handleMouseDown}
        >
          {/* AFTER IMAGE (Full Base Layer) */}
          <div className="comp-image-layer comp-after-layer">
            <Image
              src="/images/hero-ceiling.jpg"
              alt="After: Luxury Saint-Gobain Gyproc false ceiling with warm cove light"
              fill
              className="comp-img"
              sizes="(max-width: 1024px) 100vw, 1100px"
            />
            <div className="comp-tag-badge comp-tag-after">
              <span className="dot-live" /> AFTER: Saint-Gobain Gyproc &amp; Cove LED
            </div>
          </div>

          {/* BEFORE IMAGE (Clipped Layer) */}
          <div
            className="comp-image-layer comp-before-layer"
            style={{ width: `${sliderPos}%` }}
          >
            <Image
              src="/images/before-ceiling.jpg"
              alt="Before: Plain flat ceiling slab with raw concrete"
              fill
              className="comp-img comp-img-before"
              sizes="(max-width: 1024px) 100vw, 1100px"
            />
            <div className="comp-tag-badge comp-tag-before">
              <span>BEFORE: Raw Concrete Slab</span>
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div
            className="comp-divider"
            style={{ left: `${sliderPos}%` }}
            role="slider"
            aria-valuenow={Math.round(sliderPos)}
            aria-label="Comparison slider between before and after false ceiling"
            tabIndex={0}
          >
            <div className="comp-handle-button">
              <span>‹</span>
              <span>›</span>
            </div>
          </div>
        </div>

        {/* Feature Comparison Grid Below */}
        <div className="comp-comparison-specs">
          <div className="comp-spec-side comp-side-before">
            <span className="spec-side-title">Without False Ceiling</span>
            <ul>
              <li>✕ Naked hanging wiring and uneven concrete beams</li>
              <li>✕ Harsh central tube glare causing eye fatigue</li>
              <li>✕ Poor room acoustics with echoing sound</li>
              <li>✕ High AC load due to direct roof heat transfer</li>
            </ul>
          </div>

          <div className="comp-spec-side comp-side-after">
            <span className="spec-side-title">With Janta Plaster Turnkey Execution</span>
            <ul>
              <li>✓ Concealed LED ambient cove lighting (no glare)</li>
              <li>✓ 360° laser-leveled seamless monolithic surface</li>
              <li>✓ Acoustic isolation reducing echo and street noise</li>
              <li>✓ Up to 3°C natural thermal insulation saving electricity</li>
            </ul>
          </div>
        </div>

        {/* Fast Action CTA */}
        <div className="comp-cta-banner">
          <div>
            <strong>Ready to transform your living room or bedroom in Jalgaon?</strong>
            <p>Our expert karigars can execute your ceiling in just 2 to 3 days with genuine Saint-Gobain boards.</p>
          </div>
          <a
            href="https://wa.me/918624093996?text=Hello%20Janta%20Plaster%2C%20I%20saw%20the%20Before%2FAfter%20ceiling%20transformation%20on%20your%20website.%20Can%20you%20visit%20my%20site%20in%20Jalgaon%20for%20measurement%3F"
            target="_blank"
            rel="noreferrer"
            className="button button-gold"
          >
            <span>Book Free Site Measurement</span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
