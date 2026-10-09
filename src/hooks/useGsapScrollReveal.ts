"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useGsapScrollReveal<T extends HTMLElement>() {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const scope = containerRef.current || document.body;
      const elements = scope.querySelectorAll<HTMLElement>(".seq, [data-seq-group] > *");

      elements.forEach((el) => {
        const delayMs = el.getAttribute("style")?.match(/--sd:\s*(\d+)ms/)?.[1];
        const delay = delayMs ? parseInt(delayMs, 10) / 1000 : 0;

        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay: delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              once: true,
            },
            onComplete: () => {
              el.classList.add("in");
            },
          }
        );
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      const scope = containerRef.current || document.body;
      const elements = scope.querySelectorAll<HTMLElement>(".seq, [data-seq-group] > *");
      elements.forEach((el) => {
        el.classList.add("in");
        gsap.set(el, { opacity: 1, y: 0 });
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return containerRef;
}
