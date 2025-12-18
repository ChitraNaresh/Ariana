export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* ================= INTRO ================= */}
      <section className="py-24 sm:py-32">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h1 className="text-5xl sm:text-6xl font-serif mb-10">
            About Us
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto">
            Ariana is built on a foundation of proven engineering expertise,
            disciplined execution, and a deep understanding of the Indian
            real estate landscape.
          </p>
        </div>
      </section>

      {/* ================= LOCAL EXPERTISE ================= */}
      <section className="pb-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-amber-700 mb-4">
            Donayang India — Local Expertise
          </h2>
          <h3 className="text-2xl mb-6">
            Rooted in India, Building for India
          </h3>
          <p className="text-lg text-zinc-700 leading-relaxed mb-20">
            Donayang India operates with a deep understanding of Indian
            regulations, market dynamics, and consumer expectations. This
            localized insight allows global construction standards to be
            translated into relevant, high-quality, and market-successful
            developments across India.
          </p>

          {/* ================= TRACK RECORD ================= */}
          <h2 className="text-3xl font-semibold text-amber-700 mb-4">
            Our Track Record
          </h2>
          <h3 className="text-2xl mb-6">
            Mastery in Complex, High-Value Construction
          </h3>
          <p className="text-lg text-zinc-700 leading-relaxed mb-14">
            For years, Donayang India has been a trusted execution partner for
            major global corporations, delivering technically demanding,
            large-scale, and time-critical projects. This proven history ensures
            that every Ariana development is built to the highest standards of
            engineering reliability and durability.
          </p>

          {/* ================= EXPERTISE BLOCKS ================= */}
          <div className="grid gap-10 md:grid-cols-2 mb-20">
            <div className="bg-zinc-50 p-10 rounded-2xl">
              <h4 className="text-xl font-semibold mb-4">
                Large-Scale Infrastructure Expertise
              </h4>
              <p className="text-zinc-600 leading-relaxed">
                Precision engineering, rigorous quality control, and strict
                adherence to timelines form the backbone of our execution
                philosophy — ensuring unmatched construction quality.
              </p>
            </div>

            <div className="bg-zinc-50 p-10 rounded-2xl">
              <h4 className="text-xl font-semibold mb-4">
                Expansion into Integrated Development
              </h4>
              <p className="text-zinc-600 leading-relaxed">
                The same engineering rigor is now applied to premium residential
                and commercial developments under the Ariana brand, raising
                quality benchmarks across sectors.
              </p>
            </div>
          </div>

          {/* ================= LEGACY ================= */}
          <div className="bg-zinc-900 text-white p-12 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-amber-400">
              Donayang Group — Our Legacy
            </h3>
            <p className="text-zinc-300 leading-relaxed">
              Ariana is backed by the financial strength and ethical governance
              of Nature E&T Group, a global construction leader with over 40
              years of experience delivering reliable, large-scale projects
              worldwide. This backing ensures long-term stability and project
              continuity for every Ariana development.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
