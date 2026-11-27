"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneIcon } from "./site-components";

const links = [
  ["Home", "/"],
  ["Materials Catalog", "/materials"],
  ["Contractor Services", "/services"],
  ["Cost Estimator", "/#calculator"],
  ["Store Location & Hours", "/contact"],
];

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="mobile-menu-container">
      <button
        type="button"
        className="mobile-hamburger"
        aria-expanded={open}
        aria-label="Toggle navigation menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={`hamburger-bar ${open ? "bar-1-open" : ""}`} />
        <span className={`hamburger-bar ${open ? "bar-2-open" : ""}`} />
        <span className={`hamburger-bar ${open ? "bar-3-open" : ""}`} />
      </button>

      {open && (
        <div className="mobile-drawer-backdrop" onClick={() => setOpen(false)}>
          <div
            className="mobile-drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="mobile-drawer-header">
              <div className="drawer-brand">
                <strong>JANTA PLASTER</strong>
                <small>HARDWARE · JALGAON</small>
              </div>
              <button
                type="button"
                className="drawer-close"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="mobile-drawer-nav">
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className={`drawer-link ${pathname === href ? "active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                  <span className="drawer-arrow">→</span>
                </Link>
              ))}
            </nav>

            <div className="mobile-drawer-footer">
              <a
                href="https://wa.me/918624093996?text=Hello%20Janta%20Plaster%20%26%20Hardware%2C%20I%20have%20an%20enquiry."
                target="_blank"
                rel="noreferrer"
                className="drawer-btn drawer-btn-gold"
              >
                <span>Instant Project Quote</span>
                <span className="drawer-arrow">→</span>
              </a>
              <a href="tel:+918624093996" className="drawer-btn drawer-btn-call">
                <PhoneIcon /> Call +91 86240 93996
              </a>
              <p className="drawer-address">
                No. 6, Millat Nagar, near Reliance Petrol Pump, Mehrun, Jalgaon
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
