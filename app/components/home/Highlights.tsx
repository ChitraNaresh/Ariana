export default function Highlights() {
  const items = [
    {
      title: "The Vision of Ariana",
      desc: "Setting the New Standard for Indian Real Estate.",
      link: "/brand#vision",
    },
    {
      title: "The Mark of Precision",
      desc: "Beyond Standards: Korean Engineering Prowess.",
      link: "/about#track-record",
    },
    {
      title: "Integrated Portfolio",
      desc: "Residential, Commercial, and Office Developments.",
      link: "/brand#portfolio",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 grid gap-8 md:grid-cols-3">
        {items.map((item, i) => (
          <a
            key={i}
            href={item.link}
            className="rounded-2xl border border-zinc-200 bg-white p-10 transition hover:-translate-y-2 hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-zinc-900">
              {item.title}
            </h3>
            <p className="text-zinc-600 mb-6">{item.desc}</p>
            <span className="font-medium text-amber-700">
              Learn more →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
