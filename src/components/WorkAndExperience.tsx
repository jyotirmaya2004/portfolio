"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Icon } from "@/components/ui/Icon";

export interface ProjectItem {
  type: "project";
  id: string;
  name: string;
  subtitle: string;
  classification: string;
  status: "DEPLOYED" | "COMPLETED";
  summary: string;
  challenge: string;
  architecture: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  mockup: {
    url: string;
    badge: string;
    badgeColor: string;
    chamber1: { title: string; subtitle: string; tag: string };
    chamber2: { title: string; subtitle: string; tag: string };
    bottomTelemetry: string[];
  };
}

export interface ExperienceItem {
  type: "experience";
  id: string;
  organization: string;
  role: string;
  period: string;
  tag: string;
  summary: string;
  overview: string;
  takeaways: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  badge: string;
  icon: "code" | "terminal" | "briefcase" | "globe";
  relatedProject?: string;
}

export type ShowcaseItem = ProjectItem | ExperienceItem;

const projectsData: ProjectItem[] = [
  {
    type: "project",
    id: "netram",
    name: "Netram",
    subtitle: "AI Inspection & Real-Time CCTV Surveillance Platform",
    classification: "AI · SIH National Finalist (DoSJE)",
    status: "DEPLOYED",
    summary:
      "National-level Smart India Hackathon platform for the Ministry of Social Justice and Empowerment. Real-time CCTV streaming, surprise inspection scheduling, WebRTC video conferencing, and AI compliance analytics.",
    challenge:
      "The Ministry of Social Justice and Empowerment (DoSJE) required an unbiased, automated auditing system to monitor distributed welfare centers across India without predictability or human tampering.",
    architecture: [
      "Real-Time CCTV Ingestion: Low-latency RTSP-to-WebRTC stream pipeline supporting 30+ concurrent inspection cameras.",
      "Surprise Audit Dispatcher: Cryptographic scheduling algorithm generating non-predictable audit alerts for inspection officers.",
      "Peer-to-Peer Video Conferencing: Encrypted WebRTC audio/video channels for live verification between central authorities and local nodes.",
      "Automated Compliance Classifier: Computer vision models analyzing video feeds for protocol deviations and timestamp authenticity.",
    ],
    metrics: [
      { label: "Active Streams", value: "34 Locations" },
      { label: "AI Compliance Pass", value: "98.4%" },
      { label: "WebRTC Latency", value: "<24ms" },
      { label: "Recognition", value: "SIH National Finalist" },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "WebRTC", "AI Analytics"],
    liveUrl: "https://netram.vercel.app",
    githubUrl: "https://github.com/jyotirmaya2004/netram",
    mockup: {
      url: "netram.dosje.gov.in/surveillance",
      badge: "LIVE AUDIT · 30 FPS",
      badgeColor: "emerald",
      chamber1: {
        title: "Feed #04 · Ward 2A Hub",
        subtitle: "AI Facial & Protocol Match: 99.4%",
        tag: "Active Node",
      },
      chamber2: {
        title: "Audit Unit #11 · Inspection",
        subtitle: "Zero-latency P2P encrypted session",
        tag: "WebRTC Connected",
      },
      bottomTelemetry: ["34 Stream Endpoints", "98.4% Compliance Rate", "Latency: 24ms"],
    },
  },
  {
    type: "project",
    id: "plantexa",
    name: "Plantexa",
    subtitle: "Two-Stage Deep Learning Plant Disease Diagnosis",
    classification: "AI/ML · NIELIT Research Fellowship",
    status: "COMPLETED",
    summary:
      "Two-stage convolutional neural network pipeline built at NIELIT. Stage 1 validates leaf presence to eliminate non-foliar image noise; Stage 2 diagnoses multi-class bacterial and fungal pathologies with edge-optimized inference.",
    challenge:
      "Most agricultural vision models fail in field conditions because non-leaf objects (background soil, hands, stems) trigger false positive disease classifications.",
    architecture: [
      "Two-Stage Hierarchical Inference: Stage 1 serves as a strict binary gatekeeper verifying foliar presence; Stage 2 activates only for valid foliage.",
      "Quantized Mobile Architecture: Models converted and quantized for deployment on edge devices and low-power agricultural IoT hardware.",
      "Multi-Class Disease Classifier: Diagnostic recognition covering major blight, spot, and rot diseases across agricultural staples.",
    ],
    metrics: [
      { label: "Leaf Gatekeeper", value: "99.8% Confidence" },
      { label: "Pathology Accuracy", value: "96.8% Validation" },
      { label: "Edge Latency", value: "42ms" },
      { label: "Model Weight", value: "14.2 MB Quantized" },
    ],
    technologies: ["Python", "TensorFlow", "Computer Vision", "CNN", "Deep Learning", "Edge ML"],
    githubUrl: "https://github.com/jyotirmaya2004/plantexa",
    mockup: {
      url: "plantexa.nielit.ai/pipeline",
      badge: "DUAL-STAGE INFERENCE · 42ms",
      badgeColor: "teal",
      chamber1: {
        title: "Stage 1 · Leaf Gatekeeper",
        subtitle: "Foliar Presence Confirmed (99.8%)",
        tag: "Binary CNN Filter",
      },
      chamber2: {
        title: "Stage 2 · Pathology Model",
        subtitle: "Phytophthora Infestans (Late Blight 96.4%)",
        tag: "Multi-Class Classifier",
      },
      bottomTelemetry: ["Model Size: 14.2 MB", "Test Acc: 96.8%", "Inference: 42ms"],
    },
  },
  {
    type: "project",
    id: "prodexa",
    name: "Prodexa",
    subtitle: "Product Data Aggregator & Multi-Source Curator",
    classification: "Full Stack · High-Throughput Data Systems",
    status: "COMPLETED",
    summary:
      "Automated web-scale catalog ingestion and curation engine. Features concurrent distributed scrapers, automated schema normalization, multi-facet parametric search, indexed PostgreSQL, and Supabase cloud infrastructure.",
    challenge:
      "Aggregating thousands of inconsistent product listings across diverse e-commerce sources while keeping queries fast and data schemas normalized.",
    architecture: [
      "Concurrent Extraction Workers: Resilient Python web scrapers with retry backoff and rate-limit mitigation.",
      "Schema Normalization Pipeline: Automated parser standardizing prices, currencies, and attribute taxonomies.",
      "Parametric Query Optimization: B-Tree indexed PostgreSQL tables on Supabase delivering sub-12ms multi-attribute filtering.",
    ],
    metrics: [
      { label: "Normalized Catalog", value: "10,480+ Items" },
      { label: "Query Execution", value: "<12ms Average" },
      { label: "Index Cache Hit", value: "94.6%" },
      { label: "Infrastructure", value: "PostgreSQL & Supabase" },
    ],
    technologies: ["Flask", "Python", "PostgreSQL", "Supabase", "Web Scraping", "REST APIs"],
    githubUrl: "https://github.com/jyotirmaya2004/prodexa",
    mockup: {
      url: "prodexa.curator.io/indexer",
      badge: "SYNC ENGINE ACTIVE",
      badgeColor: "rose",
      chamber1: {
        title: "Scraper Pipeline Queue",
        subtitle: "10,480 Items Normalized Across 4 Sources",
        tag: "Auto-Deduplication",
      },
      chamber2: {
        title: "Query Optimizer Engine",
        subtitle: "Parametric Filtering (<12ms execution)",
        tag: "B-Tree Indexing",
      },
      bottomTelemetry: ["DB: PostgreSQL", "Cache Hit: 94.6%", "Query: 8.4ms"],
    },
  },
  {
    type: "project",
    id: "aptixa",
    name: "Aptixa",
    subtitle: "Quantitative Aptitude & Placement Assessment Platform",
    classification: "Full Stack · EdTech & Assessment",
    status: "DEPLOYED",
    summary:
      "Interactive campus placement preparation and competitive assessment platform. Features timed quizzes, adaptive difficulty algorithms, real-time candidate ranking, and domain-by-domain diagnostic breakdowns.",
    challenge:
      "Campus placement candidates struggle to identify exact analytical bottlenecks in timed quantitative and logical reasoning tests.",
    architecture: [
      "Adaptive Difficulty Engine: Algorithm adjusting question complexity dynamically based on candidate pace and accuracy.",
      "Real-Time Proctoring & Timer: Anti-tamper browser session management with live second-by-second countdown.",
      "Diagnostic Analytics Suite: Instant percentile rank calculation against cohort benchmarks with topic-by-topic breakdowns.",
    ],
    metrics: [
      { label: "Candidate Percentile", value: "Top 3.5% Benchmarks" },
      { label: "Assessment Accuracy", value: "92% Mastery" },
      { label: "Solve Speed Metric", value: "48s / problem" },
      { label: "Deployment", value: "Live Production Platform" },
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://aptixa.jyotirmayabehera.com",
    githubUrl: "https://github.com/jyotirmaya2004/aptixa",
    mockup: {
      url: "aptixa.io/assessment/quant",
      badge: "TIMED TEST RUNNER ACTIVE",
      badgeColor: "blue",
      chamber1: {
        title: "Active Module: Quant (Q14/25)",
        subtitle: "Permutations & Probability (14:22 remaining)",
        tag: "Adaptive Level L3",
      },
      chamber2: {
        title: "Live Candidate Analytics",
        subtitle: "Score: 92/100 · Solve Speed: 48s/problem",
        tag: "Rank: #12 / 850",
      },
      bottomTelemetry: ["Domain: Quant + Logic", "Mastery: 92%", "Proctored: Verified"],
    },
  },
];

const experiencesData: ExperienceItem[] = [
  {
    type: "experience",
    id: "exp-nielit",
    organization: "NIELIT",
    role: "Computer Vision & Edge Disease Detection",
    period: "AI Research Internship",
    tag: "AI Research Fellowship",
    summary:
      "Engineered a two-stage deep learning pipeline for plant leaf verification and pathology classification. Optimized model latency for fast edge inference.",
    overview:
      "Conducted machine learning research at the National Institute of Electronics & Information Technology (NIELIT). Focused on computer vision architectures for agricultural edge devices, eliminating false positive rates caused by non-foliar imagery.",
    takeaways: [
      "Architected two-stage CNN: Stage 1 leaf presence gatekeeper and Stage 2 multi-class pathology classifier.",
      "Quantized deep learning models to under 15MB for fast deployment on low-power edge hardware.",
      "Achieved 99.8% foliar verification confidence and 96.8% multi-class diagnostic accuracy on test datasets.",
    ],
    technologies: ["Python", "TensorFlow", "Computer Vision", "CNN", "Edge ML"],
    metrics: [
      { label: "Verification", value: "99.8% Leaf Conf" },
      { label: "Pathology Acc", value: "96.8% Validated" },
      { label: "Model Size", value: "14.2 MB Edge" },
    ],
    badge: "TensorFlow · CNN",
    icon: "code",
    relatedProject: "Plantexa",
  },
  {
    type: "experience",
    id: "exp-infosys",
    organization: "Infosys Springboard",
    role: "Research Funding & Innovation Intelligence",
    period: "Enterprise Project Internship",
    tag: "Enterprise AI & NLP",
    summary:
      "Implemented NLP pipelines to extract insights from research grant data and identify technology innovation patterns across patent ecosystems.",
    overview:
      "Collaborated on an enterprise intelligence system at Infosys Springboard to analyze large-scale research grant allocations, academic publications, and patent portfolios using modern natural language processing pipelines.",
    takeaways: [
      "Engineered NLP extraction pipelines to parse unstructured research grants and patent disclosures.",
      "Modeled technology innovation trajectory metrics to forecast high-value research domains.",
      "Delivered structured relational data models for automated reporting and analytical visualization.",
    ],
    technologies: ["Python", "Machine Learning", "Data Analysis", "NLP"],
    metrics: [
      { label: "Data Pipeline", value: "Enterprise NLP" },
      { label: "Patent Modeling", value: "Trajectory AI" },
      { label: "Analytics", value: "Relational BI" },
    ],
    badge: "NLP · Python",
    icon: "terminal",
  },
  {
    type: "experience",
    id: "exp-sih",
    organization: "Smart India Hackathon",
    role: "Real-Time Surveillance & WebRTC Auditing",
    period: "National Finalist · DoSJE",
    tag: "National Hackathon Finalist",
    summary:
      "Designed and deployed the Netram platform for surprise inspection management, live CCTV streams, and AI-assisted compliance validation.",
    overview:
      "Selected as a National Finalist in the Smart India Hackathon solving problem statements for the Ministry of Social Justice and Empowerment (DoSJE). Designed, built, and pitched an end-to-end surprise inspection and live video auditing platform.",
    takeaways: [
      "Engineered low-latency WebRTC streaming architecture for multi-chamber CCTV inspection auditing.",
      "Built cryptographic surprise inspection scheduling algorithms preventing inspection tampering.",
      "Successfully pitched and demonstrated the live system to DoSJE technical evaluators and ministry officials.",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebRTC"],
    metrics: [
      { label: "Recognition", value: "National Finalist" },
      { label: "Streaming", value: "<24ms WebRTC" },
      { label: "Beneficiary", value: "DoSJE Ministry" },
    ],
    badge: "WebRTC · Next.js",
    icon: "briefcase",
    relatedProject: "Netram",
  },
  {
    type: "experience",
    id: "exp-systems",
    organization: "Open Source & Systems",
    role: "Distributed Backend & Cloud Systems",
    period: "Architecture & Infrastructure",
    tag: "Distributed Systems & Cloud",
    summary:
      "Engineering resilient API layers, relational and NoSQL schemas, and containerized microservice architectures with high throughput and reliable uptime.",
    overview:
      "Continuous systems development focused on scalable backend architectures, high-performance web scrapers, database indexing optimization, and containerized cloud services.",
    takeaways: [
      "Designed high-throughput REST APIs and database schema migrations with automated validation.",
      "Optimized PostgreSQL B-Tree query plans achieving sub-12ms execution times across complex parametric filters.",
      "Containerized microservices using Docker for reproducible deployment pipelines and high reliability.",
    ],
    technologies: ["PostgreSQL", "Docker", "Linux", "Git", "REST APIs"],
    metrics: [
      { label: "Query Time", value: "<12ms Average" },
      { label: "Architecture", value: "Docker Services" },
      { label: "Reliability", value: "High-Throughput" },
    ],
    badge: "PostgreSQL · Docker",
    icon: "globe",
  },
];

interface WorkAndExperienceProps {
  initialTab?: "all" | "projects" | "experience";
}

export default function WorkAndExperience({ initialTab = "all" }: WorkAndExperienceProps) {
  const [activeTab, setActiveTab] = useState<"all" | "projects" | "experience">(initialTab);
  const [selectedItem, setSelectedItem] = useState<ShowcaseItem | null>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Hash listener to switch tabs when navigating via /#work or /#experience
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleHash = () => {
        if (window.location.hash === "#experience") {
          setActiveTab("experience");
        } else if (window.location.hash === "#work" || window.location.hash === "#projects") {
          setActiveTab("projects");
        }
      };
      handleHash();
      window.addEventListener("hashchange", handleHash);
      return () => window.removeEventListener("hashchange", handleHash);
    }
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedItem]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedItem) {
        setSelectedItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem]);

  // Animate items on tab change
  const handleTabChange = (tab: "all" | "projects" | "experience") => {
    setActiveTab(tab);
    if (cardsContainerRef.current) {
      const cards = cardsContainerRef.current.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, stagger: 0.03, duration: 0.35, ease: "power2.out" }
      );
    }
  };

  const displayedItems: ShowcaseItem[] =
    activeTab === "all"
      ? [...projectsData, ...experiencesData]
      : activeTab === "projects"
      ? projectsData
      : experiencesData;

  return (
    <>
      <section id="work" className="pad-cards mx-auto w-full max-w-[1440px] seq pt-20 sm:pt-28 relative">
        <div id="experience" className="absolute top-0 pointer-events-none" aria-hidden="true" />
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-2">
          <div>
            <h2 className="t-section-head">Selected Work & Track Record</h2>
          </div>

          {/* Minimal Editorial Typography Filter Navigation (No Box, No Pills) */}
          <div className="flex items-center gap-6 sm:gap-8 self-start md:self-auto shrink-0">
            {(["all", "projects", "experience"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => handleTabChange(tab)}
                className={`text-xs uppercase tracking-widest transition-colors duration-200 pb-1 cursor-pointer ${
                  activeTab === tab
                    ? "text-[var(--color-ink)] font-semibold border-b-2 border-[var(--color-ink)]"
                    : "text-[var(--fg-muted)] hover:text-[var(--color-ink)] font-medium border-b-2 border-transparent"
                }`}
              >
                {tab === "all" ? "All" : tab === "projects" ? "Projects" : "Experience"}
              </button>
            ))}
          </div>
        </div>

        {/* Unboxed Editorial Items Grid: Just Project Heading & Description, Click to Open Popup */}
        <div
          ref={cardsContainerRef}
          data-seq-group="true"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12 sm:gap-y-14 pt-10 sm:pt-12"
        >
          {displayedItems.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-4 rounded-sm"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
              aria-label={`View details for ${item.type === "project" ? item.name : item.organization}`}
            >
              <div className="space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
                  {item.type === "project" ? item.name : `${item.organization} — ${item.role}`}
                </h3>
                <p className="text-sm sm:text-[15px] text-[var(--color-body-ink)] leading-relaxed">
                  {item.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          Interactive Detail Modal Dialog
      ───────────────────────────────────────────────────────────── */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/65 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-3xl max-h-[92vh] bg-[var(--bg)] border border-[var(--border)] rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-[var(--fg)] animate-modal-scale"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-[var(--bg-elevated)] shrink-0">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  {selectedItem.type === "project"
                    ? selectedItem.classification
                    : `${selectedItem.organization} · ${selectedItem.tag}`}
                </span>
                {selectedItem.type === "project" && selectedItem.status === "DEPLOYED" && (
                  <span className="text-[10px] font-medium font-mono text-[var(--color-ink)] bg-[var(--bg)] px-2.5 py-0.5 rounded-full border border-[var(--border)]">
                    Live Deployed
                  </span>
                )}
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="p-1.5 rounded-lg text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--border)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                aria-label="Close details dialog"
              >
                <Icon name="close" size={20} />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-7">
              {/* Title Section */}
              <div>
                <h3
                  id="modal-title"
                  className="font-serif text-2xl sm:text-4xl font-semibold tracking-tight text-[var(--color-ink)]"
                >
                  {selectedItem.type === "project" ? selectedItem.name : selectedItem.role}
                </h3>
                <p className="mt-1.5 text-sm sm:text-base text-[var(--color-accent)] font-medium">
                  {selectedItem.type === "project"
                    ? selectedItem.subtitle
                    : `${selectedItem.organization} — ${selectedItem.period}`}
                </p>
                <p className="mt-4 text-sm sm:text-[15px] text-[var(--color-body-ink)] leading-relaxed">
                  {selectedItem.type === "project" ? selectedItem.summary : selectedItem.overview}
                </p>
              </div>

              {/* High-Fidelity UI Interface Mockup (For Projects) */}
              {selectedItem.type === "project" && selectedItem.mockup && (
                <div className="rounded-xl bg-[#0f1117] text-white border border-white/10 p-4 shadow-lg overflow-hidden">
                  <div className="flex items-center justify-between pb-3 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="size-2.5 rounded-full bg-red-400" />
                      <span className="size-2.5 rounded-full bg-amber-400" />
                      <span className="size-2.5 rounded-full bg-green-400" />
                      <span className="ml-2 font-medium text-white/80">{selectedItem.mockup.url}</span>
                    </div>
                    <span className="inline-flex items-center text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {selectedItem.mockup.badge}
                    </span>
                  </div>

                  <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="rounded-lg bg-white/5 border border-white/10 p-3 flex flex-col justify-between h-24">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-white/60">
                        {selectedItem.mockup.chamber1.title}
                      </span>
                      <div className="font-semibold text-xs sm:text-sm text-white/95">
                        {selectedItem.mockup.chamber1.subtitle}
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400">
                        {selectedItem.mockup.chamber1.tag}
                      </span>
                    </div>

                    <div className="rounded-lg bg-white/5 border border-white/10 p-3 flex flex-col justify-between h-24">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-white/60">
                        {selectedItem.mockup.chamber2.title}
                      </span>
                      <div className="font-semibold text-xs sm:text-sm text-white/95">
                        {selectedItem.mockup.chamber2.subtitle}
                      </div>
                      <span className="text-[10px] font-mono text-white/60">
                        {selectedItem.mockup.chamber2.tag}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 flex items-center justify-between text-[11px] font-mono text-white/60 flex-wrap gap-2">
                    {selectedItem.mockup.bottomTelemetry.map((item, idx) => (
                      <span key={idx} className={idx === 1 ? "text-emerald-400 font-semibold" : ""}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenge & Engineering Breakdown (Projects) */}
              {selectedItem.type === "project" ? (
                <>
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)] font-semibold">
                      The Problem & Challenge
                    </h4>
                    <p className="text-sm text-[var(--color-body-ink)] leading-relaxed">
                      {selectedItem.challenge}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)] font-semibold">
                      Architectural Highlights
                    </h4>
                    <ul className="space-y-2 text-sm text-[var(--color-body-ink)]">
                      {selectedItem.architecture.map((arch, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-[var(--color-accent)] shrink-0 select-none font-semibold">−</span>
                          <span>{arch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics Bar */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)] font-semibold">
                      Performance & System Metrics
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                      {selectedItem.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] flex flex-col justify-between"
                        >
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--fg-subtle)]">
                            {m.label}
                          </span>
                          <span className="mt-1 text-sm font-semibold font-mono text-[var(--color-ink)]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                /* Experience Key Takeaways */
                <>
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)] font-semibold">
                      Key Deliverables & Engineering Takeaways
                    </h4>
                    <ul className="space-y-2.5 text-sm text-[var(--color-body-ink)]">
                      {selectedItem.takeaways.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                          <span className="text-[var(--color-accent)] shrink-0 select-none font-semibold">−</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Experience System & Delivery Metrics */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)] font-semibold">
                      Engineering & System Benchmarks
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                      {selectedItem.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] flex flex-col justify-between"
                        >
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--fg-subtle)]">
                            {m.label}
                          </span>
                          <span className="mt-1 text-sm font-semibold font-mono text-[var(--color-ink)]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Technologies Used */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)] font-semibold">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-[var(--bg-elevated)] px-3 py-1 text-xs font-mono font-medium text-[var(--color-ink)] border border-[var(--border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Action Bar */}
            <div className="px-6 py-4 bg-[var(--bg-elevated)] flex flex-wrap items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-3">
                {selectedItem.type === "project" && selectedItem.liveUrl && (
                  <a
                    href={selectedItem.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[var(--color-brand-blue)] rounded-xl hover:opacity-90 transition-opacity"
                  >
                    View Live Platform
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
                {selectedItem.type === "project" && selectedItem.githubUrl && (
                  <a
                    href={selectedItem.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-[var(--color-ink)] bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--color-accent)] rounded-xl transition-colors"
                  >
                    <Icon name="github" size={15} />
                    GitHub Repository
                  </a>
                )}
                {selectedItem.type === "experience" && selectedItem.relatedProject && (
                  <span className="text-xs font-mono text-[var(--fg-muted)]">
                    Related System: {selectedItem.relatedProject}
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 text-xs sm:text-sm font-medium text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--border)] rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
