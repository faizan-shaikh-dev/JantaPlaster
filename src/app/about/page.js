import Link from "next/link";
import HomeMotion from "../home-motion";
import { ArrowIcon, PageHeading, PinIcon, PhoneIcon } from "../site-components";

export const metadata = {
  title: "About Janta Plaster & Hardware | 28+ Years Serving Jalgaon Since 1996",
  description:
    "Learn about the history, values, and reputation of Janta Plaster & Hardware, located in Mehrun, Jalgaon. Trusted dealer of POP, Gypsum false ceilings, and building supplies.",
};

export default function AboutPage() {
  return (
    <main className="content-page">
      <HomeMotion>
        <section className="subpage-hero-modern" data-reveal>
          <PageHeading
            eyebrow="ABOUT JANTA PLASTER &amp; HARDWARE"
            title="Local Know-How &amp; Tested Materials."
            highlight="Serving Jalgaon Since 1996."
            description="For over 28 years, Janta Plaster &amp; Hardware has supplied contractors, interior decorators, and homeowners across Jalgaon with genuine plaster, false ceiling frameworks, and finishing supplies."
          />
        </section>

        {/* STORY & STATS SECTION */}
        <section className="about-story-section" data-reveal>
          <div className="about-story-grid">
            <div className="about-story-copy">
              <div className="badge-pill">
                <span className="dot-live" /> OUR HERITAGE
              </div>
              <h2>
                Rooted in Mehrun, Built on <span>Integrity &amp; Genuine Stock</span>
              </h2>

              <p className="lead-p">
                Founded in 1996 in Millat Nagar, Mehrun, Jalgaon, Janta Plaster &amp; Hardware started with a simple commitment: <strong>never compromise on the purity and strength of building materials.</strong>
              </p>

              <p>
                In the false ceiling and plaster trade, substandard chalk-mixed POP or light-gauge paper-thin GI channels lead to ceiling cracks, rust, and dangerous sagging within months. From day one, Janta Plaster made it a rule to stock only verified, tested brands like <strong>Saint-Gobain Gyproc</strong>, <strong>Sakarni Plaster of Paris</strong>, and heavy-gauge galvanized iron framing.
              </p>

              <p>
                Today, our store supplies hundreds of renovation and construction projects across Jalgaon, Bhusawal, and neighbouring towns. Alongside direct retail and wholesale supply, we coordinate seasoned on-site karigars who deliver pristine turnkey false ceilings, PVC paneling, and smooth wall finishes.
              </p>

              <div className="about-actions">
                <Link href="/materials" className="button button-gold">
                  Explore Materials Catalog <ArrowIcon />
                </Link>
                <Link href="/contact" className="button button-outline">
                  Store Directions <PinIcon />
                </Link>
              </div>
            </div>

            {/* Stats & Highlights Card */}
            <div className="about-stats-card">
              <div className="stats-box-item">
                <span className="sbi-num">1996</span>
                <strong>Established in Jalgaon</strong>
                <p>28+ continuous years serving local families and builders from Mehrun.</p>
              </div>

              <div className="stats-box-item">
                <span className="sbi-num">50,000+</span>
                <strong>POP &amp; Cement Bags Supplied</strong>
                <p>Consistent, fresh stock sourced directly from verified manufacturer depots.</p>
              </div>

              <div className="stats-box-item">
                <span className="sbi-num">500+</span>
                <strong>Ceilings &amp; Panels Executed</strong>
                <p>Residential living rooms, bedrooms, commercial clinics, and showrooms.</p>
              </div>

              <div className="stats-box-item">
                <span className="sbi-num">100%</span>
                <strong>Authentic Tested Material</strong>
                <p>Zero duplicate or counterfeit bags. Original weights and standard thickness.</p>
              </div>
            </div>
          </div>

          {/* VALUES GRID */}
          <div className="about-values-grid" data-reveal>
            <div className="value-card">
              <span className="pillar-num">01</span>
              <h3>Fair Wholesale Rates</h3>
              <p>Transparent pricing whether you need 2 bags of POP for a repair or 200 sheets of gypsum for a multi-storey project.</p>
            </div>

            <div className="value-card">
              <span className="pillar-num">02</span>
              <h3>Accurate Material Estimation</h3>
              <p>We help you calculate exact sheet, channel, and screw counts so you never overspend on unused surplus.</p>
            </div>

            <div className="value-card">
              <span className="pillar-num">03</span>
              <h3>Rapid Local Loading</h3>
              <p>Immediate vehicle loading at our Mehrun store and prompt delivery across Jalgaon city and surrounding areas.</p>
            </div>
          </div>
        </section>
      </HomeMotion>
    </main>
  );
}
