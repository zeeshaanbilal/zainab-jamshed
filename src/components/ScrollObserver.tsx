"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    // Add js-enabled class to body so CSS knows JS is running
    document.body.classList.add("js-enabled");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Unpause the animation when it comes into view
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" } // Trigger when 15% is visible
    );

    const observeNodes = () => {
      const elements = document.querySelectorAll(
        ".animate-slide-down, .animate-slide-up, .animate-slide-right, .animate-slide-left, .animate-pop-in"
      );
      elements.forEach((el) => {
        // Only observe if it hasn't been observed/animated yet
        if (!el.classList.contains("in-view")) {
          observer.observe(el);
        }
      });
    };

    // Initial check
    observeNodes();

    // Watch for dynamically added elements (like sliders or client components)
    const mutationObserver = new MutationObserver(() => {
      observeNodes();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
