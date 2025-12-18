export default function PartnershipsPage() {
  return (
    <main className="bg-zinc-50">
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            Partnerships
          </h1>
          <h2 className="text-3xl text-amber-700 mb-8">
            Partnering with Ariana: Your Asset, Elevated
          </h2>
          <p className="text-xl text-zinc-600 max-w-4xl mx-auto mb-20 leading-relaxed">
            Ariana invites landowners and strategic partners to unlock maximum
            asset value through premium positioning, proven execution, and
            long-term reliability.
          </p>

          {/* Value Proposition */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left mb-24">
            {[
              {
                title: "Zero Risk, Maximum Return",
                desc: "Ariana assumes development and execution risk, allowing landowners to maximize returns without capital investment.",
              },
              {
                title: "Precision Execution",
                desc: "Infrastructure-grade project management ensures quality, cost control, and timely delivery.",
              },
              {
                title: "Financial Assurance",
                desc: "Backed by Nature E&T, ensuring strong financial stability and guaranteed completion.",
              },
              {
                title: "Multi-Asset Expertise",
                desc: "Residential, commercial, and office developments under a single premium brand.",
              },
              {
                title: "Premium Brand Valuation",
                desc: "Ariana’s positioning commands higher market value and stronger revenue share.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Models */}
          <div className="bg-white rounded-2xl p-14 shadow-sm">
            <h3 className="text-3xl font-semibold mb-8">
              Flexible Partnership Models
            </h3>
            <ul className="space-y-5 text-lg text-zinc-600 text-left max-w-3xl mx-auto">
              <li>• Joint Development Agreement (JDA) / Joint Venture (JV)</li>
              <li>• Strategic Investment Opportunities</li>
              <li>• Build-to-Suit & Development Management</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
