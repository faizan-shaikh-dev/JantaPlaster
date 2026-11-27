"use client";

import { useEffect, useState, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./site-components";

const links = [
  { label: "Home", href: "/" },
  { label: "Materials Catalog", href: "/materials" },
  { label: "Contractor Services", href: "/services" },
  { label: "Cost Estimator", href: "/#calculator" },
  { label: "About Janta Plaster", href: "/about" },
  { label: "Store Location & Contact", href: "/contact" },
];

const emptySubscribe = () => () => {};

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const pathname = usePathname();

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  // Lock body scroll and set active class when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("menu-drawer-active");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-drawer-active");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-drawer-active");
    };
  }, [open]);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && open) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, handleClose]);

  // Drawer portal content attached directly to document.body
  const drawerContent = open ? (
    <div
      className="mobile-drawer-backdrop"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Drawer"
    >
      <div
        className="mobile-drawer"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="mobile-drawer-header">
          <Link href="/" className="drawer-brand" onClick={handleClose}>
            <Image
              src="/brand/jp-mark.svg"
              alt="Janta Plaster Logo"
              width={34}
              height={34}
            />
            <div>
              <strong>JANTA PLASTER</strong>
              <small>HARDWARE · JALGAON</small>
            </div>
          </Link>

          <button
            type="button"
            className="drawer-close"
            onClick={handleClose}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>

        {/* Live Store Status Strip */}
        <div className="drawer-status-bar">
          <span className="dot-live" />
          <span>Store Open: Mon–Sat (8:30 AM – 8:00 PM)</span>
        </div>

        {/* Navigation Links (Scrollable Middle Section) */}
        <nav className="mobile-drawer-nav" aria-label="Mobile Navigation Links">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`drawer-link ${isActive ? "active" : ""}`}
                onClick={handleClose}
              >
                <span>{link.label}</span>
                <span className="drawer-arrow">→</span>
              </Link>
            );
          })}
        </nav>

        {/* Drawer Footer with Fast CTAs & Address */}
        <div className="mobile-drawer-footer">
          <a
            href="https://wa.me/918624093996?text=Hello%20Janta%20Plaster%20%26%20Hardware%2C%20I%20have%20an%20enquiry%20regarding%20materials%20and%20rates."
            target="_blank"
            rel="noreferrer"
            className="drawer-btn drawer-btn-gold"
          >
            <WhatsAppIcon />
            <span>Instant WhatsApp Quote</span>
            <ArrowIcon />
          </a>

          <a href="tel:+918624093996" className="drawer-btn drawer-btn-call">
            <PhoneIcon />
            <span>Call: +91 86240 93996</span>
          </a>

          <div className="drawer-address-card">
            <div className="dac-head">
              <PinIcon />
              <strong>Mehrun Store Depot:</strong>
            </div>
            <p>
              No. 6, Millat Nagar, near Reliance Petrol Pump, Mehrun, Jalgaon
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div className="mobile-menu-container">
      {/* Hamburger Trigger Button (Min 44px for ideal touch target) */}
      <button
        type="button"
        className={`mobile-hamburger ${open ? "is-active" : ""}`}
        aria-expanded={open}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="hamburger-box">
          <span className={`hamburger-bar bar-1 ${open ? "bar-1-open" : ""}`} />
          <span className={`hamburger-bar bar-2 ${open ? "bar-2-open" : ""}`} />
          <span className={`hamburger-bar bar-3 ${open ? "bar-3-open" : ""}`} />
        </span>
      </button>

      {/* Render Drawer to document.body via Portal to break out of sticky header containing blocks */}
      {mounted && drawerContent ? createPortal(drawerContent, document.body) : null}
    </div>
  );
}
