import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      {/* Top Section */}
      <div className="mx-auto max-w-[2000px] px-6 pt-20 pb-14">
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif text-white mb-4 tracking-wide">
              ARIANA
            </h3>
            <p className="text-sm leading-relaxed max-w-sm">
              Ariana is a premium real estate brand by Dongyang India, delivering
              high-quality residential, commercial, and office developments
              backed by 40+ years of global construction excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/brand" className="hover:text-amber-500 transition">
                  The ARIANA
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/partnerships"
                  className="hover:text-amber-500 transition"
                >
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Focus Areas
            </h4>
            <ul className="space-y-3 text-sm">
              <li>Premium Residential</li>
              <li>Commercial Developments</li>
              <li>Grade-A Office Spaces</li>
              <li>Integrated Townships</li>
              <li>Strategic Partnerships</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <p>
                <span className="block text-zinc-400">Email</span>
                <a
                  href="mailto:minkihong@dongyangc.com"
                  className="hover:text-amber-500 transition"
                >
                  minkihong@dongyangc.com
                </a>
              </p>

              <p>
                <span className="block text-zinc-400">Phone</span>
                +91 80505 04189 <br />
                +91 63090 61601
              </p>

              <p>
                <span className="block text-zinc-400">Office</span>
                Bengaluru Rural District,<br />
                Karnataka, India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-800" />

      {/* Bottom Bar */}
      <div className="mx-auto max-w-[2000px] px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} Ariana. All rights reserved.
          </p>

          <p className="text-center md:text-right">
            Backed by <span className="text-zinc-300">Nature E&T Group</span> —
            Global Construction Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
