"use client";

import { useState, useRef, useEffect, useCallback, useMemo, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ProjectItem } from "@/data/projects";

interface ProjectsIndexProps {
  projects: ProjectItem[];
}

const emptySubscribe = () => () => {};

function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

function useWindowWidth() {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener("resize", callback);
      return () => window.removeEventListener("resize", callback);
    },
    () => window.innerWidth,
    () => 1200
  );
}

export default function ProjectsIndex({ projects }: ProjectsIndexProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const isMounted = useIsMounted();
  const windowWidth = useWindowWidth();

  // 15 sets (75 items) for a completely seamless, glitch-free infinite loop
  const extendedProjects = useMemo(() => {
    const sets: ProjectItem[] = [];
    for (let i = 0; i < 15; i++) {
      sets.push(...projects);
    }
    return sets;
  }, [projects]);

  // Start at the center set (index = projects.length * 7 = 35)
  const baseCount = projects.length; // 5
  const initialIndex = baseCount * 7; // 35
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHoveringCenter, setIsHoveringCenter] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const isPointerDownRef = useRef(false);
  const startXRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const justDraggedRef = useRef(false);
  const normalizationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Balanced responsive card metrics (aspect 3:4, elegant size)
  const cardMetrics = useMemo(() => {
    if (windowWidth < 640) return { cardWidth: 240, gap: 16 };
    if (windowWidth < 1024) return { cardWidth: 290, gap: 20 };
    return { cardWidth: 350, gap: 24 };
  }, [windowWidth]);

  // Seamless infinite navigation handler with zero reload effect
  const goToIndex = useCallback(
    (targetIndex: number) => {
      if (normalizationTimeoutRef.current) {
        clearTimeout(normalizationTimeoutRef.current);
      }

      setIsTransitioning(true);
      setActiveIndex(targetIndex);

      // Only normalize when approaching boundary (>60 or <15) using synchronous layout reflow (zero visual flicker)
      if (targetIndex >= baseCount * 12 || targetIndex <= baseCount * 3) {
        normalizationTimeoutRef.current = setTimeout(() => {
          const baseIndex = ((targetIndex % baseCount) + baseCount) % baseCount;
          const normalizedIndex = baseCount * 7 + baseIndex;

          if (normalizedIndex !== targetIndex) {
            const track = trackRef.current;
            if (track) {
              track.style.transition = "none";
              const newTranslateX =
                windowWidth / 2 -
                (normalizedIndex * (cardMetrics.cardWidth + cardMetrics.gap) +
                  cardMetrics.cardWidth / 2);
              track.style.transform = `translate3d(${newTranslateX}px, 0, 0)`;
              void track.offsetHeight; // Force immediate layout reflow
              track.style.transition =
                "transform 700ms cubic-bezier(0.25, 1, 0.5, 1)";
            }
            setActiveIndex(normalizedIndex);
          }
        }, 720);
      }
    },
    [baseCount, windowWidth, cardMetrics]
  );

  const nextCard = useCallback(() => {
    goToIndex(activeIndex + 1);
  }, [activeIndex, goToIndex]);

  const prevCard = useCallback(() => {
    goToIndex(activeIndex - 1);
  }, [activeIndex, goToIndex]);

  // Continuous auto-movement in infinite loop
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    if (isDragging || isHoveringCenter) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      goToIndex(activeIndex + 1);
    }, 3600);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex, isDragging, isHoveringCenter, goToIndex]);

  // Pointer drag handling: only activates drag mode when movement exceeds 8px
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    isPointerDownRef.current = true;
    startXRef.current = e.clientX;
    dragDistanceRef.current = 0;
    justDraggedRef.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current) return;
    const diff = e.clientX - startXRef.current;
    dragDistanceRef.current = Math.abs(diff);

    // Differentiate drag gesture from a clean tap/click
    if (Math.abs(diff) > 8) {
      if (!isDragging) {
        setIsDragging(true);
        setIsTransitioning(false);
        try {
          trackRef.current?.setPointerCapture(e.pointerId);
        } catch {}
      }
      setDragOffset(diff);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current) return;
    isPointerDownRef.current = false;

    if (isDragging) {
      setIsDragging(false);
      try {
        trackRef.current?.releasePointerCapture(e.pointerId);
      } catch {}

      justDraggedRef.current = true;
      setTimeout(() => {
        justDraggedRef.current = false;
      }, 150);

      const threshold = 50;
      const currentOffset = dragOffset;
      setDragOffset(0);

      if (currentOffset < -threshold) {
        goToIndex(activeIndex + 1);
      } else if (currentOffset > threshold) {
        goToIndex(activeIndex - 1);
      } else {
        setIsTransitioning(true);
      }
    } else {
      setDragOffset(0);
    }
  };

  // Center clicked side card immediately; open project explore page if center card is clicked
  const handleCardClick = (e: React.MouseEvent, targetIndex: number) => {
    if (justDraggedRef.current) {
      e.preventDefault();
      return;
    }
    if (targetIndex !== activeIndex) {
      e.preventDefault();
      goToIndex(targetIndex);
    }
  };

  // Map outcome / real result description for each project
  const getProjectResult = (project: ProjectItem) => {
    switch (project.id) {
      case "netram":
        return "National Smart India Hackathon Winner · CCTV & AI audit platform for DoSJE";
      case "plantexa":
        return "98.4% diagnostic accuracy with two-stage MobileNetV2 leaf neural gatekeeper";
      case "prodexa":
        return "Automated multi-source scraper with Supabase B-Tree indexed catalog";
      case "aptixa":
        return "4,060+ R.S. Aggarwal placement questions & proctored timed simulations";
      default:
        return project.subtitle || project.summary || "High-performance software system";
    }
  };

  // Center the active card in the full-width viewport
  const translateX =
    windowWidth / 2 -
    (activeIndex * (cardMetrics.cardWidth + cardMetrics.gap) +
      cardMetrics.cardWidth / 2) +
    dragOffset;

  return (
    <div className="w-full bg-[#ffffff] text-[var(--color-ink)] selection:bg-[var(--color-accent)] selection:text-white min-h-[calc(100vh-4.5rem)] flex flex-col justify-center">
      <h1 className="sr-only">Selected Engineering Projects</h1>

      {/* ─── Infinite Focus Carousel Section ───────────── */}
      <section
        id="work"
        className="relative overflow-hidden py-16 sm:py-24 bg-[#ffffff]"
        aria-label="Selected engineering projects infinite carousel"
      >
        {/* ── Carousel Viewport (Unobstructed Viewport, Zero Blur) ── */}
        <div className="w-full relative overflow-hidden py-6 select-none">
          <ul
            ref={trackRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className={`flex items-start select-none ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            } ${!isMounted ? "opacity-0" : "opacity-100 transition-opacity duration-300"}`}
            style={{
              transform: `translate3d(${translateX}px, 0, 0)`,
              transition: isTransitioning
                ? "transform 700ms cubic-bezier(0.25, 1, 0.5, 1)"
                : "none",
              gap: `${cardMetrics.gap}px`,
              willChange: "transform",
            }}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") prevCard();
              if (e.key === "ArrowRight") nextCard();
            }}
            aria-label="Selected engineering projects carousel"
          >
            {extendedProjects.map((project, idx) => {
              const dist = Math.abs(idx - activeIndex);
              const isActive = dist === 0;
              const isImmediate = dist === 1;
              const isOuterEdge = dist === 2; // Left-most and right-most visible cards

              // Progressive distance-based scaling and opacity (fade on outer cards only)
              let itemClass = "scale-[0.62] opacity-0 z-0 pointer-events-none";
              if (isActive) {
                itemClass = "scale-100 opacity-100 z-20 cursor-pointer";
              } else if (isImmediate) {
                itemClass = "scale-[0.88] opacity-100 z-10 cursor-pointer";
              } else if (isOuterEdge) {
                itemClass = "scale-[0.76] opacity-50 z-5 cursor-pointer hover:opacity-75";
              }

              return (
                <li
                  key={`${project.id}-${idx}`}
                  style={{
                    width: `${cardMetrics.cardWidth}px`,
                  }}
                  className={`shrink-0 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${itemClass}`}
                >
                  <Link
                    href={`/projects/${project.id}`}
                    onClick={(e) => handleCardClick(e, idx)}
                    tabIndex={isActive ? 0 : -1}
                    aria-label={
                      isActive
                        ? `Explore ${project.name}`
                        : `Focus on ${project.name}`
                    }
                    className="group block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-[1.25rem]"
                  >
                    {/* Work Frame (Balanced 3:4 Aspect Ratio, Zero Blur, Slight Fade on Left/Right Most Card Only) */}
                    <div
                      onMouseEnter={() => {
                        if (isActive) setIsHoveringCenter(true);
                      }}
                      onMouseLeave={() => {
                        if (isActive) setIsHoveringCenter(false);
                      }}
                      style={
                        isOuterEdge
                          ? {
                              maskImage:
                                idx < activeIndex
                                  ? "linear-gradient(to right, transparent 0%, black 50%)"
                                  : "linear-gradient(to left, transparent 0%, black 50%)",
                              WebkitMaskImage:
                                idx < activeIndex
                                  ? "linear-gradient(to right, transparent 0%, black 50%)"
                                  : "linear-gradient(to left, transparent 0%, black 50%)",
                            }
                          : undefined
                      }
                      className={`w-full aspect-[3/4] rounded-[1.25rem] bg-[#f8f7f4] border border-black/10 relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                        isActive
                          ? "shadow-md group-hover:shadow-lg group-hover:border-black/25"
                          : "shadow-sm"
                      }`}
                    >
                      <Image
                        src={
                          project.thumbnail ||
                          `/images/projects/${project.id}.svg`
                        }
                        alt={`${project.name} preview illustration`}
                        fill
                        className={`object-cover w-full h-full pointer-events-none transition-transform duration-700 ${
                          isActive ? "group-hover:scale-[1.02]" : ""
                        }`}
                        sizes="(max-width: 640px) 240px, (max-width: 1024px) 290px, 350px"
                        loading="eager"
                        draggable={false}
                      />

                      {/* Slight blur on outer part of left-most card */}
                      {isOuterEdge && idx < activeIndex && (
                        <div
                          className="pointer-events-none absolute inset-y-0 left-0 w-[55%] z-10 backdrop-blur-[4px] bg-gradient-to-r from-white/35 via-white/10 to-transparent"
                          style={{
                            maskImage:
                              "linear-gradient(to right, black 35%, transparent 100%)",
                            WebkitMaskImage:
                              "linear-gradient(to right, black 35%, transparent 100%)",
                          }}
                          aria-hidden="true"
                        />
                      )}

                      {/* Slight blur on outer part of right-most card */}
                      {isOuterEdge && idx > activeIndex && (
                        <div
                          className="pointer-events-none absolute inset-y-0 right-0 w-[55%] z-10 backdrop-blur-[4px] bg-gradient-to-l from-white/35 via-white/10 to-transparent"
                          style={{
                            maskImage:
                              "linear-gradient(to left, black 35%, transparent 100%)",
                            WebkitMaskImage:
                              "linear-gradient(to left, black 35%, transparent 100%)",
                          }}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* Only Keep the Description (No Name, No Pill) */}
                    <p
                      className={`text-xs sm:text-sm mt-3 leading-relaxed font-sans text-center px-1 transition-all duration-700 line-clamp-3 ${
                        isActive
                          ? "text-[#303033] opacity-100 group-hover:text-black"
                          : isImmediate
                          ? "text-[#52525b] opacity-90"
                          : "text-[#71717a] opacity-50"
                      }`}
                    >
                      {getProjectResult(project)}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
