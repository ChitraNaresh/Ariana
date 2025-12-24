"use client";

import { motion } from "framer-motion";
import GoogleMap from "../components/ui/GoogleMap";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const sectionTransition = {
  duration: 0.8,
  ease: "easeOut",
};

export default function ContactPage() {
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
            className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-amber-900 to-slate-900 bg-clip-text text-transparent"
          >
            Connect with the Ariana Team
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{  duration: 0.8,
  ease: "easeOut", delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
           For all inquiries regarding our premium developments, investment opportunities, or strategic partnerships, please contact us using the information below.
          </motion.p>
        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* ================= CONTACT DETAILS ================= */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                 duration: 0.8,
  ease: "easeOut",
              }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-900">
                  Our Contact Details
                </h2>

                <div className="space-y-6 text-lg">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Email Address
                    </h4>
                    <p className="text-slate-600">
                      mkonhg@dongyangc.com
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Phone Numbers
                    </h4>
                    <p className="text-slate-600">
                      +91 80505 04189 <br />
                      +91 63090 61601
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Office Address
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      Moparahalli, Doddaballapura Tq, <br />
                      Bengaluru Rural District – 562110
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= MAP ================= */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <GoogleMap />
              </div>
            </motion.div>

            {/* ================= CONTACT FORM ================= */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{  duration: 0.8,
  ease: "easeOut", delay: 0.1 }}
              className="bg-gradient-to-br from-white to-amber-50 p-10 rounded-3xl border border-amber-100 shadow-xl"
            >
              <h3 className="text-3xl font-bold mb-6 text-slate-900">
                Send Us a Message
              </h3>
              <p className="text-slate-600 mb-10">
                Share your inquiry and our team will get back to you shortly.
              </p>

              {/* STATIC FORM */}
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your requirement..."
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                  />
                </div>

                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                >
                  Submit Inquiry
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}
