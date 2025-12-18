export default function BrandPage() {
  return (
    <main className="bg-zinc-50 overflow-x-hidden">
      {/* ================= HERO / BRAND STATEMENT ================= */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif mb-8 tracking-tight">
            The ARIANA
          </h1>

          <p className="text-xl sm:text-2xl text-zinc-600 leading-relaxed max-w-4xl mx-auto">
            Ariana sets a new benchmark for premium, quality-driven real estate
            development — enhancing both life and business efficiency through
            exceptional design, engineering precision, and enduring value.
          </p>
        </div>
      </section>

      {/* ================= BRAND ESSENCE ================= */}
      <section className="py-20 sm:py-28 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Quality & Craftsmanship",
                desc: "Every Ariana development reflects meticulous attention to detail, superior materials, and finishing standards that define long-term value and luxury living.",
              },
              {
                title: "Design Excellence",
                desc: "Contemporary, functional architecture shaped by global best practices, ensuring aesthetic appeal, usability, and future-ready spaces.",
              },
              {
                title: "Reliability & Trust",
                desc: "Built on ethical governance, delivery assurance, and the financial strength of a globally respected construction group.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-10 border border-zinc-200 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-2xl font-semibold mb-4 text-zinc-900">
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO PILLARS ================= */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-serif mb-6">
              Excellence Across Three Pillars
            </h2>
            <p className="text-lg sm:text-xl text-zinc-600 max-w-4xl mx-auto">
              Ariana applies the same global engineering standards across India’s
              most critical real estate segments — delivering differentiated,
              high-value developments.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                sector: "High-End Residential",
                offering:
                  "Luxury Apartments, Villas, and Integrated Townships",
                focus:
                  "Curated living environments that prioritize safety, comfort, community, and long-term value through superior planning and amenities.",
              },
              {
                sector: "Premium Commercial",
                offering:
                  "Retail Centres, Mixed-Use Developments, Lifestyle Hubs",
                focus:
                  "Strategically positioned commercial destinations designed to enhance footfall, brand visibility, and sustainable business growth.",
              },
              {
                sector: "Grade-A Office",
                offering:
                  "Corporate Campuses, IT Parks, High-Efficiency Office Towers",
                focus:
                  "Future-ready workspaces combining operational efficiency, sustainability, and modern infrastructure for global enterprises.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative rounded-2xl border border-zinc-200 bg-zinc-50 p-10 hover:bg-white hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-semibold mb-4 text-zinc-900">
                  {item.sector}
                </h3>
                <p className="text-amber-700 font-medium mb-4">
                  {item.offering}
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  {item.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BRAND CONFIDENCE CTA ================= */}
      <section className="py-20 sm:py-28 bg-zinc-900 text-white">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif mb-6">
            Built to Endure. Designed to Lead.
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Ariana developments are not just projects — they are long-term
            assets, built on proven execution, financial stability, and a
            commitment to uncompromising quality.
          </p>
        </div>
      </section>
    </main>
  );
}
