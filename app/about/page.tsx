"use client";

import { motion } from "framer-motion";
import { Building2, Award, Target, Users, TrendingUp, Globe, Shield, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProjectShowcase from "./projectShowcase/ProjectShowcase";
import MapProjects from "./projectShowcase/MapProjects";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function AboutPage() {
  const stats = [
    { value: "40+", label: "Years Experience" },
    { value: "50M+", label: "Sq Ft Delivered" },
    { value: "98%", label: "On-Time Delivery" },
    { value: "100%", label: "RERA Compliant" }
  ];

  const expertiseCards = [
    {
      icon: Building2,
      title: "Expertise in Large-Scale Infrastructure",
      desc: "We combine advanced engineering expertise with disciplined project management to deliver large-scale residential and commercial developments on time and built to last. Our focus on precision, quality control, and execution at scale ensures every project meets the highest standards of durability, performance, and long-term value."
    },
    {
      icon: Award,
      title: "Expanding into Integrated Development",
      desc: "The same engineering discipline and commitment to excellence now define the Ariana portfolio. We transform complex project expertise into refined, efficient, and beautifully crafted residential and commercial spaces—setting a higher standard for quality and execution across the market."
    },
    {
      icon: Target,
      title: "Project Portfolio (Current & Future)",
       subtitle:"The Future of Development: Our Pipeline",
      desc: "We are preparing to launch our first portfolio of premium residential, commercial, and office developments across key growth corridors in Bangalore. Our upcoming projects focus on integrated luxury residential communities and Grade-A office parks, designed with scale, sophistication, and long-term value in mind."
    },
    {
      icon: Shield,
      title: "Donayang India – Our Legacy (Group Introduction)",
       subtitle:"A Foundation Built on Global Strength",
      desc: "Ariana is supported by the financial strength, ethical governance, and global construction expertise of its Korean parent group, Nature E&T. With over four decades of experience in delivering large-scale projects worldwide, this strong foundation ensures financial stability, reliability, and uninterrupted execution for every Ariana development in India."
    }
  ];

  const highlights = [
    {
      icon: "✓",
      label: "RERA Compliant Operations"
    },
    {
      icon: "✓",
      label: "Local Leadership Team"
    },
    {
      icon: "✓",
      label: "Deep Market Understanding"
    },
    {
      icon: "✓",
      label: "Regional Expertise"
    }
  ];

  const globalStats = [
    { label: "Established", value: "2000s" },
    { label: "Global Projects", value: "50+" },
    { label: "Countries", value: "5+" },
    { label: "Workforce", value: "10,000+" }
  ];

  const projects = [
  {
    title: "Factory, Office, Lodging, Restaurant, Guard House, etc Work for Sehan India",
    location: "Anantapur, Andhra Pradesh, India",
    client: "KSH Automative Pvt.Ltd",
    date:"2018.06.21",
    duration: "2018.06.21 – 2019.02.28",
    area: "1.4+ Million Sq. Ft.",
    scope: [
      "Civil & Structural Works",
      "Steel Frame Installation",
      "High-Bay Roofing Systems",
      "MEP Coordination"
    ],
    images: ["/arianaHomePageImage1.jpg", "/arianaHomePageImage1.jpg"]
  },
  {
    title: "Integrated Logistics & Office Facility",
    location: "Tamil Nadu, India",
    client: "Multinational Logistics Company",
    duration: "2019 – 2020",
    area: "900,000+ Sq. Ft.",
    scope: [
      "Turnkey Construction",
      "Pre-Engineered Structures",
      "Interior Office Fit-outs"
    ],
    images: ["/arianaHomePageImage1.jpg", "/arianaHomePageImage1.jpg"]
  },
  {
    title: "Advanced Manufacturing Infrastructure",
    location: "Karnataka, India",
    client: "Global Technology Group",
    duration: "2020 – 2021",
    area: "1.1 Million Sq. Ft.",
    scope: [
      "Heavy Civil Engineering",
      "Quality-Controlled Execution",
      "Time-Critical Delivery"
    ],
    images: ["/arianaHomePageImage1.jpg", "/arianaHomePageImage1.jpg"]
  },
  {
    title: "Corporate Campus Development",
    location: "Maharashtra, India",
    client: "International Engineering Firm",
    duration: "2021 – 2022",
    area: "750,000+ Sq. Ft.",
    scope: [
      "Campus Planning",
      "High-Spec Office Blocks",
      "Sustainable Infrastructure"
    ],
    images: ["/arianaHomePageImage1.jpg", "/arianaHomePageImage1.jpg"]
  }
];


  return (
    <main className="bg-white text-slate-900 overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 sm:py-22 lg:py-30 bg-gradient-to-br from-amber-50 via-white to-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.08),transparent_50%)]" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-amber-100 text-amber-800 rounded-full text-xs sm:text-sm font-medium tracking-wide"
          >
            EST. 1985 — TRUSTED LEGACY
          </motion.div>
          
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8 bg-gradient-to-r from-slate-900 via-amber-900 to-slate-900 bg-clip-text text-transparent"
          >
            About Ariana
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-light px-4"
          >
            Built on proven engineering mastery, disciplined execution, and a deep understanding of India's evolving real estate landscape — delivering spaces defined by trust, quality, and longevity.
          </motion.p>
        </div>
      </section>

      {/* ================= DONAYANG INDIA - LOCAL EXPERTISE ================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-16"
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
                Donayang India
              </h2>
            </div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-amber-700 font-semibold">
              Rooted in India, Building for India
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  While leveraging global standards, Donayang India is deeply committed to the Indian market. Our local subsidiary operates with a clear understanding of the regulatory landscape including RERA compliance, market dynamics, and regional consumer needs.
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Our dedicated Indian leadership and local teams ensure that global expertise is translated into relevant, high-quality, and locally successful projects across key metropolitan areas.
                </p>
              </div>
              
              <motion.div 
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-amber-50 to-slate-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-amber-100"
              >
                <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-slate-900">Key Highlights</h4>
                <ul className="space-y-3 sm:space-y-4">
                  {highlights.map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-amber-600 text-lg sm:text-xl font-bold">{item.icon}</span>
                      <span className="text-slate-700 text-sm sm:text-base">{item.label}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* LEADERSHIP IMAGE PLACEHOLDER */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mb-16 sm:mb-20 lg:mb-24 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-amber-900" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 sm:p-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 backdrop-blur-sm border border-amber-400/30 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Leadership Team</h3>
              <p className="text-amber-200 text-center max-w-lg text-sm sm:text-base px-4">
                India Operations Map & Executive Leadership
              </p>
              <p className="text-slate-400 text-xs sm:text-sm mt-3 sm:mt-4">[Upload Leadership Image Here]</p>
            </div>
          </motion.div> */}

          {/* ================= OUR TRACK RECORD ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-16"
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
                Our Track Record
              </h2>
            </div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-amber-700 font-semibold">
              Mastery in Complex, High-Value Construction
            </h3>
            
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-5xl mb-8 sm:mb-12">
              Our dedication to quality and precision is not theoretical; it is proven. For years, Donayang India has been the preferred partner for complex, technically demanding, and time-critical projects for major global corporations in India. This history ensures every Ariana development is built on the highest standards of engineering and reliability.
            </p>
            
            {/* STATS GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gradient-to-br from-amber-50 to-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-amber-100 text-center group hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-amber-700 mb-2 group-hover:text-amber-600 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

<section className="py-20 bg-white">
  <div className="mx-auto">

    {/* Section Header */}
    <div className="mb-14">
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
        Selected Infrastructure Projects
      </h2>
      <p className="text-lg text-slate-600 max-w-3xl">
        A proven record of delivering complex, high-value developments with precision,
        scale, and uncompromising quality.
      </p>
    </div>

    <ProjectShowcase/>

  </div>
</section>

          

          {/* ================= EXPERTISE CARDS ================= */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-16 sm:mb-20 lg:mb-24">
            {expertiseCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="group bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-slate-100 hover:border-amber-200 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Icon */}
<div className="
  w-12 h-12 sm:w-16 sm:h-16
  bg-gradient-to-br from-amber-500 to-amber-600
  rounded-xl sm:rounded-2xl
  flex items-center justify-center
  mb-4 sm:mb-5
  shadow-lg
  transition-transform duration-300
  group-hover:scale-110 group-hover:rotate-3
">
  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
</div>

{/* Title */}
<h4 className="
  text-lg sm:text-xl md:text-2xl
  font-semibold
  text-slate-900
  tracking-tight
  mb-1 sm:mb-2
">
  {item.title}
</h4>

{/* Subtitle */}
<h6 className="
  text-sm sm:text-base
  font-medium
  text-amber-700
  uppercase
  tracking-wide
  mb-3 sm:mb-4
">
  {item.subtitle}
</h6>

{/* Description */}
<p className="
  text-sm sm:text-base
  text-slate-600
  leading-relaxed
  max-w-[42ch]
">
  {item.desc}
</p>

                </motion.div>
              );
            })}
          </div>

          <MapProjects/>

          {/* ================= FUTURE PORTFOLIO VISUALIZATION ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 sm:mb-20 lg:mb-24"
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                Future Portfolio
              </h3>
            </div>
            
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-5xl mb-8 sm:mb-10">
              Our upcoming developments showcase world-class architectural design and engineering excellence, setting new standards for premium living and commercial spaces in India's fastest-growing cities.
            </p>

            <div className="relative h-72 sm:h-96 md:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-950 to-slate-800" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTEsMTkxLDM2LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 sm:p-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 backdrop-blur-sm border-2 border-amber-400/40 group-hover:scale-110 transition-transform duration-500">
                  <Building2 className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400" />
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Architectural Renderings</h4>
                <p className="text-amber-200 text-center max-w-2xl text-base sm:text-lg px-4">
                  Premium Residential Communities & Grade-A Office Parks
                </p>
                {/* <p className="text-slate-400 text-xs sm:text-sm mt-3 sm:mt-4">Coming Soon to Bangalore & Beyond</p>
                <p className="text-slate-500 text-xs mt-2">[Upload Project Renderings Here]</p> */}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= NATURE E&T GROUP - LEGACY SECTION ================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 relative overflow-hidden">
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Nature E&T Group
              </h2>
            </div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-amber-400 font-semibold">
              A Foundation Built on Global Strength
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                  Ariana is backed by the financial strength, ethical governance, and global construction pedigree of our Korean parent group, Nature E&T. With a history spanning over 40 years, the Nature Group is synonymous with reliable, large-scale project delivery worldwide.
                </p>
                <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                  This robust backing ensures complete financial stability and project continuity for every Ariana development in India.
                </p>
              </div>
              
              <motion.div 
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10"
              >
                <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-amber-400">Global Presence</h4>
                <div className="space-y-3 sm:space-y-4">
                  {globalStats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex justify-between items-center pb-3 border-b border-white/10 last:border-0"
                    >
                      <span className="text-slate-300 text-sm sm:text-base">{stat.label}</span>
                      <span className="text-white font-bold text-base sm:text-lg">{stat.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

           {/* NATURE E&T HEADQUARTERS */}
<div className="relative h-64 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">

  {/* Background Image */}
  <Image
    src="/arianaNatureENT.jpeg"
    alt="Nature E&T Headquarters"
    fill
    priority
    className="
      object-cover
      transition-transform duration-700 ease-out
      group-hover:scale-110
    "
  />

  {/* Luxury Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-amber-900/60" />

  {/* Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 sm:p-8 text-center">

    {/* Icon */}
    <div
      className="
        w-20 h-20 sm:w-28 sm:h-28
        bg-gradient-to-br from-amber-500 to-amber-700
        rounded-full
        flex items-center justify-center
        mb-4 sm:mb-5
        shadow-2xl
        border border-white/20
        transition-transform duration-500
        group-hover:scale-110
      "
    >
      <Globe className="w-10 h-10 sm:w-14 sm:h-14 text-white" />
    </div>

    {/* Title */}
    <h4 className="text-xl sm:text-3xl font-semibold tracking-tight mb-1 sm:mb-2">
      Nature E&T
    </h4>

    {/* Subtitle */}
    <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-2xl leading-relaxed px-2">
      Headquarters: Seoul, South Korea · Global Footprint · 40+ Years of Excellence
    </p>

  </div>
</div>

          </motion.div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-900">
              Ready to Experience Excellence?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
              Discover how Ariana's commitment to quality and innovation can transform your vision into reality.
            </p>

<Link href="/brand">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="
      cursor-pointer
      bg-gradient-to-r from-amber-600 to-amber-700
      text-white
      px-8 sm:px-10
      py-3 sm:py-4
      rounded-full
      text-base sm:text-lg
      font-semibold
      hover:shadow-2xl
      transition-all duration-300
    "
  >
    Explore Our Projects
  </motion.button>
</Link>

          </motion.div>
        </div>
      </section>

    </main>
  );
}