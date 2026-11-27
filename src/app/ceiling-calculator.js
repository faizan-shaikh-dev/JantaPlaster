"use client";

import { useState, useMemo } from "react";
import { ArrowIcon } from "./site-components";

const ceilingTypes = [
  {
    id: "gypsum",
    name: "Gypsum False Ceiling",
    subtitle: "Saint-Gobain Gyproc & GI Framing",
    badge: "Most Popular",
    materialRate: 48, // approx ₹ per sq ft for materials
    fullRate: 95,     // approx ₹ per sq ft material + labour
    description: "Ideal for modern living rooms, bedrooms, and concealed LED cove lighting.",
  },
  {
    id: "pop",
    name: "POP Designer Ceiling",
    subtitle: "Plaster of Paris Handcrafted Design",
    badge: "Architectural",
    materialRate: 52,
    fullRate: 110,
    description: "Best for royal mouldings, decorative medallions, and intricate cornice borders.",
  },
  {
    id: "pvc",
    name: "PVC Wall / Ceiling Panels",
    subtitle: "100% Waterproof & Termite-Proof",
    badge: "Low Maintenance",
    materialRate: 42,
    fullRate: 85,
    description: "Great for kitchens, balconies, bathrooms, and high-moisture interior walls.",
  },
  {
    id: "grid",
    name: "T-Grid Modular Ceiling",
    subtitle: "2x2 ft Gypsum / Mineral Fiber Tiles",
    badge: "Commercial",
    materialRate: 45,
    fullRate: 80,
    description: "Ideal for commercial offices, clinics, shops, and quick access above ceiling.",
  },
];

const presets = [
  { label: "10 × 10 ft (Small Room)", length: 10, width: 10 },
  { label: "10 × 12 ft (Standard Bedroom)", length: 12, width: 10 },
  { label: "12 × 15 ft (Master Bedroom)", length: 15, width: 12 },
  { label: "14 × 18 ft (Living Hall)", length: 18, width: 14 },
];

