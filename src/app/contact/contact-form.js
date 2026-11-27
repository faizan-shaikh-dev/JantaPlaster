"use client";

import { useState } from "react";
import { ArrowIcon } from "../site-components";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    locality: "",
    requirement: "Gypsum False Ceiling Materials (Gyproc & GI)",
    projectSize: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, locality, requirement, projectSize, notes } = formData;

    const message =
      `Hello Janta Plaster & Hardware!\n` +
      `I am requesting a project estimate / material inquiry.\n\n` +
      `• Name: ${name || "Not specified"}\n` +
      `• Mobile: ${phone || "Not specified"}\n` +
      `• Location/Area: ${locality || "Jalgaon"}\n` +
      `• Requirement: ${requirement}\n` +
      (projectSize ? `• Approx Area/Room: ${projectSize}\n` : "") +
      (notes ? `• Details/Notes: ${notes}\n` : "") +
      `\nPlease share rates and availability from your Mehrun store.`;

    window.open(
      `https://wa.me/918624093996?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="inquiry-form-card" data-reveal>
      <div className="ifc-header">
        <div className="badge-pill">
          <span className="dot-live" /> FAST PROJECT ESTIMATE
        </div>
        <h3 className="ifc-title">Request a Quick Quotation or Site Visit</h3>
        <p className="ifc-subtitle">
          Share your room dimensions or required materials. Our store executives in Mehrun will respond directly on WhatsApp with current rates and stock availability.
        </p>
      </div>

      <form className="ifc-form" onSubmit={handleSubmit}>
        <div className="ifc-row">
          <div className="ifc-field">
            <label htmlFor="form-name">Your Full Name *</label>
            <input
              id="form-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rajesh Patil"
              required
              className="ifc-input"
            />
          </div>

          <div className="ifc-field">
            <label htmlFor="form-phone">Mobile / WhatsApp Number *</label>
            <input
              id="form-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              required
              className="ifc-input"
            />
          </div>
        </div>

        <div className="ifc-row">
          <div className="ifc-field">
            <label htmlFor="form-locality">Site Location / Area in Jalgaon</label>
            <input
              id="form-locality"
              type="text"
              name="locality"
              value={formData.locality}
              onChange={handleChange}
              placeholder="e.g. Mehrun, MIDC, Ring Road, Bhusawal"
              className="ifc-input"
            />
          </div>

          <div className="ifc-field">
            <label htmlFor="form-projectSize">Approximate Room / Ceiling Size</label>
            <input
              id="form-projectSize"
              type="text"
              name="projectSize"
              value={formData.projectSize}
              onChange={handleChange}
              placeholder="e.g. 12 × 15 ft / 2BHK / 400 sq ft"
              className="ifc-input"
            />
          </div>
        </div>

        <div className="ifc-field">
          <label htmlFor="form-requirement">Material or Service Needed *</label>
          <select
            id="form-requirement"
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            className="ifc-input ifc-select"
            required
          >
            <option value="Gypsum False Ceiling Materials (Gyproc & GI)">
              Saint-Gobain Gyproc Boards &amp; Heavy GI Channels
            </option>
            <option value="Sakarni POP Bags & Handcrafted Mouldings">
              Sakarni Pure POP Bags &amp; Decorative Ceiling Mouldings
            </option>
            <option value="UV PVC Marble Sheets & Fluted Louvers">
              UV Marble Cladding Sheets &amp; Fluted WPC Louvers
            </option>
            <option value="Turnkey False Ceiling Contractor Execution">
              Turnkey False Ceiling Installation (Materials + Master Karigars)
            </option>
            <option value="Wholesale Hardware, Screws & Joint Finishers">
              Drywall Screws, Fiber Tape &amp; Joint Finishers (Wholesale)
            </option>
            <option value="Full Project Material Estimate / BOM Quote">
              Complete Architect / Contractor BOM Drawing Quote
            </option>
          </select>
        </div>

        <div className="ifc-field">
          <label htmlFor="form-notes">Additional Project Details / Specific Queries (Optional)</label>
          <textarea
            id="form-notes"
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            placeholder="Tell us more about your design preference, cove light troughs, or delivery timeline..."
            className="ifc-textarea"
          />
        </div>

        <button type="submit" className="button button-gold ifc-submit">
          <span>Send Instant WhatsApp Inquiry</span>
          <ArrowIcon />
        </button>

        <div className="ifc-trust-strip">
          <span>✓ Direct WhatsApp response in 5–15 mins</span>
          <span>✓ Zero obligation free estimate</span>
          <span>✓ Genuine Mehrun depot stock</span>
        </div>
      </form>
    </div>
  );
}
