"use client";

import { motion } from "framer-motion";
import { Award, Building2, Shield, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function BrandPage() {
  return (
    <main className="bg-white text-slate-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-slate-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(148,163,184,0.05),transparent_60%)]" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10 py-20">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-amber-100/50 backdrop-blur-sm text-amber-900 text-sm font-medium rounded-full border border-amber-200">
              Premium Real Estate Development
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-6 sm:mb-8 bg-gradient-to-r from-slate-900 via-amber-900 to-slate-800 bg-clip-text text-transparent leading-tight"
          >
            The ARIANA
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto px-4"
          >
            Setting a new standard for premium, quality-driven real estate development that enhances life and business efficiency through exceptional design and enduring quality.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all hover:shadow-xl">
              Explore Projects
            </button>
            <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-medium border-2 border-slate-900 hover:bg-slate-50 transition-all">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= OUR VISION ================= */}
      <section className="py-16 sm:py-20 md:py-28 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
              Our Vision
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-700 leading-relaxed max-w-4xl mx-auto">
              Setting the new standard for premium, quality-driven real estate development that enhances life and business efficiency through exceptional design and enduring quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= THE ARIANA PROMISE ================= */}
      <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              The Ariana Promise
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Three pillars of excellence that define every Ariana development
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              {
                icon: Award,
                title: "Quality & Craftsmanship",
                desc: "Emphasis on the meticulous finishing and attention to detail that define luxury properties.",
              },
              {
                icon: Sparkles,
                title: "Design Excellence",
                desc: "Focus on contemporary, functional, and aesthetically pleasing architecture that adds value.",
              },
              {
                icon: Shield,
                title: "Reliability & Trust",
                desc: "The assurance of delivery and ethical practice.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-2xl hover:border-amber-200 transition-all duration-500"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-amber-700" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO DIFFERENTIATION ================= */}
      <section className="py-16 sm:py-20 md:py-28 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Portfolio Differentiation
            </h2>
            <p className="text-xl sm:text-2xl text-slate-700 font-medium mb-4 sm:mb-6">
              Excellence Across Three Pillars
            </p>
            <p className="text-base sm:text-lg text-slate-600 max-w-5xl mx-auto leading-relaxed">
              We apply our exacting global standards to deliver distinctive value across India's core real estate sectors, crafting spaces that set a new benchmark for quality, design, and function.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              {
                sector: "High-End Residential",
                offering: "Luxury Apartments, Villas, and Integrated Townships",
                focus: "Creating exclusive, beautifully designed living spaces with world-class amenities and uncompromising safety standards.",
                gradient: "from-amber-50 to-orange-50",
              },
              {
                sector: "Premium Commercial",
                offering: "Integrated Retail Centres, Mixed-Use Developments, and Lifestyle Hubs",
                focus: "Developing vibrant, strategically located commercial destinations that maximize foot traffic and business success through smart planning and premium execution.",
                gradient: "from-blue-50 to-indigo-50",
              },
              {
                sector: "Grade-A Office",
                offering: "Corporate Campuses, IT Parks, and High-Efficiency Office Towers",
                focus: "Delivering cutting-edge, sustainable workspace solutions with superior infrastructure and technology designed for leading global and Indian enterprises.",
                gradient: "from-slate-50 to-gray-50",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group relative bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:shadow-2xl hover:border-slate-300 transition-all duration-500"
              >
                <div className="mb-6 sm:mb-8">
                  <Building2 className="w-10 h-10 sm:w-12 sm:h-12 text-amber-700 mb-4" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-slate-900">
                    {item.sector}
                  </h3>
                  <p className="text-amber-700 font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                    {item.offering}
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {item.focus}
                  </p>
                </div>

                <div className="relative h-44 sm:h-48 md:h-52 rounded-xl overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-slate-900/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Building2 className="w-12 h-12 sm:w-16 sm:h-16 text-white/60 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-white/80 text-xs sm:text-sm font-medium">Premium Development</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BRAND CONFIDENCE CTA ================= */}
      <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4 sm:mb-6 leading-tight">
              Built to Endure. Designed to Lead.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
              Ariana developments are long-term assets — built on global execution standards, disciplined engineering, and an uncompromising commitment to quality.
            </p>
            <button className="px-8 sm:px-10 py-3 sm:py-4 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-700 transition-all hover:shadow-2xl text-sm sm:text-base">
              Discover Our Legacy
            </button>
          </motion.div>
        </div>
      </section>

    </main>
  );
}