export default function CeilingCalculator() {
  const [length, setLength] = useState(12);
  const [width, setWidth] = useState(10);
  const [selectedType, setSelectedType] = useState("gypsum");
  const [includeLabour, setIncludeLabour] = useState(true);

  // Calculations
  const area = useMemo(() => {
    return Math.max(1, Math.round(length * width));
  }, [length, width]);

  const activeTypeObj = useMemo(() => {
    return ceilingTypes.find((t) => t.id === selectedType) || ceilingTypes[0];
  }, [selectedType]);

  const baseRate = includeLabour ? activeTypeObj.fullRate : activeTypeObj.materialRate;
  const estimatedCost = Math.round(area * baseRate);
  const minCost = Math.round(estimatedCost * 0.92);
  const maxCost = Math.round(estimatedCost * 1.08);

  // Material approximations
  const materials = useMemo(() => {
    // 6x4 ft gypsum sheet = 24 sq ft per sheet with 10% wastage
    const sheetsNeeded = Math.ceil((area * 1.1) / 24);
    // Perimeter length (ft)
    const perimeter = (Number(length) + Number(width)) * 2;
    // GI perimeter channel pieces (12ft each)
    const perimeterChannels = Math.ceil(perimeter / 12);
    // GI ceiling section runners (roughly 0.75 pieces per 10 sq ft)
    const ceilingSections = Math.ceil((area * 0.8) / 12);
    // Fasteners / screws
    const screwsCount = Math.ceil(area * 3.5);

    return {
      sheetsNeeded,
      perimeterChannels,
      ceilingSections,
      screwsCount,
    };
  }, [area, length, width]);

  const handlePreset = (presetLength, presetWidth) => {
    setLength(presetLength);
    setWidth(presetWidth);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Janta Plaster & Hardware! I used your online ceiling calculator.\n\n` +
    `• Room Size: ${length} ft × ${width} ft (${area} sq ft)\n` +
    `• Ceiling Type: ${activeTypeObj.name}\n` +
    `• Service: ${includeLabour ? "Materials + Labour (Installation)" : "Materials Only"}\n` +
    `• Estimated Cost: ₹${minCost.toLocaleString("en-IN")} - ₹${maxCost.toLocaleString("en-IN")}\n\n` +
    `Please share the exact quotation and material availability in Mehrun, Jalgaon.`
  );

  return (
    <section className="calculator-section" id="calculator" data-reveal>
      <div className="calculator-header">
        <div className="badge-pill">
          <span className="dot-live" /> SMART ESTIMATOR
        </div>
        <h2>
          Calculate Your False Ceiling <span>Cost & Materials</span>
        </h2>
        <p className="section-subtitle">
          Get an instant realistic estimate for your room in Jalgaon. Adjust dimensions, choose your finish, and send it directly to WhatsApp for a finalized contractor deal.
        </p>
      </div>

      <div className="calculator-grid">
        {/* Left Column: Inputs */}
        <div className="calculator-controls-card">
          <div className="control-group">
            <label className="control-label">
              <span>Quick Preset Rooms:</span>
            </label>
            <div className="preset-buttons">
              {presets.map((p) => {
                const isSelected = length === p.length && width === p.width;
                return (
                  <button
                    key={p.label}
                    type="button"
                    className={`preset-btn ${isSelected ? "active" : ""}`}
                    onClick={() => handlePreset(p.length, p.width)}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="dimensions-row">
            <div className="dimension-box">
              <div className="dimension-header">
                <span>Room Length</span>
                <strong>{length} Feet</strong>
              </div>
              <input
                type="range"
                min="6"
                max="35"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="slider-input"
              />
              <div className="slider-limits">
                <span>6 ft</span>
                <span>35 ft</span>
              </div>
            </div>

            <div className="dimension-box">
              <div className="dimension-header">
                <span>Room Width</span>
                <strong>{width} Feet</strong>
              </div>
              <input
                type="range"
                min="6"
                max="30"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="slider-input"
              />
              <div className="slider-limits">
                <span>6 ft</span>
                <span>30 ft</span>
              </div>
            </div>
          </div>

          <div className="control-group">
            <label className="control-label">
              <span>Select Ceiling Material / Type:</span>
            </label>
            <div className="type-options-grid">
              {ceilingTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  className={`type-option-card ${selectedType === type.id ? "selected" : ""}`}
                  onClick={() => setSelectedType(type.id)}
                >
                  <div className="type-option-top">
                    <strong>{type.name}</strong>
                    <span className="type-badge">{type.badge}</span>
                  </div>
                  <p>{type.subtitle}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="control-group">
            <label className="control-label">
              <span>Service Scope:</span>
            </label>
            <div className="scope-toggle-group">
              <button
                type="button"
                className={`scope-btn ${includeLabour ? "active" : ""}`}
                onClick={() => setIncludeLabour(true)}
              >
                <span>Material + Installation</span>
                <small>Turnkey finish with professional karigars</small>
              </button>
              <button
                type="button"
                className={`scope-btn ${!includeLabour ? "active" : ""}`}
                onClick={() => setIncludeLabour(false)}
              >
                <span>Materials Only (Supply)</span>
                <small>Direct wholesale rates from Mehrun store</small>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Live Output & Breakdown */}
        <div className="calculator-result-card">
          <div className="result-card-top">
            <span className="result-label">ESTIMATED ROOM AREA</span>
            <div className="result-area-number">
              <strong>{area}</strong> <span>SQ. FT. ({length}′ × {width}′)</span>
            </div>
          </div>

          <div className="result-price-box">
            <div className="price-tag-sub">ESTIMATED INVESTMENT RANGE</div>
            <div className="price-tag-main">
              ₹{minCost.toLocaleString("en-IN")} – ₹{maxCost.toLocaleString("en-IN")}
            </div>
            <div className="price-tag-rate">
              Based on ~₹{baseRate}/sq.ft for {activeTypeObj.name} ({includeLabour ? "installed" : "supply only"})
            </div>
          </div>

          <div className="material-breakdown">
            <h4>Estimated Material Requirement:</h4>
            <div className="breakdown-grid">
              <div className="breakdown-item">
                <span className="bi-value">{materials.sheetsNeeded}</span>
                <span className="bi-name">Boards / Sheets (6×4 ft)</span>
              </div>
              <div className="breakdown-item">
                <span className="bi-value">~{materials.ceilingSections}</span>
                <span className="bi-name">GI Ceiling Sections (12 ft)</span>
              </div>
              <div className="breakdown-item">
                <span className="bi-value">~{materials.perimeterChannels}</span>
                <span className="bi-name">Perimeter Channels (12 ft)</span>
              </div>
              <div className="breakdown-item">
                <span className="bi-value">~{materials.screwsCount}</span>
                <span className="bi-name">Fasteners &amp; Screws</span>
              </div>
            </div>
          </div>

          <div className="result-actions">
            <a
              href={`https://wa.me/918624093996?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="button button-gold w-full text-center"
            >
              <span>Get Finalized Estimate &amp; Pricing</span>
              <ArrowIcon />
            </a>
            <p className="calculator-disclaimer">
              * Rates are indicative for Jalgaon city. Final pricing depends on design complexity, cove lights, and site conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
