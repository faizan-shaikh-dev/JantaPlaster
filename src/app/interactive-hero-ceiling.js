"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowIcon } from "./site-components";

const CeilingScene = dynamic(() => import("./ceiling-scene"), {
  ssr: false,
  loading: () => (
    <div className="canvas-loading-state">
      <span className="dot-live" />
      <span>INITIALIZING 3D FRAMEWORK MODEL...</span>
    </div>
  ),
});

const lightMoods = [
  {
    id: "warm",
    name: "Royal Warm Gold",
    kelvin: "3000K",
    color: "#f59e0b",
    glowColor: "rgba(245, 158, 11, 0.45)",
    ambientFilter: "sepia(0.2) saturate(1.25) hue-rotate(-10deg) brightness(1.05)",
    desc: "Cozy ambient cove glow for luxury living halls & dining spaces.",
  },
  {
    id: "natural",
    name: "Architectural Daylight",
    kelvin: "4000K",
    color: "#fef08a",
    glowColor: "rgba(254, 240, 138, 0.4)",
    ambientFilter: "brightness(1.08) contrast(1.04) saturate(1.05)",
    desc: "Clean balanced light rendering true colors of furniture & wall finishes.",
  },
  {
    id: "cool",
    name: "Diamond White",
    kelvin: "6500K",
    color: "#93c5fd",
    glowColor: "rgba(147, 197, 253, 0.42)",
    ambientFilter: "saturate(0.95) hue-rotate(15deg) brightness(1.1) contrast(1.06)",
    desc: "Ultra-crisp high-contrast lighting for modern showrooms & galleries.",
  },
];

export default function InteractiveHeroCeiling() {
  const [activeMood, setActiveMood] = useState(lightMoods[0]);
  const [viewMode, setViewMode] = useState("photo"); // "photo" | "3d"
  const [coveGlowIntensity, setCoveGlowIntensity] = useState(true);

  return (
    <div className="hero-showcase-master">
      {/* Visual Canvas Frame */}
      <div className="hero-showcase-frame">
        {/* Unified Top Header Bar (Zero Collisions) */}
        <div className="showcase-top-header">
          <div className="showcase-top-badge">
            <span className="dot-live" />
            <span>{viewMode === "photo" ? "LIVING HALL ATELIER" : "3D FRAMING MODEL"}</span>
          </div>

          <div className="showcase-mode-bar">
            <button
              type="button"
              className={`mode-pill-btn ${viewMode === "photo" ? "active" : ""}`}
              onClick={() => setViewMode("photo")}
            >
              <span>Live Lights</span>
            </button>

            <button
              type="button"
              className={`mode-pill-btn ${viewMode === "3d" ? "active" : ""}`}
              onClick={() => setViewMode("3d")}
            >
              <span>3D Model</span>
            </button>
          </div>
        </div>

        {viewMode === "photo" ? (
          <div className="photo-studio-viewport">
            {/* Real HD Luxury Ceiling Photograph */}
            <Image
              src="/images/hero-ceiling.jpg"
              alt="Luxury Saint-Gobain Gyproc False Ceiling with Ambient LED Cove Lighting"
              fill
              priority
              className="photo-studio-img"
              style={{
                filter: coveGlowIntensity ? activeMood.ambientFilter : "brightness(0.85) contrast(1.05)",
                transition: "filter 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              sizes="(max-width: 1024px) 100vw, 55vw"
            />

            {/* Dynamic Simulated Cove Light Pelmet Glow Overlay */}
            {coveGlowIntensity && (
              <div
                className="cove-ambient-overlay"
                style={{
                  background: `radial-gradient(ellipse 75% 55% at 50% 32%, ${activeMood.glowColor} 0%, rgba(0,0,0,0) 70%)`,
                  transition: "background 0.5s ease",
                }}
              />
            )}

            {/* Floating Material Spec Pill */}
            <div className="showcase-spec-chip">
              <strong>Cove LED Mood:</strong>
              <span>
                {activeMood.name} · {activeMood.kelvin}
              </span>
            </div>
          </div>
        ) : (
          <div className="three-d-viewport">
            <CeilingScene />
          </div>
        )}
      </div>

      {/* Mode-Specific Sub-Controller (Stable Height: Zero Layout Shift) */}
      {viewMode === "photo" ? (
        <div className="light-mood-controller">
          <div className="lmc-header">
            <div className="lmc-label">
              <span className="lmc-indicator" style={{ background: activeMood.color }} />
              <strong>Interactive Cove Light Mood Switcher:</strong>
            </div>
            <button
              type="button"
              className={`cove-toggle-btn ${coveGlowIntensity ? "is-on" : ""}`}
              onClick={() => setCoveGlowIntensity((prev) => !prev)}
            >
              <span>{coveGlowIntensity ? "Lights: ON" : "Lights: OFF"}</span>
            </button>
          </div>

          <div className="mood-pills-row">
            {lightMoods.map((mood) => {
              const isSelected = activeMood.id === mood.id;
              return (
                <button
                  key={mood.id}
                  type="button"
                  className={`mood-pill ${isSelected ? "selected" : ""}`}
                  onClick={() => {
                    setActiveMood(mood);
                    setCoveGlowIntensity(true);
                  }}
                  aria-pressed={isSelected}
                >
                  <span
                    className="mood-swatch"
                    style={{
                      background: mood.color,
                      boxShadow: isSelected ? `0 0 12px ${mood.color}` : "none",
                    }}
                  />
                  <div className="mood-meta">
                    <strong>{mood.name}</strong>
                    <small>{mood.kelvin}</small>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="lmc-desc">
            ✦ {activeMood.desc} Executed with concealed GI troughs &amp; flicker-free 24V strip LEDs in Jalgaon.
          </p>
        </div>
      ) : (
        <div className="light-mood-controller framework-controller">
          <div className="lmc-header">
            <div className="lmc-label">
              <span className="lmc-indicator" style={{ background: "#f59e0b" }} />
              <strong>Architectural Framing Specifications:</strong>
            </div>
            <span className="framework-rot-hint">
              <span className="dot-live" /> 360° Interactive Orbit
            </span>
          </div>

          <div className="framework-specs-row">
            <div className="fw-spec-chip">
              <span className="fw-chip-icon">⚙</span>
              <div>
                <strong>GI Channels</strong>
                <small>0.5mm JSW Galvanized</small>
              </div>
            </div>
            <div className="fw-spec-chip">
              <span className="fw-chip-icon">◈</span>
              <div>
                <strong>Gyproc Boards</strong>
                <small>12.5mm Saint-Gobain</small>
              </div>
            </div>
            <div className="fw-spec-chip">
              <span className="fw-chip-icon">◎</span>
              <div>
                <strong>Leveling</strong>
                <small>360° Laser Calibrated</small>
              </div>
            </div>
          </div>

          <p className="lmc-desc">
            ✦ Hover or rotate the 3D framework above to inspect heavy GI ceiling sections, drop rods, and recessed LED troughs.
          </p>
        </div>
      )}
    </div>
  );
}
