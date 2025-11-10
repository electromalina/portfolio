"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setMenuOpen(false);
    }
  };

  const primaryRgb = "141, 22, 42"; // #8D162A
  const primaryLightRgb = "179, 29, 58"; // #b31d3a

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6"
    >
      <div
        className="relative mx-auto my-2 flex items-center justify-between rounded-3xl shadow-glass px-5 md:px-8 py-3 md:py-4 border"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderColor: "rgba(255,255,255,0.2)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
          maxWidth: "960px",
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-30 pointer-events-none"
          animate={{
            background: [
              `linear-gradient(135deg, rgba(${primaryRgb},0.15), rgba(${primaryLightRgb},0.1))`,
              `linear-gradient(225deg, rgba(${primaryLightRgb},0.15), rgba(${primaryRgb},0.1))`,
              `linear-gradient(315deg, rgba(${primaryRgb},0.15), rgba(${primaryLightRgb},0.1))`,
              `linear-gradient(135deg, rgba(${primaryRgb},0.15), rgba(${primaryLightRgb},0.1))`,
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${15 + i * 20}%`,
                top: `${20 + (i % 2) * 60}%`,
              }}
              animate={{
                y: [-5, -15, -5],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <ul className="hidden md:flex gap-2 sm:gap-4 md:gap-6 mx-auto relative z-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <motion.a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-foreground/80 hover:text-primary font-medium transition-colors px-3 py-2 rounded-2xl overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                />

                <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-0.5 h-0.5 bg-white/60 rounded-full"
                      style={{
                        left: `${30 + i * 20}%`,
                        top: `${40 + (i % 2) * 20}%`,
                      }}
                      animate={{
                        y: [-3, -8, -3],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 1.5 + i * 0.2,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>

                <span className="relative z-10">{link.name}</span>
              </motion.a>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex items-center relative z-10">
          <button
            className="flex items-center justify-center p-1 focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
          >
            <motion.div
              animate={
                menuOpen
                  ? {
                      scale: [1, 1.2, 1.1],
                      rotate: [0, 90],
                    }
                  : {
                      scale: 1,
                      rotate: 0,
                    }
              }
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="relative w-14 h-14 rounded-full flex items-center justify-center overflow-hidden"
              style={{
                background: menuOpen
                  ? `linear-gradient(135deg, rgba(${primaryRgb},0.4), rgba(${primaryLightRgb},0.3))`
                  : "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                boxShadow: menuOpen
                  ? `0 0 30px 15px rgba(${primaryRgb},0.3)`
                  : "0 0 20px 8px rgba(0,0,0,0.1)",
                border: `1px solid rgba(255,255,255,${menuOpen ? "0.3" : "0.1"})`,
              }}
            >
              <motion.div
                className="absolute flex flex-col gap-1.5"
                animate={menuOpen ? { rotate: 45 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="w-5 h-0.5 bg-foreground rounded-full"
                  animate={
                    menuOpen
                      ? {
                          y: 6,
                          rotate: 90,
                        }
                      : {
                          y: 0,
                          rotate: 0,
                        }
                  }
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-5 h-0.5 bg-foreground rounded-full"
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-5 h-0.5 bg-foreground rounded-full"
                  animate={
                    menuOpen
                      ? {
                          y: -6,
                          rotate: 90,
                        }
                      : {
                          y: 0,
                          rotate: 0,
                        }
                  }
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {menuOpen && (
                <motion.div
                  className="absolute rounded-full border border-primary/50"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  animate={{
                    scale: [1, 1.3, 1.2],
                    opacity: [0.6, 0.2, 0.4],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              )}
            </motion.div>
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: -10,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
                duration: 0.35,
              }}
              className="absolute top-full left-0 right-0 mt-4 px-2 md:hidden"
            >
              <div
                className="rounded-3xl shadow-2xl border border-white/20 flex items-center justify-center py-8 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.85) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(${primaryRgb},0.2)`,
                }}
              >
                <ul className="flex flex-col items-center justify-center gap-3 p-4 w-full">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      className="w-full"
                    >
                      <motion.a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="block w-full text-center text-foreground font-medium transition-all px-6 py-3 text-lg rounded-3xl relative overflow-hidden"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: `rgba(${primaryRgb},0.2)`,
                          boxShadow: `0 0 20px rgba(${primaryRgb},0.3)`,
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-3xl"
                          style={{
                            background: `linear-gradient(to right, rgba(${primaryRgb},0.2), rgba(${primaryLightRgb},0.2))`,
                          }}
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10">{link.name}</span>
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
