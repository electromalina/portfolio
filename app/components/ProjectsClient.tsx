"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsClient() {
  useEffect(() => {
    // Animate title
    const title = document.querySelector(".projects-title");
    if (title) {
      gsap.set(title, { opacity: 0, y: 50 });
      gsap.to(title, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    // Animate projects with stagger
    const projectsContainer = document.querySelector(".projects-container");
    if (projectsContainer) {
      const projectItems = projectsContainer.querySelectorAll(".project-item");
      if (projectItems.length > 0) {
        gsap.set(projectItems, { opacity: 0, y: 80 });
        gsap.to(projectItems, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsContainer,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });
      }
    }
  }, []);

  return null;
}

