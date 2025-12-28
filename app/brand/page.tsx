"use client";

import { motion } from "framer-motion";
import { Award, Building2, ChevronDown, Shield, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

     <section className="relative min-h-screen pb-20 sm:pb-28 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 px-3 sm:px-6 lg:px-8 overflow-hidden">

        {/* Background Effects */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.15),transparent_50%)]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(148,163,184,0.1),transparent_50%)]"
        />

        {/* Floating Shapes
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 sm:top-20 left-[8%] sm:left-[10%] w-24 sm:w-32 h-24 sm:h-32 border-2 border-amber-500/20 rounded-full hidden sm:block backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-24 sm:bottom-32 right-[10%] sm:right-[15%] w-20 sm:w-28 h-20 sm:h-28 border-2 border-amber-500/20 rounded-lg hidden sm:block backdrop-blur-sm"
        /> */}

        {/* Floating Particles
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="absolute w-1 h-1 bg-amber-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))} */}

        {/* ================= HERO CONTENT ================= */}
        <motion.div 
          // style={{ opacity: heroOpacity, scale: heroScale }}
          className="max-w-7xl mx-auto text-center relative z-10 w-full px-3"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            className="mb-4 sm:mb-6"
          >
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-amber-500/10 backdrop-blur-xl text-amber-400 text-xs sm:text-sm font-bold rounded-full border border-amber-500/30 shadow-lg shadow-amber-500/20"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Premium Real Estate Development
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif tracking-tight mb-4 sm:mb-6 leading-tight"
          >
            <motion.span
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent bg-[length:200%_auto]"
            >
              The ARIANA
            </motion.span>
          </motion.h1>

          {/* Vision Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8 sm:mb-10 space-y-3 sm:space-y-4"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent max-w-xs sm:max-w-md mx-auto"
            />
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Our Vision
            </h2>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto px-3">
              Setting the new standard for premium, quality-driven real estate development that enhances life and business efficiency through exceptional design and enduring quality.
            </p>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent max-w-xs sm:max-w-md mx-auto"
            />
          </motion.div>

          {/* CTA Buttons */}
<motion.div
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.8 }}
  className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-3"
>
  {/* ================= EXPLORE PROJECTS ================= */}
  <Link href="/about" className="w-full sm:w-auto">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full px-8 sm:px-12 py-3.5 sm:py-4
                 bg-gradient-to-r from-amber-500 to-amber-600
                 text-white text-sm sm:text-base rounded-full font-bold
                 shadow-xl shadow-amber-500/40
                 cursor-pointer"
    >
      <span className="flex items-center justify-center gap-2">
        Explore Projects
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </span>
    </motion.button>
  </Link>

  {/* ================= CONTACT US ================= */}
  <Link href="/contact" className="w-full sm:w-auto">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full px-8 sm:px-12 py-3.5 sm:py-4
                 bg-white/10 backdrop-blur-xl
                 text-white text-sm sm:text-base rounded-full font-bold
                 border-2 border-white/30
                 cursor-pointer"
    >
      Contact Us
    </motion.button>
  </Link>
</motion.div>


        </motion.div>

        {/* ================= SCROLL INDICATOR ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-amber-400/70"
          >
            <span className="text-xs font-medium hidden sm:block">Scroll</span>
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
        </motion.div>
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
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&h=800&fit=crop",
      accentColor: "amber"
    },
    {
      sector: "Premium Commercial",
      offering: "Integrated Retail Centres, Mixed-Use Developments, and Lifestyle Hubs",
      focus: "Developing vibrant, strategically located commercial destinations that maximize foot traffic and business success through smart planning and premium execution.",
      gradient: "from-blue-50 to-indigo-50",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716",
      accentColor: "blue"
    },
    {
      sector: "Grade-A Office",
      offering: "Corporate Campuses, IT Parks, and High-Efficiency Office Towers",
      focus: "Delivering cutting-edge, sustainable workspace solutions with superior infrastructure and technology designed for leading global and Indian enterprises.",
      gradient: "from-slate-50 to-gray-50",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&h=800&fit=crop",
      accentColor: "slate"
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
                      {/* <Building2 className="w-12 h-12 sm:w-16 sm:h-16 text-white/60 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-white/80 text-xs sm:text-sm font-medium">Premium Development</p> */}
                       <Image
    src={item.image}
    alt={item.sector}
    fill
    priority={false}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="
      object-cover
      transition-transform duration-700 ease-out
      group-hover:scale-105
    "
  />
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
           <Link href="/partnerships">
            <button className="px-8 sm:px-10 py-3 sm:py-4 cursor-pointer bg-amber-600 text-white rounded-full font-medium hover:bg-amber-700 transition-all hover:shadow-2xl text-sm sm:text-base">
              Discover Our Legacy
            </button></Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}