import Image from "next/image";
import Link from "next/link";
import HomeMotion from "./home-motion";
import { ArrowIcon, PinIcon, PhoneIcon } from "./site-components";
import CeilingCalculator from "./ceiling-calculator";
import BrandsStrip from "./brands-strip";
import GallerySection from "./gallery-section";
import InteractiveHeroCeiling from "./interactive-hero-ceiling";
import CeilingTransformation from "./ceiling-transformation";

const coreMaterials = [
  {
    num: "01",
    tag: "SUSPENDED GYPSUM",
    image: "/images/mat-gypsum-board.jpg",
    title: "Saint-Gobain Gyproc",
    subtitle: "Gypsum Plasterboards & Accessories",
    desc: "12.5mm standard & moisture-resistant boards for seamless false ceilings with concealed LED cove lighting.",
    specs: ["Fire & Sag Resistant", "Smooth Joint Finish", "Concealed LED Ready"],
    href: "/materials",
  },
  {
    num: "02",
    tag: "ARCHITECTURAL POP",
    image: "/images/mat-pop-plaster.jpg",
    title: "Sakarni Superfine POP",
    subtitle: "Grade A High-Whiteness Plaster",
    desc: "Pure formulation for handcrafted mouldings, ornate ceiling medallions, decorative cornices, and mirror-smooth wall punning.",
    specs: ["Pure White Finish", "Uniform 15-Min Setting", "Zero Hairline Cracks"],
    href: "/materials",
  },
  {
    num: "03",
    tag: "RUST-PROOF FRAMING",
    image: "/images/mat-gi-framing.jpg",
    title: "Galvanized GI Channels",
    subtitle: "Heavy Gauge Zinc-Coated Iron",
    desc: "Rigid suspension framework including ceiling sections, perimeter channels, intermediate runners, and anchor cleats.",
    specs: ["0.5mm Heavy Gauge", "Anti-Corrosion Galvanized", "Standard 12ft Lengths"],
    href: "/materials",
  },
  {
    num: "04",
    tag: "LUXURY SURFACES",
    image: "/images/mat-pvc-marble.jpg",
    title: "UV Marble & Louvers",
    subtitle: "High-Gloss & Fluted Cladding",
    desc: "100% waterproof and termite-proof panels for luxury TV backdrops, bed headboards, and moisture-prone interior walls.",
    specs: ["100% Waterproof", "Glossy Italian Marble Texture", "Zero Painting Needed"],
    href: "/materials",
  },
];

const pillars = [
  {
    num: "01",
    title: "100% Verified Stockist",
    desc: "Direct supply of original factory-sealed Saint-Gobain boards, Sakarni POP, and heavy GI channels. Zero duplicates.",
  },
  {
    num: "02",
    title: "Direct Depot Pricing",
    desc: "Wholesale and retail rates direct from our Mehrun warehouse, eliminating middleman markups for builders and homeowners.",
  },
  {
    num: "03",
    title: "Master Karigar Network",
    desc: "Seasoned false ceiling contractors equipped with 360° laser levels for millimeter-flat framing and concealed cove light troughs.",
  },
  {
    num: "04",
    title: "Rapid Local Loading",
    desc: "Immediate truck and tempo dispatch across Jalgaon city, Bhusawal, and nearby sites for zero construction downtime.",
  },
];

