"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Which is better for Jalgaon's climate: Gypsum Ceiling or POP Ceiling?",
    a: "Both have great durability! Gypsum board false ceilings (Saint-Gobain) are faster to install (takes 2-3 days for a bedroom), lightweight, and provide a perfectly seamless modern finish with concealed LED cove lighting. Handcrafted POP ceiling work is ideal for decorative cornices, floral medallions, and heavy architectural mouldings. Many homeowners in Jalgaon use a hybrid: Gypsum false ceiling with POP decorative borders.",
  },
  {
    q: "Do you only sell materials or do you also provide contractor installation services?",
    a: "We provide both! If you already have your own carpenter or contractor, you can buy genuine materials directly at wholesale & retail rates from our store in Mehrun. If you need complete turnkey execution, our team of skilled karigars will handle the entire framing, board fixing, jointing, and finishing.",
  },
  {
    q: "How much time does it take to complete false ceiling for a standard room?",
    a: "For a standard 10x12 or 12x15 bedroom, a gypsum false ceiling installation typically takes 2 to 3 days (framing + boarding + tape jointing and smooth putty finish).",
  },
  {
    q: "Are PVC Wall Panels and Marble Sheets 100% waterproof?",
    a: "Yes! High-density PVC fluted panels and UV-coated PVC marble sheets are 100% waterproof, termite-proof, and washable. They are an excellent solution for damp walls, bathrooms, kitchen backsplashes, and luxury TV backdrops where traditional paint or wood veneers spoil.",
  },
  {
    q: "Do you deliver materials to construction sites in Jalgaon and surrounding areas?",
    a: "Yes, we arrange prompt auto/pickup delivery of gypsum sheets, GI channels, POP bags, and hardware across Jalgaon city (Mehrun, MIDC, Ring Road, Ramanand Nagar, etc.) and nearby areas.",
  },
  {
    q: "How can I get an exact price quote for my house or shop?",
    a: "Simply measure the length and width of your rooms, or take a picture of your floor plan, and message it to us on WhatsApp at +91 86240 93996. We will calculate the exact material requirement and quote within minutes!",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="faq-section" id="faq" data-reveal>
      <div className="faq-header">
        <div className="badge-pill">
          <span className="sparkle">?</span> HAVE QUESTIONS?
        </div>
        <h2>
          Frequently Asked <span>Questions</span>
        </h2>
        <p className="section-subtitle">
          Everything you need to know about false ceiling materials, installation process, and ordering from Janta Plaster &amp; Hardware in Jalgaon.
        </p>
      </div>

      <div className="faq-accordion">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.q} className={`faq-card ${isOpen ? "open" : ""}`}>
              <button
                type="button"
                className="faq-question-btn"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <span className="faq-icon">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
