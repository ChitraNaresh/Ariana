"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, Building2, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

export default function HomePage() {
  const router = useRouter();
  const highlights = [
    {
      icon: Award,
      title: "The Vision of Ariana",
      subtitle: "Setting the New Standard for Indian Real Estate.",
      link: "/brand",
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50",
    },
    {
      icon: Building2,
      title: "The Mark of Precision",
      subtitle: "Beyond Standards: Korean Engineering Prowess.",
      link: "/about",
      gradient: "from-slate-600 to-slate-800",
      bgGradient: "from-slate-50 to-slate-100",
    },
    {
      icon: TrendingUp,
      title: "Integrated Portfolio",
      subtitle: "Invest in Diversity: Residential, Commercial, and Office.",
      link: "/brand",
      gradient: "from-amber-600 to-amber-800",
      bgGradient: "from-amber-50 to-yellow-50",
    },
  ];

  return (
    <main className="bg-white text-slate-900 overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-amber-900/85 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80')",
            }}
          />
          {/* Animated gradient overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent z-20"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center">
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-6 sm:mb-8 text-white leading-tight">
              <span className="block">ARIANA:</span>
              <span className="block mt-2 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 bg-clip-text text-transparent">
                Global Quality.
              </span>
              <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Distinctive Living & Commerce.
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-200 leading-relaxed max-w-4xl mx-auto mb-12 sm:mb-16 px-4"
          >
            Precision Engineering Meets Visionary Design.
            <span className="block mt-2 text-amber-300 font-medium">
              Powered by Donayang India.
            </span>
          </motion.p>


<motion.div
  variants={fadeIn}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.8, delay: 0.4 }}
  className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
>
  {/* Explore Projects → /about */}
  <Link href="/about" className="w-full sm:w-auto">
    <button
      className="
        group
        w-full sm:w-auto
        px-8 sm:px-10
        py-4 sm:py-5
        bg-gradient-to-r from-amber-500 to-amber-600
        text-white
        text-base sm:text-lg
        font-semibold
        rounded-full
        cursor-pointer
        hover:from-amber-600 hover:to-amber-700
        transition-all duration-300
        shadow-2xl hover:shadow-amber-500/50
        hover:scale-105
      "
    >
      Explore Projects
      <ArrowRight
        className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
        size={20}
      />
    </button>
  </Link>

  {/* Contact Us → /contact */}
  <Link href="/contact" className="w-full sm:w-auto">
    <button
      className="
        w-full sm:w-auto
        px-8 sm:px-10
        py-4 sm:py-5
        bg-white/10 backdrop-blur-md
        text-white
        text-base sm:text-lg
        font-semibold
        rounded-full
        cursor-pointer
        border-2 border-white/30
        hover:bg-white/20
        transition-all duration-300
      "
    >
      Contact Us
    </button>
  </Link>
</motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/70 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ================= KEY HIGHLIGHTS SECTION ================= */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,191,36,0.05),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 via-amber-900 to-slate-900 bg-clip-text text-transparent">
              Key Highlights
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Discover what sets Ariana apart in the world of premium real estate development
            </p>
          </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
      {highlights.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            onClick={() => router.push(item.link)}
            className="group relative bg-white rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-200"
          >
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            {/* Content */}
            <div className="relative p-6 sm:p-8 lg:p-10 h-full flex flex-col">
              {/* Icon */}
              <div
                className={`mb-6 sm:mb-8 inline-flex p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 self-start`}
              >
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-slate-900 group-hover:text-slate-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8">
                  {item.subtitle}
                </p>
              </div>

              {/* CTA */}
              <Link
                href={item.link}
                onClick={(e) => e.stopPropagation()}
                className="relative inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors text-sm sm:text-base group/cta"
              >
                <span>Learn More</span>
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover/cta:translate-x-2 transition-transform duration-300" />

                {/* Underline */}
                <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-current scale-x-0 group-hover/cta:scale-x-100 origin-left transition-transform duration-300" />
              </Link>

              {/* Decorative Corner */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`}
              />
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
            </div>
          </motion.div>
        );
      })}
    </div>

        </div>
      </section>

      {/* ================= CONFIDENCE CTA ================= */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white relative overflow-hidden">
        {/* Animated background patterns */}
        <motion.div
          className="absolute inset-0 opacity-10"
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

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 sm:mb-8 leading-tight"
          >
            Where Vision Meets
            <span className="block mt-2 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 bg-clip-text text-transparent">
              Exceptional Execution
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10 sm:mb-12 px-4"
          >
            Experience the perfect synthesis of global standards, innovative design, and uncompromising quality that defines every Ariana development.
          </motion.p>

          <motion.button
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-base sm:text-lg font-bold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 hover:scale-105"
          >
           <Link  href="/about">
            Discover Our Legacy</Link>
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </motion.button>
        </div>
      </section>

    </main>
  );
}