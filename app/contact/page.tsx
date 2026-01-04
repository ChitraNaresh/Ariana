"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Building2 } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Simple Google Map Component
function GoogleMap() {
  return (
    <div className="w-full h-full min-h-[320px] bg-slate-100 rounded-2xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.4567890123456!2d77.5678901!3d13.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA3JzI0LjQiTiA3N8KwMzQnMDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '320px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ariana Office Location"
      />
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you shortly.');
  };

  const contactDetails = [
    {
      icon: Mail,
      title: "Email Address",
      content: "minkihong@dongyangc.com",
      link: "mailto:minkihong@dongyangc.com",
      gradient: "from-blue-100 to-blue-50"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      content: ["+91 80505 04189", "+91 63090 61601"],
      links: ["tel:+918050504189", "tel:+916309061601"],
      gradient: "from-green-100 to-green-50"
    },
    {
      icon: MapPin,
      title: "Office Address",
      content: "Moparahalli, Doddaballapura Tq, Bengaluru Rural District – 562110",
      gradient: "from-amber-100 to-amber-50"
    },
    // {
    //   icon: Clock,
    //   title: "Business Hours",
    //   content: "Monday - Saturday: 9:00 AM - 6:00 PM",
    //   gradient: "from-purple-100 to-purple-50"
    // }
  ];

  return (
    <main className="bg-white text-slate-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-12 sm:py-36 md:py-40 bg-gradient-to-br from-amber-50 via-slate-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_60%)]" />
        <div className="max-w-6xl mx-auto text-center relative z-10">

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="mb-4 sm:mb-6"
          >
            <span className="inline-block px-4 py-2 my-10 bg-amber-100/50 backdrop-blur-sm text-amber-900 text-xs sm:text-sm font-medium rounded-full border border-amber-200">
              Get in Touch
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-5 bg-gradient-to-r from-slate-900 via-amber-900 to-slate-900 bg-clip-text text-transparent leading-tight"
          >
            Connect with the Ariana Team
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            For all inquiries regarding our premium developments, investment opportunities, or strategic partnerships, please contact us using the information below.
          </motion.p>
        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">

            {/* ================= CONTACT DETAILS ================= */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-5 md:space-y-6"
            >
              <div className="mb-5 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  Our Contact Details
                </h2>
                <p className="text-slate-600 text-sm sm:text-base">
                  Reach out to us through any of these channels
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5">
                {contactDetails.map((detail, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group relative bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${detail.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <detail.icon className="w-6 h-6 text-slate-700" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">
                          {detail.title}
                        </h4>
                        {Array.isArray(detail.content) ? (
                          <div className="space-y-1">
  {detail.content.map((item, i) => {
    const link = detail.links?.[i];

    return link ? (
      <a
        key={i}
        href={link}
        className="
          block
          text-slate-600
          hover:text-amber-700
          transition-colors
          text-sm sm:text-base
        "
      >
        {item}
      </a>
    ) : (
      <span
        key={i}
        className="
          block
          text-slate-500
          text-sm sm:text-base
          cursor-default
        "
      >
        {item}
      </span>
    );
  })}
</div>

                        ) : detail.link ? (
                          <a
                            href={detail.link}
                            className="text-slate-600 hover:text-amber-700 transition-colors text-sm sm:text-base break-all"
                          >
                            {detail.content}
                          </a>
                        ) : (
                          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                            {detail.content}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* ================= MAP ================= */}
              {/* <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 mt-5 sm:mt-6"
              >
                <GoogleMap />
              </motion.div> */}
            </motion.div>

            {/* ================= CONTACT FORM ================= */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-white to-amber-50/50 p-6 sm:p-8 md:p-10 rounded-2xl border border-amber-100 shadow-lg sticky top-4"
            >
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl flex items-center justify-center">
                  <Send className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Send Us a Message
                  </h3>
                </div>
              </div>
              
              <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Share your inquiry and our team will get back to you shortly.
              </p>

              <div className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your requirement..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none bg-white"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}