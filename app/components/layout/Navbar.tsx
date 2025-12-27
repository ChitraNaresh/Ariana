"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Pages that have hero / dark background
  const heroRoutes = ["/", "/partnerships","/brand"];
  const isHeroPage = heroRoutes.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "The ARIANA", href: "/brand" },
    { name: "About Us", href: "/about" },
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

          {/* ================= LOGO ================= */}
         {/* ================= LOGO ================= */}
<Link href="/" className="flex items-center">
  <div
    className={`px-4 py-2 rounded-xl transition-all duration-300 ${
      scrolled
        ? "bg-white/80 border border-slate-200 shadow-sm"
        : "bg-white/20 backdrop-blur-md"
    }`}
  >
    <span
      className={`text-xl sm:text-2xl font-serif tracking-[0.25em] transition-colors ${
        scrolled
          ? "text-slate-900"
          : isHeroPage
            ? "text-white"
            : "text-slate-900"
      }`}
      style={{
        textShadow:
          !scrolled && isHeroPage
            ? "0 3px 14px rgba(0,0,0,0.55)"
            : "none",
      }}
    >
      ARIANA
    </span>
  </div>
</Link>


         
          {/* ================= DESKTOP NAV ================= */}
<nav className="hidden md:flex items-center gap-12">
  {navItems.map((item) => {
    const isActive = pathname === item.href;

    const textColor = scrolled
      ? "text-slate-800 hover:text-amber-700"
      : isHeroPage
        ? "text-white/90 hover:text-amber-200"
        : "text-slate-800 hover:text-amber-700";

    const activeColor = scrolled
      ? "text-amber-700"
      : isHeroPage
        ? "text-amber-300"
        : "text-amber-700";

    return (
      <Link
        key={item.href}
        href={item.href}
        className={`group relative text-[13px] uppercase tracking-[0.18em] font-medium transition-colors duration-300 ${
          isActive ? activeColor : textColor
        }`}
        style={{
          textShadow:
            !scrolled && isHeroPage
              ? "0 2px 10px rgba(0,0,0,0.45)"
              : "none",
        }}
      >
        {item.name}

        {/* Elegant underline */}
        <span
          className={`absolute left-0 -bottom-2 h-[1.5px] w-full origin-left scale-x-0 transition-transform duration-300 ${
            scrolled || !isHeroPage
              ? "bg-amber-700"
              : "bg-amber-300"
          } group-hover:scale-x-100 ${
            isActive ? "scale-x-100" : ""
          }`}
        />
      </Link>
    );
  })}
</nav>


          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden transition-colors ${
              scrolled || !isHeroPage ? "text-slate-900" : "text-white"
            }`}
            style={{
              textShadow:
                !scrolled && isHeroPage
                  ? "0 2px 10px rgba(0,0,0,0.45)"
                  : "none",
            }}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t shadow-lg">
          <div className="flex flex-col px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium transition ${
                  pathname === item.href
                    ? "text-amber-700"
                    : "text-slate-800 hover:text-amber-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
