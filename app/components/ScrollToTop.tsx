"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Prevent scroll restoration and ensure page starts at top
    if (typeof window !== "undefined") {
      // Disable browser scroll restoration
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      // Scroll to top on mount
      window.scrollTo(0, 0);

      // Prevent hash scrolling on initial load
      const handleHashChange = () => {
        // Only allow hash scrolling if it's a user interaction, not on initial load
        if (window.location.hash) {
          const hash = window.location.hash;
          // Clear hash temporarily to prevent auto-scroll
          window.history.replaceState(null, "", window.location.pathname);
          // Then scroll to element if needed (but not on initial load)
        }
      };

      // Clear any hash on initial load
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }

      // Ensure we're at the top after a short delay (in case something else tries to scroll)
      const timeoutId = setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, []);

  return null;
}

