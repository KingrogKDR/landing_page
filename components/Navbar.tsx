"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 400], [0, 40]);
  const y2 = useTransform(scrollY, [0, 400], [0, -40]);
  const [activeSection, setActiveSection] = useState("home");

  const navlinks = [
    { name: "Home", href: "#hero" },
    { name: "Video", href: "#video" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const handleNavClick = (
    e: React.MouseEvent,
    href: string,
    sectionName: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(sectionName.toLowerCase());
    }
  };

  const handleGetStartedClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Get Started clicked");
  };

  return (
    <motion.nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-gray-50/95 via-white/90 to-blue-50/95 backdrop-blur-lg">
      <motion.div
        className="absolute top-0 left-10 w-16 h-16 rounded-full bg-blue-100 opacity-50 blur-xl -z-10"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute top-0 right-10 w-20 h-20 rounded-full bg-pink-100 opacity-50 blur-xl -z-10"
        style={{ y: y2 }}
      />

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-black cursor-pointer"
          onClick={(e) => handleNavClick(e, "#home", "home")}
        >
          Vignam
        </motion.div>

        <div className="hidden md:flex gap-8 items-center">
          {navlinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.name)}
              className={`relative text-gray-700 hover:bg-gradient-to-br hover:from-slate-500 hover:via-slate-400 hover:to-slate-700 hover:bg-clip-text hover:text-transparent transition font-medium group duration-300 cursor-pointer ${
                activeSection === link.name.toLowerCase()
                  ? "bg-gradient-to-br from-slate-500 to-slate-700 bg-clip-text text-transparent"
                  : ""
              }`}
            >
              <span className="relative inline-block">
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left bg-gradient-to-br from-slate-500 via-slate-300 to-slate-700 transition-transform duration-300 group-hover:scale-x-100 ${
                    activeSection === link.name.toLowerCase()
                      ? "scale-x-100"
                      : "scale-x-0"
                  }`}
                />
              </span>
            </motion.a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGetStartedClick}
          className="relative px-5 py-2 rounded-lg transition duration-300 group cursor-pointer"
        >
          <span className="relative inline-block">
            Get Started
            <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-br from-slate-500 via-slate-300 to-slate-700 transition-transform duration-300 group-hover:scale-x-100" />
          </span>
        </motion.button>
      </div>
    </motion.nav>
  );
}
