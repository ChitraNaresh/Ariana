export default function WhyChoose() {
  const items = [
    {
      title: "Financial Stability",
      desc: "Backed by 40+ years of global construction heritage.",
    },
    {
      title: "Quality Assurance",
      desc: "Korean engineering standards with meticulous execution.",
    },
    {
      title: "On-Time Delivery",
      desc: "Proven ability to deliver complex projects on schedule.",
    },
    {
      title: "Global Expertise",
      desc: "International standards adapted to the Indian market.",
    },
  ];

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">
          Why Choose Ariana?
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-zinc-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
