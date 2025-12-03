"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// On-mount animation (not scroll-triggered)
export function useOnMountAnimation(
  delay: number = 0,
  duration: number = 1,
  initialY: number = 50
) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.set(element, { opacity: 0, y: initialY });

    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power3.out",
    });

    return () => {
      animation.kill();
    };
  }, [delay, duration, initialY]);

  return ref;
}

interface ScrollAnimationOptions {
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  once?: boolean;
  toggleActions?: string;
}

export function useScrollAnimation(
  options: ScrollAnimationOptions = {}
) {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const {
      trigger = element,
      start = "top 80%",
      end = "bottom 20%",
      scrub = false,
      markers = false,
      once = true,
      toggleActions = "play none none none",
    } = options;

    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(element, { opacity: 0, y: 50 });

      // Create animation
      const animation = gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: typeof trigger === "string" ? trigger : trigger,
          start,
          end,
          scrub,
          markers,
          toggleActions: once ? toggleActions : "play none none reverse",
        },
      });

      return () => {
        animation.kill();
      };
    });

    return () => {
      ctx.revert();
    };
  }, [options]);

  return elementRef;
}

// Fade in from bottom
export function useFadeInUp(
  delay: number = 0,
  duration: number = 1,
  start: string = "top 80%"
) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.set(element, { opacity: 0, y: 60 });

    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      animation.kill();
    };
  }, [delay, duration, start]);

  return ref;
}

// Fade in from left
export function useFadeInLeft(
  delay: number = 0,
  duration: number = 1,
  start: string = "top 80%"
) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.set(element, { opacity: 0, x: -60 });

    const animation = gsap.to(element, {
      opacity: 1,
      x: 0,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      animation.kill();
    };
  }, [delay, duration, start]);

  return ref;
}

// Fade in from right
export function useFadeInRight(
  delay: number = 0,
  duration: number = 1,
  start: string = "top 80%"
) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.set(element, { opacity: 0, x: 60 });

    const animation = gsap.to(element, {
      opacity: 1,
      x: 0,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      animation.kill();
    };
  }, [delay, duration, start]);

  return ref;
}

// Scale in animation
export function useScaleIn(
  delay: number = 0,
  duration: number = 1,
  start: string = "top 80%"
) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.set(element, { opacity: 0, scale: 0.8 });

    const animation = gsap.to(element, {
      opacity: 1,
      scale: 1,
      duration,
      delay,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      animation.kill();
    };
  }, [delay, duration, start]);

  return ref;
}

// Parallax effect
export function useParallax(
  speed: number = 0.5,
  start: string = "top bottom",
  end: string = "bottom top"
) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const animation = gsap.to(element, {
      y: () => window.innerHeight * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub: true,
      },
    });

    return () => {
      animation.kill();
    };
  }, [speed, start, end]);

  return ref;
}

// Stagger animation for children
export function useStaggerAnimation(
  selector: string = "> *",
  delay: number = 0.1,
  start: string = "top 80%"
) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let children: NodeListOf<Element> | Element[];
    
    // Handle direct child selectors (starting with >)
    if (selector.startsWith(">")) {
      // Get direct children and filter by tag if specified
      const tagName = selector.trim().substring(1).trim();
      if (tagName === "*" || tagName === "") {
        // All direct children
        children = Array.from(element.children) as Element[];
      } else {
        // Direct children of specific tag
        children = Array.from(element.children).filter(
          (child) => child.tagName.toLowerCase() === tagName.toLowerCase()
        ) as Element[];
      }
    } else {
      // Use querySelectorAll for other selectors
      children = element.querySelectorAll(selector);
    }
    
    if (children.length === 0) return;

    gsap.set(children, { opacity: 0, y: 40 });

    const animation = gsap.to(children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      animation.kill();
    };
  }, [selector, delay, start]);

  return ref;
}

// Smooth scroll reveal for sections
export function useSectionReveal() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const children = element.querySelectorAll("[data-scroll-reveal]");
    if (children.length === 0) return;

    children.forEach((child, index) => {
      gsap.set(child, { opacity: 0, y: 50 });

      gsap.to(child, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: index * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: child,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return ref;
}

