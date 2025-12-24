"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const sectionTransition = {
  duration: 0.8,
  ease: "easeOut",
};

export default function BrandPage() {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white text-slate-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-32 sm:py-40 bg-gradient-to-br from-amber-50 via-white to-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.08),transparent_50%)]" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
               duration: 0.8,
  ease: "easeOut",
            }}
            className="text-6xl sm:text-7xl md:text-8xl font-serif tracking-tight mb-8 bg-gradient-to-r from-slate-900 via-amber-900 to-slate-900 bg-clip-text text-transparent"
          >
            The ARIANA
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{  duration: 0.8,
  ease: "easeOut", delay: 0.1 }}
            className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto"
          >
            Ariana sets a new standard for premium, quality-driven real estate
            development that enhances life and business efficiency through
            exceptional design and enduring quality.
          </motion.p>
        </div>
      </section>

      {/* ================= OUR VISION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
               duration: 0.8,
  ease: "easeOut",
            }}
            className="text-4xl sm:text-5xl font-bold mb-8"
          >
            Our Vision
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{  duration: 0.8,
  ease: "easeOut", delay: 0.1 }}
            className="text-xl text-slate-700 leading-relaxed"
          >
            Setting the new standard for premium, quality-driven real estate
            development that enhances life and business efficiency through
            exceptional design and enduring quality.
          </motion.p>
        </div>
      </section>

      {/* ================= THE ARIANA PROMISE ================= */}
      <section className="py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8,
  ease: "easeOut",}}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              The Ariana Promise
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Quality & Craftsmanship",
                desc: "Emphasis on the meticulous finishing and attention to detail that define luxury properties.",
              },
              {
                title: "Design Excellence",
                desc: "Focus on contemporary, functional, and aesthetically pleasing architecture that adds value.",
              },
              {
                title: "Reliability & Trust",
                desc: "The assurance of delivery and ethical practice.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO DIFFERENTIATION ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
               duration: 0.8,
  ease: "easeOut",
            }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Portfolio Differentiation
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Excellence Across Three Pillars
            </p>
            <p className="text-lg text-slate-600 max-w-5xl mx-auto mt-6">
              We apply our exacting global standards to deliver distinctive value
              across India’s core real estate sectors, crafting spaces that set a
              new benchmark for quality, design, and function.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                sector: "High-End Residential",
                offering: "Luxury Apartments, Villas, and Integrated Townships",
                focus:
                  "Creating exclusive, beautifully designed living spaces with world-class amenities and uncompromising safety standards.",
              },
              {
                sector: "Premium Commercial",
                offering:
                  "Integrated Retail Centres, Mixed-Use Developments, and Lifestyle Hubs",
                focus:
                  "Developing vibrant, strategically located commercial destinations that maximize foot traffic and business success through smart planning and premium execution.",
              },
              {
                sector: "Grade-A Office",
                offering:
                  "Corporate Campuses, IT Parks, and High-Efficiency Office Towers",
                focus:
                  "Delivering cutting-edge, sustainable workspace solutions with superior infrastructure and technology designed for leading global and Indian enterprises.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-10 hover:shadow-2xl transition"
              >
                <h3 className="text-2xl font-semibold mb-3">
                  {item.sector}
                </h3>
                <p className="text-amber-700 font-medium mb-4">
                  {item.offering}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {item.focus}
                </p>

               <div className="mt-8 h-44 rounded-xl overflow-hidden relative group">
  {/* Image */}
  <Image
    src="/arianaHomePageImage1.jpg"
    alt="Ariana Landmark Project"
    fill
    priority
    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
  />

  {/* Optional overlay (luxury feel) */}
  <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-amber-900/20" />

  {/* Placeholder text (if needed) */}
  {/* <div className="absolute inset-0 flex items-center justify-center text-white text-sm opacity-0 group-hover:opacity-100 transition">
    View Project
  </div> */}
</div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BRAND CONFIDENCE CTA ================= */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
               duration: 0.8,
  ease: "easeOut",
            }}
            className="text-4xl sm:text-5xl font-serif mb-6"
          >
            Built to Endure. Designed to Lead.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{  duration: 0.8,
  ease: "easeOut", delay: 0.1 }}
            className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
          >
            Ariana developments are long-term assets — built on global execution
            standards, disciplined engineering, and an uncompromising commitment
            to quality.
          </motion.p>
        </div>
      </section>

    </main>
  );
}
