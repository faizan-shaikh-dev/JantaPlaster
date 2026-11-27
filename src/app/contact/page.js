import HomeMotion from "../home-motion";
import { ArrowIcon, PageHeading, PinIcon, PhoneIcon } from "../site-components";
import ContactForm from "./contact-form";

export const metadata = {
  title: "Store Location & Contact | Janta Plaster & Hardware Jalgaon",
  description:
    "Visit Janta Plaster & Hardware near Reliance Petrol Pump in Millat Nagar, Mehrun, Jalgaon. Call +91 86240 93996 or message on WhatsApp for pricing, quotes, and directions.",
};

export default function ContactPage() {
  return (
    <main className="content-page">
      <HomeMotion>
        <section className="subpage-hero-modern" data-reveal>
          <PageHeading
            eyebrow="STORE CONTACT &amp; LOCATION"
            title="We’re Right Here in"
            highlight="Mehrun, Jalgaon."
            description="Call, message on WhatsApp, or stop by our store to check physical material samples, discuss ceiling designs, or request an instant project estimate."
          />
        </section>

        {/* CONTACT GRID */}
        <section className="contact-full-section" data-reveal>
          <div className="contact-full-grid">
            {/* Card 1: Direct Call & WhatsApp */}
            <div className="contact-info-card contact-card-highlight">
              <div className="badge-pill">
                <span className="dot-live" /> FASTEST RESPONSE
              </div>
              <h2>Call or WhatsApp Our Store</h2>
              <p>
                Get instant answers on current stock, per-sheet gypsum rates, POP bags, and contractor bookings.
              </p>

              <div className="contact-number-large">
                <a href="tel:+918624093996">
                  <PhoneIcon /> +91 86240 93996
                </a>
              </div>

              <div className="contact-direct-actions">
                <a
                  href="https://wa.me/918624093996?text=Hello%20Janta%20Plaster%20%26%20Hardware%2C%20I%20want%20to%20enquire%20about%20materials%20and%20rates."
                  target="_blank"
                  rel="noreferrer"
                  className="button button-gold"
                >
                  <span>Chat With Store Executive</span>
                  <ArrowIcon />
                </a>

                <a href="mailto:haqique.pasha143@gmail.com" className="contact-email-link">
                  haqique.pasha143@gmail.com
                </a>
              </div>

              <div className="contact-quick-notes">
                <span>Direct WhatsApp replies usually in 5–15 minutes</span>
                <span>Send room sizes or material list for instant quote</span>
              </div>
            </div>

            {/* Card 2: Physical Store Location */}
            <div className="contact-info-card">
              <div className="contact-icon-bubble">
                <PinIcon />
              </div>
              <div className="badge-pill">
                <span className="dot-live" /> STORE DETAILS
              </div>
              <h2>Janta Plaster &amp; Hardware</h2>

              <address className="contact-address-box">
                <strong>Store Landmark Address:</strong>
                No. 6, Millat Nagar, Near Reliance Petrol Pump,<br />
                Mehrun, Jalgaon, Maharashtra 425003
              </address>

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
                <h4>Driving Landmark Guide:</h4>
                <p>
                  Located just 200 meters from the <strong>Reliance Petrol Pump in Mehrun</strong>, along Millat Nagar main road. Ample parking space available in front of the store for autos, pickup tempos, and trucks for loading.
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Janta+Plaster+Hardware+Mehrun+Jalgaon"
                target="_blank"
                rel="noreferrer"
                className="button button-outline-dark w-full text-center"
              >
                Open in Google Maps App <ArrowIcon />
              </a>
            </div>
          </div>

          {/* REAL INTERACTIVE GOOGLE MAP EMBED (Requested by user) */}
          <div className="contact-map-wrapper" data-reveal>
            <div className="map-card-head">
              <div>
                <div className="badge-pill">
                  <span className="dot-live" /> LIVE LOCATION MAP
                </div>
                <h3>Store Location in Mehrun, Jalgaon</h3>
              </div>
              <a
                href="https://maps.google.com/?q=Janta+Plaster+Hardware+Mehrun+Jalgaon"
                target="_blank"
                rel="noreferrer"
                className="button button-gold text-sm"
              >
                Get Directions <ArrowIcon />
              </a>
            </div>

            <div className="map-frame-box">
              <iframe
                src="https://maps.google.com/maps?q=Reliance+Petrol+Pump+Mehrun+Jalgaon+Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="420"
                style={{ border: 0, borderRadius: "16px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Janta Plaster & Hardware Store Location Map"
              />
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <ContactForm />
        </section>
      </HomeMotion>
    </main>
  );
}
