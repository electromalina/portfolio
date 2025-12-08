"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useOnMountAnimation } from "@/app/hooks/useScrollAnimation";

const titles = [
  "Front-end developer",
  "Fontys University Student",
  "UX/UI designer",
  "Web Developer",
];

function TypingAnimation() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 75 : 150;
    let timeoutId: NodeJS.Timeout;
    
    if (!isDeleting) {
      // Typing
      if (currentText.length < currentTitle.length) {
        timeoutId = setTimeout(() => {
          setCurrentText(currentTitle.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, wait then start deleting
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting
      if (currentText.length > 0) {
        timeoutId = setTimeout(() => {
          setCurrentText(currentTitle.slice(0, currentText.length - 1));
        }, typingSpeed);
      } else {
        // Finished deleting, move to next title
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentText, isDeleting, currentTitleIndex]);

  return (
    <span className="font-mono text-xl md:text-2xl lg:text-3xl text-foreground/70">
      {currentText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
}

export default function Hero() {
  const heroContentRef = useOnMountAnimation(0, 1.2, 50);
  const titleRef = useOnMountAnimation(0.2, 1, 50);
  const subtitleRef = useOnMountAnimation(0.4, 1, 50);
  const buttonsRef = useOnMountAnimation(0.6, 1, 50);
  const scrollIndicatorRef = useOnMountAnimation(0.8, 1, 50);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden snap-section"
    >
      {/* Hero Content */}
      <div ref={heroContentRef as React.RefObject<HTMLDivElement>} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h1 ref={titleRef as React.RefObject<HTMLHeadingElement>} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
            <span className="text-foreground text-5xl">Hey, I'm</span>
            <br />
            <span className="text-[#8D162A]">
              Kalynovskyi Danylo
            </span>
          </h1>
          
          <div ref={subtitleRef as React.RefObject<HTMLDivElement>} className="mb-12 min-h-[2rem] md:min-h-[2.5rem] lg:min-h-[3rem] flex items-center justify-center">
            <TypingAnimation />
          </div>
          
          <div ref={buttonsRef as React.RefObject<HTMLDivElement>} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#projects"
              className="relative px-8 py-4 rounded-full font-medium text-foreground overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)"
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              {/* Animated background gradient */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 button-gradient-animate transition-opacity duration-500"
              />
              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/30 rounded-full"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${30 + (i % 2) * 40}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      x: [0, 5, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
              <span className="relative z-10">View My Work</span>
            </motion.a>
            <motion.a
              href="/CV.pdf"
              download
              className="relative px-8 py-4 rounded-full font-medium text-background overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, rgba(141, 22, 42, 0.9), rgba(179, 29, 58, 0.8))",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(141, 22, 42, 0.3)",
                boxShadow: "0 8px 32px rgba(141, 22, 42, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              {/* Animated background gradient */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, rgba(179, 29, 58, 1), rgba(141, 22, 42, 0.9))",
                }}
              />
              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/30 rounded-full"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${30 + (i % 2) * 40}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      x: [0, 5, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download CV
              </span>
            </motion.a>
          </div>


        {/* Scroll Indicator */}
        <div ref={scrollIndicatorRef as React.RefObject<HTMLDivElement>} className="mt-16 animate-bounce">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-foreground/50 hover:text-primary transition-colors"
            aria-label="Scroll to next section"
          >
            <span className="text-sm font-mono">Scroll</span>
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
