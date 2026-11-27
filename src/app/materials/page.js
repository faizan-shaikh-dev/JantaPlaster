import Image from "next/image";
import Link from "next/link";
import HomeMotion from "../home-motion";
import { ArrowIcon, PageHeading } from "../site-components";

export const metadata = {
  title: "Building & Ceiling Materials Catalog | Janta Plaster & Hardware Jalgaon",
  description:
    "Direct wholesale & retail supplier for Saint-Gobain Gyproc Gypsum Boards, Sakarni POP, Heavy GI Channels, PVC Marble Sheets & Louvers in Mehrun, Jalgaon.",
};

const catalog = [
  {
    id: "gypsum",
    image: "/images/mat-gypsum-board.jpg",
    title: "Saint-Gobain Gyproc Gypsum Systems",
    brand: "Saint-Gobain Gyproc · USG Boral",
    desc: "Genuine 12.5mm regular and moisture-resistant gypsum plasterboards for seamless false ceilings, room partitions, and acoustic isolation.",
    points: [
      "12.5mm Standard Boards (6×4 ft)",
      "Moisture Resistant (MR Green Boards for Bathrooms)",
      "Soundbloc Acoustic Isolation Boards",
      "Gyproc Ready-Mix Joint Compound & Fiber Tape",
    ],
  },
  {
    id: "pop",
    image: "/images/mat-pop-plaster.jpg",
    title: "Sakarni Superfine Plaster of Paris",
    brand: "Sakarni · JK Lakshmi · UltraTech",
    desc: "Grade-A superfine POP with high whiteness and uniform 15-minute setting time for handcrafted mouldings, rosettes, and wall punning.",
    points: [
      "Sakarni Pure White POP (25kg & 40kg Bags)",
      "JK Lakshmi Heavy Crack-Resistant Plaster",
      "Pre-moulded POP Ceiling Patti & Borders",
      "Chemical Plaster Bonding Agents",
    ],
  },
  {
    id: "framing",
    image: "/images/mat-gi-framing.jpg",
    title: "Heavy Galvanized GI Channels & Framing",
    brand: "JSW Steel Heavy Gauge (0.5mm)",
    desc: "Zinc-coated rustproof iron framing framework ensuring 100% horizontal flatness, anti-sagging load capacity, and decades of life.",
    points: [
      "Ceiling Sections (80×26×0.5mm · 12ft)",
      "Perimeter Channels (20×27×30mm)",
      "Intermediate Suspension Runners (15×45mm)",
      "Soffit Cleats, Connecting Clips & Rawl Plugs",
    ],
  },
  {
    id: "pvc",
    image: "/images/mat-pvc-marble.jpg",
    title: "High-Gloss UV PVC Marble Sheets",
    brand: "Euro Pratik · High Gloss UV Cladding",
    desc: "100% waterproof, washable, and termite-proof 3mm/4mm UV-coated Italian marble pattern sheets for modern TV backdrops and lobby walls.",
    points: [
      "Large 8×4 ft Seamless Marble Panels",
      "Scratch & Stain Resistant UV Gloss Layer",
      "Metallic Gold & Charcoal T-Profile Trims",
      "Fast 1-Day Paste Installation with Silicone",
    ],
  },
  {
    id: "louvers",
    image: "/images/mat-louvers.jpg",
    title: "WPC & Charcoal Fluted Louver Panels",
    brand: "Acoustic Fluted Louvers (9.5 ft)",
    desc: "Architectural vertical fluted wood-texture panels providing rich acoustic warmth and luxury depth to living rooms and bed headboards.",
    points: [
      "9.5 ft Height for Full Floor-to-Ceiling Fit",
      "Interlocking Tongue-and-Groove Jointing",
      "Woodgrain, Matte Charcoal & Bronze Finishes",
      "Termite Proof & Zero Maintenance Needed",
    ],
  },
  {
    id: "fasteners",
    image: "/images/mat-fasteners.jpg",
    title: "Drywall Screws, Fasteners & Jointing",
    brand: "Black Phosphate Drywall Screws",
    desc: "High-tensile self-tapping bugle head screws, self-adhesive fiber mesh crack tape, and premium joint finishers for perfect surfaces.",
    points: [
      "25mm & 35mm Black Phosphate Drywall Screws",
      "Self-Adhesive Fiber Mesh Tape (50m & 90m)",
      "Gyproc Joint Filler & Smooth Sanding Putty",
      "Heavy-Duty Metal Expansion Rawl Plugs",
    ],
  },
];

export default function MaterialsPage() {
  return (
    <main className="content-page">
      <HomeMotion>
        <section className="subpage-hero-modern" data-reveal>
          <PageHeading
            eyebrow="MATERIALS &amp; HARDWARE INVENTORY"
            title="Genuine Materials for"
            highlight="Enduring Ceilings."
            description="Explore our complete wholesale &amp; retail catalog of Saint-Gobain Gyproc boards, Sakarni POP, GI channels, UV marble sheets, and hardware stocked in Mehrun, Jalgaon."
          />
        </section>

        {/* MATERIALS CATALOG GRID WITH REAL IMAGES */}
        <section className="section-lux" data-reveal>
          <div className="section-head-split">
            <div>
              <div className="badge-pill">
                <span className="dot-live" /> READY STOCK IN MEHRUN
              </div>
              <h2 className="section-title">
                Explore Our <span>Product Range</span>
              </h2>
            </div>
            <p className="text-sm text-slate-500 max-w-xs">
              Immediate vehicle loading at our Mehrun store and prompt delivery across Jalgaon city.
            </p>
          </div>

          <div className="materials-grid-lux" data-stagger>
            {catalog.map((item, idx) => (
              <article key={item.id} className="material-card-lux">
                <div className="mcl-img-wrap">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="mcl-img"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="mcl-num-badge">0{idx + 1}</span>
                  <span className="mcl-tag-badge">{item.brand}</span>
                </div>

                <div className="mcl-body">
                  <h3 className="mcl-title">{item.title}</h3>
                  <p className="mcl-desc">{item.desc}</p>

                  <div className="mcl-specs">
                    {item.points.map((p) => (
                      <span key={p} className="spec-chip">
                        ✓ {p}
                      </span>
                    ))}
                  </div>

                  <div className="mcl-actions">
                    <a
                      href={`https://wa.me/918624093996?text=${encodeURIComponent(
                        `Hello Janta Plaster, I'd like to check current wholesale rate and stock for: ${item.title}.`
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

          {/* BOM UPLOAD BANNER */}
          <div className="bom-banner-lux" data-reveal>
            <div>
              <h3>Have an Architect Drawing or Contractor Material List?</h3>
              <p>Send your room dimensions or handwritten BOM list on WhatsApp for an instant discounted wholesale quote.</p>
            </div>
            <a
              href="https://wa.me/918624093996?text=Hello%20Janta%20Plaster%2C%20I%20have%20a%20material%20list%20for%20my%20ceiling%20project.%20Can%20you%20share%20a%20wholesale%20quote%3F"
              target="_blank"
              rel="noreferrer"
              className="button button-gold"
            >
              <span>Get Wholesale Price List</span>
              <ArrowIcon />
            </a>
          </div>
        </section>
      </HomeMotion>
    </main>
  );
}
