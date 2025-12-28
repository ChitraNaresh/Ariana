"use client";

import { motion } from "framer-motion";
import { Globe, Building2, TrendingUp, Users, Award, MapPin, Calendar, Briefcase } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function NatureENTLegacySection() {
  const globalStats = [
    {
      icon: Calendar,
      label: "Year Established",
      value: "1984",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      label: "Global Presence",
      value: "12+ Countries",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Building2,
      label: "Projects Delivered",
      value: "500+",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Users,
      label: "Workforce",
      value: "10,000+",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const globalLocations = [
    { country: "South Korea", status: "Headquarters", color: "bg-amber-500" },
    { country: "India", status: "Regional Office", color: "bg-blue-500" },
    { country: "Vietnam", status: "Operations", color: "bg-emerald-500" },
    { country: "UAE", status: "Operations", color: "bg-purple-500" },
    { country: "Singapore", status: "Regional Hub", color: "bg-orange-500" },
    { country: "Malaysia", status: "Operations", color: "bg-cyan-500" }
  ];

  const achievements = [
    { icon: Award, text: "ISO 9001:2015 Certified" },
    { icon: TrendingUp, text: "$2B+ Annual Revenue" },
    { icon: Briefcase, text: "Fortune 500 Partner" },
    { icon: Globe, text: "40+ Years Excellence" }
  ];

  return (
    <section id="group-legacy" className="relative py-20 sm:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-50 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-bold rounded-full mb-6 border border-amber-200">
            Dongyang India – Our Legacy
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            A Foundation Built on{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Global Strength
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Ariana is backed by the financial strength, ethical governance, and global construction pedigree of our Korean parent group, Nature E&T. With a history spanning over 40 years, the Nature Group is synonymous with reliable, large-scale project delivery worldwide. This robust backing ensures complete financial stability and project continuity for every Ariana development in India.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Logo & Company Info */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Logo Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 mb-6 flex items-center justify-center h-48">
                <div className="text-center">
                  <Globe className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-white tracking-wider">
                    NATURE E&T
                  </h3>
                  <p className="text-slate-300 text-sm mt-2">Engineering & Technology</p>
                </div>
              </div>

              {/* Company Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Headquarters</p>
                    <p className="text-base font-semibold text-slate-900">Seoul, South Korea</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <Calendar className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Established</p>
                    <p className="text-base font-semibold text-slate-900">1984</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Industry</p>
                    <p className="text-base font-semibold text-slate-900">Construction & Real Estate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-lg transition-all group"
                >
                  <achievement.icon className="w-8 h-8 text-amber-600 mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-semibold text-slate-900 leading-tight">
                    {achievement.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Headquarters Image */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="sticky top-24">
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=1200&fit=crop"
                  alt="Nature E&T Headquarters - Seoul, South Korea"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                
                {/* Image Label */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-1">
                          Corporate Headquarters
                        </h4>
                        <p className="text-sm text-slate-600">
                          Nature E&T Global Campus, Seoul, South Korea
                        </p>
                        <p className="text-xs text-slate-500 mt-2">
                          40+ Years of Engineering Excellence
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Global Statistics */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-slate-900">
            Global Financial Stability Metrics
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-sm text-slate-500 font-medium mb-1 uppercase tracking-wide">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold text-slate-900">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Footprint Map */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Global Project Footprint
              </h3>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Delivering excellence across continents with a proven track record in diverse markets
              </p>
            </div>

            {/* Locations Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {globalLocations.map((location, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-xl rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 ${location.color} rounded-full group-hover:scale-125 transition-transform`} />
                    <div>
                      <p className="font-semibold text-white text-base">
                        {location.country}
                      </p>
                      <p className="text-xs text-slate-400">
                        {location.status}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Illustration */}
            <div className="mt-10 flex justify-center">
              <div className="relative w-full max-w-2xl h-48 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center">
                <Globe className="w-24 h-24 text-amber-400/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white/60 text-sm">
                      Interactive Map Visualization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-50 to-orange-50 px-8 py-4 rounded-full border border-amber-200">
            <Award className="w-6 h-6 text-amber-600" />
            <p className="text-slate-900 font-semibold">
              Trusted by Fortune 500 Companies Worldwide
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}