import Image from "next/image";
import Link from "next/link";
import HomeMotion from "../home-motion";
import { ArrowIcon, PageHeading, PhoneIcon } from "../site-components";
import ServicesCarousel from "./services-carousel";

export const metadata = {
  title: "Contractor Services | Janta Plaster & Hardware Jalgaon",
  description:
    "Expert false ceiling installation (Gyproc & POP), cove lighting execution, PVC wall panel cladding, and smooth wall punning in Jalgaon.",
};

const serviceCards = [
  {
    no: "01",
    image: "/images/service-gypsum.jpg",
    title: "Saint-Gobain Gyproc False Ceilings",
    tag: "RESIDENTIAL & COMMERCIAL",
    desc: "Complete suspended ceiling execution using genuine Saint-Gobain Gyproc boards, 0.5mm heavy GI framing, and concealed LED cove troughs.",
    bullets: ["360° laser leveling for 100% flat surface", "Heavy GI 0.5mm intermediate & ceiling channels", "Concealed LED cove light pelmets", "Double-coat joint compound & sanding finish"],
  },
  {
    no: "02",
    image: "/images/service-pop.jpg",
    title: "Handcrafted Royal POP Mouldings",
    tag: "HERITAGE & ARCHITECTURAL",
    desc: "Traditional handcrafted Plaster of Paris ceiling designs, ornate floral center medallions, ceiling fan rosettes, and wall cornice borders.",
    bullets: ["Grade-A superfine Sakarni pure POP", "Suspended metal wire mesh framework", "Intricate floral medallions & cornice borders", "Mirror-smooth surface ready for luxury paint"],
  },
  {
    no: "03",
    image: "/images/service-pvc.jpg",
    title: "UV Marble & Fluted Louver Cladding",
    tag: "FEATURE WALLS & TV UNITS",
    desc: "Luxury wall panel installation for TV backdrops, lobby entrances, and bedroom feature walls. 100% waterproof, termite-proof, and washable.",
    bullets: ["High-gloss UV marble sheet fixing with silicone", "WPC & PVC interlocking fluted louvers", "Concealed slots for TV wiring & LED profiles", "1-Day clean installation with zero paint dust"],
  },
  {
    no: "04",
    image: "/images/service-plaster.jpg",
    title: "Interior Plastering & Mirror Punning",
    tag: "SMOOTH WALL FINISHES",
    desc: "High-standard wall plastering and smooth POP punning over brickwork, plaster, or concrete for glass-smooth paint finishes.",
    bullets: ["Bonding agent application for permanent grip", "Plumb-line corner and right-angle leveling", "Zero pinholes mirror finish (2mm–5mm)", "Reduces paint consumption by up to 25%"],
  },
];

export default function ServicesPage() {
  return (
    <main className="content-page">
      <HomeMotion>
        {/* HERO SECTION WITH 3-SECOND AUTO SLIDING IMAGES */}
        <section className="services-hero-section" data-reveal>
          <div className="services-hero-header">
            <PageHeading
              eyebrow="ON-SITE CONTRACTOR SERVICES"
              title="Turnkey False Ceiling Craftsmanship"
              highlight="in Jalgaon."
              description="From single-room gypsum drops to complete villas and commercial showrooms, our skilled karigars deliver precision ceilings with genuine materials."
            />
          </div>

          {/* 3-Second Automated Slider */}
          <div className="services-carousel-wrapper">
            <ServicesCarousel />
          </div>
        </section>

        {/* DETAILED SERVICES CARDS WITH IMAGES */}
        <section className="section-lux" data-reveal>
          <div className="section-head-center">
            <div className="badge-pill">
              <span className="dot-live" /> SPECIALIZED SERVICES
            </div>
            <h2 className="section-title">
              Specialized Installation <span>Packages</span>
            </h2>
            <p className="section-desc">
              Every project is executed by seasoned craftsmen using genuine materials sourced directly from our Mehrun depot.
            </p>
          </div>

          <div className="services-grid-lux" data-stagger>
            {serviceCards.map((svc) => (
              <article key={svc.no} className="service-card-lux">
                <div className="scl-img-wrap">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="scl-img"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span className="scl-tag-badge">{svc.tag}</span>
                  <span className="scl-no-badge">{svc.no}</span>
                </div>

                <div className="scl-body">
                  <h3 className="scl-title">{svc.title}</h3>
                  <p className="scl-desc">{svc.desc}</p>

                  <div className="scl-specs">
                    {svc.bullets.map((b) => (
                      <span key={b} className="spec-chip">
                        ✓ {b}
                      </span>
                    ))}
                  </div>

                  <div className="scl-action">
                    <a
                      href={`https://wa.me/918624093996?text=${encodeURIComponent(
                        `Hello Janta Plaster, I want to book an on-site visit or estimate for: ${svc.title}.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-gold text-sm w-full text-center"
                    >
                      <span>Book Free Site Measurement</span>
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CALL TO ACTION BANNER */}
          <div className="service-cta-banner-lux" data-reveal>
            <div>
              <h3>Planning a Ceiling or Wall Project in Jalgaon?</h3>
              <p>Call our contractor supervisor to schedule an on-site measurement and get an accurate quote.</p>
            </div>
            <div className="scb-actions">
              <a href="tel:+918624093996" className="button button-gold">
                <PhoneIcon /> Call: +91 86240 93996
              </a>
              <Link href="/contact" className="button button-outline-dark">
                Store Location &amp; Directions <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      </HomeMotion>
    </main>
  );
}
