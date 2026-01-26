"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); // mobile accordion
  const pathname = usePathname();

  const heroRoutes = ["/", "/partnerships", "/brand"];
  const isHeroPage = heroRoutes.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "The ARIANA", href: "/brand" },
    {
      name: "About Us",
      href: "/about",
      children: [
        { name: "Dongyang India – Local Expertise", href: "/about#Dongyang-india" },
        { name: "Our Track Record", href: "/about#track-record" },
        { name: "Dongyang Group – Our Legacy", href: "/about#group-legacy" },
      ],
    },
    { name: "Partnerships", href: "/partnerships" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-md border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[2000px] px-6">
        <div className="flex h-20 items-center justify-between">
{/* LOGO */}
<Link href="/" className="flex items-center">
  <div
    className={`px-3 py-2 rounded-xl transition-all duration-300 flex items-center justify-center`}
  >
    <Image
      src="/ArianaNewLogo.png"
      alt="Ariana"
      width={100}
      height={30}
      priority
      className="object-contain rounded-lg"
    />
  </div>
</Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const baseColor = scrolled
                ? "text-slate-800 hover:text-amber-700"
                : isHeroPage
                  ? "text-white/90 hover:text-amber-200"
                  : "text-slate-800 hover:text-amber-700";

              const activeColor = scrolled
                ? "text-amber-700"
                : isHeroPage
                  ? "text-amber-300"
                  : "text-amber-700";

              /* ---------- ABOUT US DROPDOWN ---------- */
              if (item.children) {
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] font-medium ${
                        isActive ? activeColor : baseColor
                      }`}
                    >
                      {item.name}
                      <ChevronDown size={14} />
                    </Link>

                    {/* Dropdown */}
                    <div className="absolute top-full left-0 mt-4 w-72 rounded-2xl bg-white shadow-xl border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-6 py-3 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              /* ---------- NORMAL LINK ---------- */
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[13px] uppercase tracking-[0.18em] font-medium ${
                    isActive ? activeColor : baseColor
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden ${
              scrolled || !isHeroPage ? "text-slate-900" : "text-white"
            }`}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t shadow-lg">
          <div className="px-6 py-6 space-y-4">

            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setAboutOpen(!aboutOpen)}
                      className="flex w-full items-center justify-between text-slate-800 font-medium"
                    >
                      {item.name}
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          aboutOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {aboutOpen && (
                      <div className="mt-3 ml-4 space-y-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block text-sm text-slate-600 hover:text-amber-700"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-slate-800 hover:text-amber-700"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
