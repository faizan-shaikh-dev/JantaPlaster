export default function BrandsStrip() {
  const brands = [
    { name: "Saint-Gobain Gyproc", category: "Gypsum Boards & Channels" },
    { name: "Sakarni Plaster", category: "Superfine Plaster of Paris" },
    { name: "JK Lakshmi", category: "POP & Joint Compounds" },
    { name: "UltraTech", category: "Cement & Building Stock" },
    { name: "JSW Steel", category: "Galvanized GI Channels" },
    { name: "Euro Pratik", category: "UV Marble & Louver Sheets" },
  ];

  return (
    <section className="brands-strip-container" data-reveal>
      <div className="brands-strip-inner">
        <div className="brands-heading-row">
          <span className="dot-live" />
          <span className="brands-label">AUTHORIZED DEALER &amp; STOCKIST OF LEADING BRANDS IN JALGAON</span>
          <span className="dot-live" />
        </div>

        <div className="brands-grid">
          {brands.map((brand) => (
            <div key={brand.name} className="brand-chip">
              <span className="brand-dot" />
              <div className="brand-info">
                <strong>{brand.name}</strong>
                <small>{brand.category}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
