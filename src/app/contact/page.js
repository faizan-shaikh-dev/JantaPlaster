import HomeMotion from "../home-motion";
import { ArrowIcon, PageHeading, PinIcon, PhoneIcon } from "../site-components";
import ContactForm from "./contact-form";

export const metadata = {
  title: "Store Location & Contact | Janta Plaster & Hardware Jalgaon",
  description:
    "Visit Janta Plaster & Hardware near Reliance Petrol Pump in Millat Nagar, Mehrun, Jalgaon. Call +91 86240 93996 or message on WhatsApp for pricing, quotes, and directions.",
};

const storeFaqs = [
  {
    q: "Can I inspect physical material samples before placing an order?",
    a: "Yes, absolutely. Visit our Mehrun store to physically check genuine Saint-Gobain Gyproc boards, heavy GI framing sections, Sakarni POP whiteness, and modern UV marble / fluted louver sheets.",
  },
  {
    q: "Do you supply only materials or provide turnkey contractor installation?",
    a: "We do both. We are Jalgaon’s authorized wholesale & retail distributor for building materials, and we also provide experienced false ceiling karigars for turnkey execution with laser leveling.",
  },
  {
    q: "Do you deliver materials across Jalgaon city and neighboring towns?",
    a: "Yes. We arrange prompt tempo and truck dispatch across Jalgaon city, MIDC, Bhusawal, Chopda, and nearby construction sites directly from our Mehrun depot.",
  },
  {
    q: "How can I get an instant price quotation for my project?",
    a: "Simply call +91 86240 93996 or submit the quick inquiry form on this page with your room sizes or handwritten material list to receive a prompt WhatsApp quote.",
  },
];

export default function ContactPage() {
  return (
    <main className="content-page">
      <HomeMotion>
        {/* EXECUTIVE HERO */}
        <section className="subpage-hero-modern" data-reveal>
          <PageHeading
            eyebrow="STORE CONTACT &amp; LOCATION"
            title="We’re Right Here in"
            highlight="Mehrun, Jalgaon."
            description="Call, message on WhatsApp, or visit our store to inspect physical material samples, discuss false ceiling designs, or request an instant project estimate."
          />
        </section>

        {/* 2-COLUMN MAIN CONTACT & INQUIRY SECTION */}
        <section className="section-lux contact-main-section" data-reveal>
          <div className="contact-main-grid">
            {/* LEFT COLUMN: STORE INFO & DIRECT CHANNELS */}
            <div className="contact-details-col">
              {/* Card 1: Direct Call & WhatsApp Fast Line */}
              <div className="contact-info-card contact-card-highlight">
                <div className="card-top-status">
                  <div className="badge-pill">
                    <span className="dot-live" /> FASTEST RESPONSE
                  </div>
                  <span className="live-status-pill">
                    <span className="dot-live" /> Store Open Today
                  </span>
                </div>

                <h2>Direct Store Hotline</h2>
                <p>
                  Get instant answers on current stock, per-sheet gypsum rates, Sakarni POP bags, and contractor bookings.
                </p>

                <div className="contact-number-large">
                  <a href="tel:+918624093996" aria-label="Call store phone number">
                    <PhoneIcon />
                    <span>+91 86240 93996</span>
                  </a>
                </div>

                <div className="contact-direct-actions">
                  <a
                    href="https://wa.me/918624093996?text=Hello%20Janta%20Plaster%20%26%20Hardware%2C%20I%20want%20to%20enquire%20about%20materials%20and%20rates."
                    target="_blank"
                    rel="noreferrer"
                    className="button button-gold"
                  >
                    <span>Chat on WhatsApp</span>
                    <ArrowIcon />
                  </a>

                  <a href="tel:+918624093996" className="button button-outline-dark">
                    <PhoneIcon />
                    <span>Call Store</span>
                  </a>
                </div>

                <div className="contact-quick-notes">
                  <span>✓ Instant WhatsApp replies usually in 5–15 mins</span>
                  <span>✓ Send room sizes or material list for wholesale quote</span>
                </div>
              </div>

              {/* Card 2: Physical Depot Address & Operating Hours */}
              <div className="contact-info-card">
                <div className="badge-pill">
                  <span className="dot-live" /> PHYSICAL DEPOT
                </div>
                <h2>Janta Plaster &amp; Hardware</h2>

                <div className="contact-address-block">
                  <div className="loc-icon-bubble">
                    <PinIcon />
                  </div>
                  <div>
                    <strong>Store Landmark Address:</strong>
                    <address>
                      No. 6, Millat Nagar, Near Reliance Petrol Pump,<br />
                      Mehrun, Jalgaon, Maharashtra 425003
                    </address>
                  </div>
                </div>

                <div className="contact-timing-box">
                  <div className="timing-row">
                    <span>Monday – Saturday:</span>
                    <strong>8:30 AM – 8:00 PM</strong>
                  </div>
                  <div className="timing-row">
                    <span>Sunday:</span>
                    <strong>Open for Contractor Pickups</strong>
                  </div>
                </div>

                <div className="contact-directions-box">
                  <h4>Driving &amp; Loading Guidance:</h4>
                  <p>
                    Located 200m from the <strong>Reliance Petrol Pump in Mehrun</strong> on Millat Nagar main road. Ample parking &amp; wide road access for tempos, trucks, and autos for fast vehicle loading.
                  </p>
                </div>

                <div className="card-actions-row">
                  <a
                    href="https://maps.google.com/?q=Janta+Plaster+Hardware+Mehrun+Jalgaon"
                    target="_blank"
                    rel="noreferrer"
                    className="button button-outline w-full text-center"
                  >
                    <span>Get Google Maps Directions</span>
                    <ArrowIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: EXECUTIVE INQUIRY FORM */}
            <div className="contact-form-col">
              <ContactForm />
            </div>
          </div>

          {/* REAL INTERACTIVE GOOGLE MAP EMBED */}
          <div className="contact-map-wrapper" data-reveal>
            <div className="map-card-head">
              <div>
                <div className="badge-pill">
                  <span className="dot-live" /> LIVE STORE MAP
                </div>
                <h3>Store Location in Mehrun, Jalgaon</h3>
                <p className="text-sm text-slate-500">
                  Near Reliance Petrol Pump, Millat Nagar, Mehrun, Jalgaon 425003
                </p>
              </div>

              <div className="map-actions-group">
                <a
                  href="https://maps.google.com/?q=Reliance+Petrol+Pump+Mehrun+Jalgaon+Maharashtra"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-gold text-sm"
                >
                  <span>Open in Google Maps App</span>
                  <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="map-frame-box">
              <iframe
                src="https://maps.google.com/maps?q=Reliance+Petrol+Pump+Mehrun+Jalgaon+Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="440"
                style={{ border: 0, minHeight: "360px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Janta Plaster & Hardware Store Location Map Mehrun Jalgaon"
              />
            </div>
          </div>

          {/* FAQ SECTION FOR JALGAON BUYERS */}
          <div className="contact-faq-wrapper" data-reveal>
            <div className="section-head-center">
              <div className="badge-pill">
                <span className="dot-live" /> FREQUENTLY ASKED QUESTIONS
              </div>
              <h2 className="section-title">
                Everything You Need to <span>Know Before Visiting</span>
              </h2>
            </div>

            <div className="contact-faq-grid">
              {storeFaqs.map((faq) => (
                <div key={faq.q} className="faq-card">
                  <h4>{faq.q}</h4>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </HomeMotion>
    </main>
  );
}
