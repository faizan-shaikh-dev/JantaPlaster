"use client";

import { ArrowIcon } from "../site-components";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const req = form.requirement.value;
    const msg = encodeURIComponent(
      `Hello Janta Plaster! My name is ${name} (${phone}). I need help with: ${req}.`
    );
    window.open(`https://wa.me/918624093996?text=${msg}`, "_blank");
  };

  return (
    <div className="inquiry-form-card" data-reveal>
      <div className="ifc-header">
        <div className="badge-pill">
          <span className="sparkle">✉️</span> DIRECT INQUIRY
        </div>
        <h3>Send a Quick Inquiry or Request a Call Back</h3>
        <p>
          Leave your phone number and project details. We will reach out to help you with materials or contractor measurements.
        </p>
      </div>

      <form className="ifc-form" onSubmit={handleSubmit}>
        <div className="ifc-row">
          <input
            type="text"
            name="name"
            placeholder="Your Name / Aapka Naam"
            required
            className="ifc-input"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number / Mobile No."
            required
            className="ifc-input"
          />
        </div>

        <div className="ifc-row">
          <select name="requirement" className="ifc-input ifc-select" required defaultValue="">
            <option value="" disabled>Select Requirement / Zarurat</option>
            <option value="Gypsum False Ceiling Materials">Gypsum False Ceiling Materials (Gyproc/GI)</option>
            <option value="POP Bags & Decorative Mouldings">Plaster of Paris (POP) Bags &amp; Mouldings</option>
            <option value="PVC Wall Panels & UV Marble Sheets">PVC Wall Panels &amp; UV Marble Sheets</option>
            <option value="Contractor Installation Service">Contractor Installation Service (Labour + Material)</option>
            <option value="Wholesale Hardware & Screws">Wholesale Hardware &amp; Drywall Screws</option>
          </select>
        </div>

        <button type="submit" className="button button-gold ifc-submit">
          Submit on WhatsApp <ArrowIcon />
        </button>
      </form>
    </div>
  );
}