export default function Home() {
  return (
    <main className="home-page">
      <HomeMotion>
        {/* HERO SECTION WITH ARCHITECTURAL LIGHT ATMOSPHERE */}
        <section className="hero-light" id="top">
          <div className="hero-container">
            <div className="hero-copy" data-reveal>
              <div className="badge-pill">
                <span className="dot-live" /> CEILING &amp; BUILDING MATERIALS · EST. 1996
              </div>

              <h1 className="hero-headline">
                Crafting Ceilings of <span>Distinction &amp; Scale.</span>
              </h1>

              <p className="hero-summary">
                Jalgaon’s authorized dealer and contractor for <strong>Saint-Gobain Gyproc</strong>, <strong>Sakarni POP</strong>, <strong>Heavy GI Channels</strong> &amp; <strong>Luxury UV Marble Panels</strong>.
              </p>

              <div className="hero-actions">
                <a className="button button-gold" href="#calculator">
                  <span>Calculate Ceiling Cost</span>
                  <ArrowIcon />
                </a>

                <Link className="button button-outline" href="/materials">
                  <span>Explore Materials</span>
                  <ArrowIcon />
                </Link>

                <a className="button button-outline" href="tel:+918624093996">
                  <PhoneIcon />
                  <span>Call Store</span>
                </a>
              </div>

              {/* Architectural Contractor Highlights (Harmonious trust proof) */}
              <div className="hero-features-grid">
                <div className="hero-feature-item">
                  <span className="hfi-check">✓</span>
                  <div className="hfi-content">
                    <strong>360° Laser Calibrated</strong>
                    <span>Millimeter-flat framing &amp; zero sagging</span>
                  </div>
                </div>

                <div className="hero-feature-item">
                  <span className="hfi-check">✓</span>
                  <div className="hfi-content">
                    <strong>100% Genuine Brands</strong>
                    <span>Direct Saint-Gobain &amp; Sakarni stock</span>
                  </div>
                </div>

                <div className="hero-feature-item">
                  <span className="hfi-check">✓</span>
                  <div className="hfi-content">
                    <strong>Master Karigar Network</strong>
                    <span>Villas, living halls &amp; showrooms</span>
                  </div>
                </div>

                <div className="hero-feature-item">
                  <span className="hfi-check">✓</span>
                  <div className="hfi-content">
                    <strong>Mehrun Depot Loading</strong>
                    <span>Prompt vehicle dispatch across Jalgaon</span>
                  </div>
                </div>
              </div>

              {/* Minimal Trust Strip */}
              <div className="hero-stats-row">
                <div className="stat-pill">
                  <strong>28+</strong>
                  <span>Years in Jalgaon</span>
                </div>
                <div className="stat-sep" />
                <div className="stat-pill">
                  <strong>100%</strong>
                  <span>Tested Genuine Brands</span>
                </div>
                <div className="stat-sep" />
                <div className="stat-pill">
                  <strong>500+</strong>
                  <span>Ceilings Executed</span>
                </div>
              </div>
            </div>

            {/* Interactive Hero Visual Showcase */}
            <div className="hero-visual-frame" data-reveal>
              <InteractiveHeroCeiling />
            </div>
          </div>
        </section>

        {/* AUTHORIZED BRANDS STRIP */}
        <BrandsStrip />

        {/* INTERACTIVE BEFORE VS AFTER CEILING TRANSFORMATION */}
        <CeilingTransformation />

        {/* CLEAN, BALANCED MATERIALS GRID (100% Responsive, NO Awkward Offsets) */}
        <section className="section-lux" id="materials" data-reveal>
          <div className="section-head-split">
            <div>
              <div className="badge-pill">
                <span className="dot-live" /> INVENTORY SHOWCASE
              </div>
              <h2 className="section-title">
                Engineered for <span>Flawless Finishes</span>
              </h2>
            </div>
            <Link href="/materials" className="button button-outline">
              <span>View Complete Catalog</span>
              <ArrowIcon />
            </Link>
          </div>

          <div className="materials-clean-grid" data-stagger>
            {coreMaterials.map((mat, idx) => (
              <article key={mat.num} className="mat-clean-card">
                <div className="mat-clean-img-wrap">
                  <Image
                    src={mat.image}
                    alt={mat.title}
                    fill
                    className="mat-clean-img"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <span className="mat-badge-num">0{idx + 1}</span>
                  <span className="mat-badge-cat">{mat.tag}</span>
                </div>

                <div className="mat-clean-body">
                  <h3 className="mat-clean-title">{mat.title}</h3>
                  <span className="mat-clean-subtitle">{mat.subtitle}</span>
                  <p className="mat-clean-desc">{mat.desc}</p>

                  <div className="mat-clean-specs">
                    {mat.specs.map((s) => (
                      <span key={s} className="spec-chip">
                        ✓ {s}
                      </span>
                    ))}
                  </div>

                  <div className="mat-clean-action">
                    <a
                      href={`https://wa.me/918624093996?text=${encodeURIComponent(
                        `Hello Janta Plaster, please share rates for: ${mat.title} (${mat.subtitle}).`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mcl-quote-btn"
                    >
                      <span>Check Rates &amp; Stock</span>
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* INTERACTIVE CEILING COST ESTIMATOR */}
        <CeilingCalculator />

        {/* DESIGN INSPIRATIONS GALLERY WITH REAL PHOTOS */}
        <GallerySection />

        {/* WHY CHOOSE JANTA PLASTER */}
        <section className="section-lux why-section-lux" data-reveal>
          <div className="section-head-center">
            <div className="badge-pill">
              <span className="dot-live" /> OUR REPUTATION
            </div>
            <h2 className="section-title">
              Why Jalgaon Builders &amp; <span>Homeowners Choose JP</span>
            </h2>
            <p className="section-desc">
              Over 28 years of dependable wholesale supply and flawless on-site contractor craftsmanship in Mehrun, Jalgaon.
            </p>
          </div>

          <div className="pillars-grid" data-stagger>
            {pillars.map((p) => (
              <div key={p.title} className="pillar-card">
                <span className="pillar-num">{p.num}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TURNKEY CONTRACTOR PROCESS */}
        <section className="section-lux" id="services" data-reveal>
          <div className="process-banner-lux">
            <div className="process-head">
              <div className="badge-pill">
                <span className="dot-live" /> TURNKEY CONTRACTOR SERVICES
              </div>
              <h2>
                From Material Selection to <span>Laser Handover.</span>
              </h2>
              <p>
                Our master karigars execute your living room, bedroom, or showroom false ceilings with laser accuracy and on-time completion.
              </p>
            </div>

            <div className="steps-row-lux" data-stagger>
              <div className="step-card-lux">
                <span className="step-badge">STEP 01</span>
                <h3>Site Measurement</h3>
                <p>We visit your site in Jalgaon to take accurate room dimensions, ceiling drops, and lighting layout.</p>
              </div>

              <div className="step-card-lux">
                <span className="step-badge">STEP 02</span>
                <h3>Genuine Supply</h3>
                <p>Direct supply of 100% genuine Saint-Gobain boards, heavy GI framing, and Sakarni POP from our depot.</p>
              </div>

              <div className="step-card-lux">
                <span className="step-badge">STEP 03</span>
                <h3>Precision Handover</h3>
                <p>360° laser-level framing, concealed cove lighting drops, and sanded joints ready for luxury paint.</p>
              </div>
            </div>

            <div className="process-actions">
              <Link href="/services" className="button button-gold">
                <span>View Contractor Packages</span>
                <ArrowIcon />
              </Link>
              <Link href="/contact" className="button button-outline-dark">
                <span>Schedule Site Inspection</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        {/* STORE LOCATION & REAL GOOGLE MAP EMBED */}
        <section className="section-lux" id="contact" data-reveal>
          <div className="location-card-lux">
            <div className="loc-copy">
              <div className="badge-pill">
                <span className="dot-live" /> VISIT OUR STORE
              </div>
              <h2>
                Visit Janta Plaster<br />
                <span>in Mehrun, Jalgaon</span>
              </h2>
              <p>
                Inspect physical samples of Gyproc boards, Sakarni POP, GI channels, and high-gloss PVC marble sheets before ordering.
              </p>

              <div className="loc-meta">
                <div className="loc-meta-item">
                  <div className="loc-icon-bubble"><PinIcon /></div>
                  <div>
                    <strong>Store Address:</strong>
                    <address>
                      No. 6, Millat Nagar, Near Reliance Petrol Pump,<br />
                      Mehrun, Jalgaon, Maharashtra 425003
                    </address>
                  </div>
                </div>

                <div className="loc-meta-item">
                  <div className="loc-icon-bubble"><PhoneIcon /></div>
                  <div>
                    <strong>Direct Contact:</strong>
                    <p><a href="tel:+918624093996">+91 86240 93996</a> · Mon–Sat (8:30 AM – 8:00 PM)</p>
                  </div>
                </div>
              </div>

              <div className="loc-actions">
                <a
                  className="button button-gold"
                  href="https://maps.google.com/?q=Janta+Plaster+Hardware+Mehrun+Jalgaon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Google Maps Directions</span>
                  <ArrowIcon />
                </a>

                <a className="button button-outline" href="tel:+918624093996">
                  <PhoneIcon />
                  <span>Call Store</span>
                </a>
              </div>
            </div>

            <div className="loc-map-frame">
              <iframe
                src="https://maps.google.com/maps?q=Reliance+Petrol+Pump+Mehrun+Jalgaon+Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "360px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Janta Plaster Store Location Mehrun Jalgaon"
              />
            </div>
          </div>
        </section>
      </HomeMotion>
    </main>
  );
}
