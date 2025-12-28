"use client";

import { motion } from "framer-motion";
import { Shield, TrendingUp, Award, Building2, Users, Zap, Target, Globe, CheckCircle, ArrowRight, Handshake } from "lucide-react";

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

const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export default function PartnershipsPage() {
  const valuePropositions = [
    {
      icon: Shield,
      title: "Zero Risk, Maximum Return",
      desc: "We undertake all financial and execution risk inherent in complex development, ensuring land owners secure maximum value without capital investment.",
      audience: "Land Owners",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Zap,
      title: "Precision Execution Mastery",
      desc: "Infrastructure-grade project management, strict timelines, and technical excellence proven across large-scale projects.",
      audience: "All Partners",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: Award,
      title: "Unwavering Financial Assurance",
      desc: "Guaranteed project completion backed by the financial strength and ethical governance of our Korean parent group.",
      audience: "All Partners",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Building2,
      title: "Multi-Asset Versatility",
      desc: "Expertise across High-end Residential, Premium Commercial, and Grade-A Office developments.",
      audience: "Strategic Partners",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Premium Brand Valuation",
      desc: "Ariana's premium positioning translates superior construction quality into maximized revenue share.",
      audience: "All Partners",
      gradient: "from-rose-500 to-pink-600"
    }
  ];

  const partnershipModels = [
    {
      icon: Handshake,
      title: "Joint Development Agreement (JDA) / Joint Venture (JV)",
      desc: "Our preferred model for Land Owners seeking optimal revenue sharing and asset protection.",
      features: ["Revenue Sharing", "Asset Protection", "Zero Capital Investment", "Long-term Value"]
    },
    {
      icon: Target,
      title: "Strategic Investment",
      desc: "Opportunities for financial and institutional partners seeking involvement in specific project pipelines.",
      features: ["Curated Projects", "Risk Management", "Proven Track Record", "Financial Returns"]
    },
    {
      icon: Building2,
      title: "Build-to-Suit / Development Management",
      desc: "Options for corporate clients requiring specialized, high-quality asset development.",
      features: ["Custom Solutions", "Quality Assured", "Timeline Guarantee", "Premium Execution"]
    }
  ];

  return (
    <main className="bg-white text-slate-900 overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-amber-900/90 to-slate-800/95 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80')",
            }}
          />
          {/* Animated overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-transparent z-20"
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
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-200 rounded-full text-xs sm:text-sm font-medium tracking-wide"
          >
            STRATEGIC COLLABORATION
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight"
          >
            Partnerships
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl text-amber-300 font-semibold mb-6 sm:mb-8 px-4"
          >
            Your Asset, Elevated
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4"
          >
            The definitive path to profitable real estate development in India. Partner with Ariana to unlock long-term value through precision execution, premium positioning, and global financial strength.
          </motion.p>

          <motion.button
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-base sm:text-lg font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 hover:scale-105"
          >
            Explore Partnership Opportunities
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </motion.button>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6 sm:mb-8">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
                Join Our Vision
              </h2>
            </div>
            
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto">
              We invite visionary Land Owners and Strategic Capital Partners to join us in shaping the future of India's premium real estate market. Leverage Dongyang India's proven construction mastery and the premium market positioning of the Ariana brand to maximize returns on your assets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= VALUE PROPOSITION SECTION ================= */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Background decoration */}
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-900">
              The Ariana Value Proposition
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              Why partnering with Ariana is your path to maximum value realization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {valuePropositions.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative p-6 sm:p-8">
                    {/* Icon */}
                    <div className={`mb-4 sm:mb-6 inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>

                    {/* Audience badge */}
                    <div className="inline-block mb-3 sm:mb-4 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                      {item.audience}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900 group-hover:text-slate-800 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Decorative element */}
                    <div className={`absolute -bottom-2 -right-2 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

     

      {/* ================= PARTNERSHIP MODELS SECTION ================= */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-900">
              Flexible Partnership Models
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              Tailored engagement structures to meet your specific needs and maximize mutual success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {partnershipModels.map((model, index) => {
              const Icon = model.icon;
              return (
                <motion.div
                  key={index}
                  variants={slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-slate-200 hover:border-amber-300 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="mb-4 sm:mb-6 inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900">
                    {model.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 sm:mb-6">
                    {model.desc}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 sm:space-y-3">
                    {model.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-center gap-2 sm:gap-3"
                      >
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 relative overflow-hidden">
        {/* Animated background */}
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Globe className="w-12 h-12 sm:w-16 sm:h-16 text-amber-400 mx-auto mb-6 sm:mb-8" />
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Let's Build Value Together
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Partner with Ariana to unlock premium value through trust, execution excellence, and long-term vision. Together, we'll create landmark developments that define India's real estate future.
            </p>
            
            {/* <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-base sm:text-lg font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 w-full sm:w-auto"
              >
                Start a Partnership Conversation
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 sm:px-12 py-3 sm:py-4 bg-white/10 backdrop-blur-md text-white text-base sm:text-lg font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
              >
                Download Partnership Guide
              </motion.button>
            </div> */}
          </motion.div>
        </div>
      </section>

    </main>
  );
}