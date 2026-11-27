import Image from "next/image";
import Link from "next/link";
import MobileNavigation from "./mobile-navigation";

const navLinks = [
  ["Home", "/"],
  ["Materials", "/materials"],
  ["Contractor Services", "/services"],
  ["Cost Estimator", "/#calculator"],
  ["Store Location", "/contact"],
];

export function ArrowIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function PinIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function PhoneIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 6.7C8.84 6.7 8.52 6.77 8.24 7.07C7.97 7.38 7.21 8.09 7.21 9.54C7.21 11 8.27 12.4 8.42 12.6C8.57 12.8 10.5 15.77 13.45 17.04C14.15 17.34 14.7 17.53 15.12 17.66C15.82 17.89 16.46 17.85 16.96 17.78C17.52 17.7 18.68 17.08 18.92 16.4C19.16 15.72 19.16 15.14 19.09 15.02C19.02 14.9 18.82 14.83 18.52 14.68C18.23 14.53 16.74 13.8 16.46 13.7C16.19 13.6 15.99 13.55 15.79 13.85C15.59 14.15 15.02 14.83 14.85 15.02C14.68 15.22 14.5 15.24 14.21 15.1C13.91 14.95 12.98 14.64 11.87 13.65C11.01 12.88 10.43 11.93 10.26 11.64C10.09 11.35 10.24 11.19 10.39 11.04C10.52 10.91 10.68 10.7 10.83 10.53C10.98 10.35 11.03 10.23 11.13 10.03C11.23 9.83 11.18 9.66 11.1 9.51C11.03 9.36 10.43 7.89 10.18 7.3C9.94 6.72 9.69 6.8 9.51 6.79C9.34 6.78 9.14 6.7 8.94 6.7H9.04Z" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Janta Plaster and Hardware home">
          <Image
            src="/brand/jp-mark.svg"
            alt="Janta Plaster Logo"
            width={42}
            height={42}
            priority
            className="brand-logo-img"
          />
          <div className="brand-text">
            <strong>JANTA PLASTER</strong>
            <small>&amp; HARDWARE · JALGAON</small>
          </div>
        </Link>

        <nav className="main-nav" aria-label="Primary navigation">
          {navLinks.map(([label, href]) => (
            <Link href={href} key={href} className="nav-item">
              {label}
            </Link>
          ))}
        </nav>

        {/* Clean, luxury CTA buttons without the harsh green button */}
        <div className="header-cta-group">
          <a className="header-call-btn" href="tel:+918624093996" aria-label="Call store">
            <PhoneIcon />
            <span>+91 86240 93996</span>
          </a>

          <Link href="/#calculator" className="header-quote-btn">
            <span>Calculate Cost</span>
            <ArrowIcon />
          </Link>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand-box">
          <Link className="footer-brand" href="/">
            <Image src="/brand/jp-mark.svg" alt="" width={38} height={38} />
            <div>
              <strong>JANTA PLASTER</strong>
              <small>&amp; HARDWARE · JALGAON</small>
            </div>
          </Link>
          <p className="footer-tagline">
            Jalgaon’s trusted dealer and contractor for Saint-Gobain Gyproc, Sakarni POP, Heavy GI Framing &amp; Luxury PVC Marble Sheets since 1996.
          </p>
          <div className="footer-badge">
            <span className="dot-live" /> Serving Jalgaon For Over 28 Years
          </div>
        </div>

        <div className="footer-nav-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/materials">Materials Catalog</Link></li>
            <li><Link href="/services">Contractor Services</Link></li>
            <li><Link href="/#calculator">Cost Estimator</Link></li>
            <li><Link href="/contact">Store Location &amp; Directions</Link></li>
          </ul>
        </div>

        <div className="footer-contact-col">
          <h4>Store Address &amp; Hours</h4>
          <p className="footer-address">
            No. 6, Millat Nagar, Near Reliance Petrol Pump,<br />
            Mehrun, Jalgaon, Maharashtra 425003
          </p>
          <p className="footer-time">Monday – Saturday: 8:30 AM – 8:00 PM</p>
          <div className="footer-cta-row">
            <a href="tel:+918624093996" className="footer-link-btn">
              <PhoneIcon /> Call Store
            </a>
            <a
              href="https://maps.google.com/?q=Janta+Plaster+Hardware+Mehrun+Jalgaon"
              target="_blank"
              rel="noreferrer"
              className="footer-link-btn"
            >
              <PinIcon /> Google Maps
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>© 2026 Janta Plaster &amp; Hardware. All rights reserved.</span>
          <span>Millat Nagar, Mehrun · Jalgaon, Maharashtra</span>
        </div>
      </div>
    </footer>
  );
}

// Floating screen WhatsApp widget (appears beautifully at bottom right of screen!)
export function WhatsAppDock() {
  return (
    <>
      {/* Floating On-Screen WhatsApp Button */}
      <aside className="floating-whatsapp-widget" aria-label="WhatsApp quick chat">
        <a
          href="https://wa.me/918624093996?text=Hello%20Janta%20Plaster%20%26%20Hardware%2C%20I%20want%20to%20enquire%20about%20ceiling%20materials%20and%20rates."
          target="_blank"
          rel="noreferrer"
          className="f-wa-bubble"
          aria-label="Chat on WhatsApp"
        >
          <span className="f-wa-pulse" />
          <WhatsAppIcon />
          <span className="f-wa-text">Chat on WhatsApp</span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Bar (Call + WhatsApp) */}
      <nav className="mobile-dock" aria-label="Quick mobile contact">
        <a className="dock-item dock-call" href="tel:+918624093996">
          <PhoneIcon />
          <span>Call Store</span>
        </a>

        <a
          className="dock-item dock-gold"
          href="https://wa.me/918624093996?text=Hello%20Janta%20Plaster%20%26%20Hardware%2C%20I%20want%20to%20enquire%20about%20materials%20and%20rates."
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </a>
      </nav>
    </>
  );
}

export function PageHeading({ eyebrow, title, highlight, description }) {
  return (
    <div className="page-heading-block" data-reveal>
      <div className="badge-pill">
        <span className="dot-live" /> {eyebrow}
      </div>
      <h1>
        {title} <span>{highlight}</span>
      </h1>
      {description && <p className="page-heading-description">{description}</p>}
    </div>
  );
}
