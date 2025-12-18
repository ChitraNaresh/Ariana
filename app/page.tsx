import Hero from "./components/home/Hero";
import Highlights from "./components/home/Highlights";
import WhyChoose from "./components/home/WhyChoose";
import Testimonials from "./components/home/Testimonials";
import CTA from "./components/home/CTA";

export default function HomePage() {
  return (
    <main className="bg-zinc-50 overflow-x-hidden">
      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= BRAND POSITIONING ================= */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif mb-6">
            A New Benchmark in Premium Real Estate
          </h2>

          <p className="text-lg sm:text-xl text-zinc-600 max-w-4xl mx-auto leading-relaxed">
            Ariana represents the convergence of global engineering excellence
            and thoughtful design — delivering residential, commercial, and
            office developments that elevate quality of life and business
            performance across India.
          </p>
        </div>
      </section>

      {/* ================= KEY PILLARS ================= */}
      <Highlights />

      {/* ================= TRUST & CREDIBILITY ================= */}
      <section className="py-20 sm:py-28 bg-zinc-900 text-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif mb-6">
            Built on Proven Execution
          </h2>

          <p className="text-lg sm:text-xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
            Donayang India brings decades of experience delivering complex,
            high-value, and time-critical projects for global corporations.
            This proven foundation ensures every Ariana development meets the
            highest standards of durability, precision, and reliability.
          </p>
        </div>
      </section>

      {/* ================= WHY ARIANA ================= */}
      <WhyChoose />

      {/* ================= SOCIAL PROOF ================= */}
      <Testimonials />

      {/* ================= FINAL CTA ================= */}
      <CTA />
    </main>
  );
}
