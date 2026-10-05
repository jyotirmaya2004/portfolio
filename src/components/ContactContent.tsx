"use client";

import {
  FaFacebookF,
  FaTelegramPlane,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaRedditAlien,
  FaPinterestP,
  FaSnapchatGhost,
  FaQuora,
  FaEnvelope,
  FaMediumM,
  FaGlobe as Globe,
} from "react-icons/fa";

import { SiThreads, SiSubstack } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

import { coreSocialLinks } from "@/data/socialLinks";

function getIcon(icon: string) {
  switch (icon) {
    case "facebook":
      return <FaFacebookF />;

    case "telegram":
      return <FaTelegramPlane />;

    case "threads":
      return <SiThreads />;

    case "github":
      return <FaGithub />;

    case "linkedin":
      return <FaLinkedinIn />;

    case "youtube":
      return <FaYoutube />;

    case "instagram":
      return <FaInstagram />;

    case "x":
      return <FaXTwitter />;

    case "reddit":
      return <FaRedditAlien />;

    case "pinterest":
      return <FaPinterestP />;

    case "medium":
      return <FaMediumM />;

    case "snapchat":
      return <FaSnapchatGhost />;

    case "quora":
      return <FaQuora />;

    case "substack":
      return <SiSubstack />;

    case "globe":
      return <Globe />;
    case "email":
      return <FaEnvelope />;

    default:
      return null;
  }
}

export default function ContactContent() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#191b1d] text-white">
      {/* ========================================
          BACKGROUND
      ======================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Very subtle central glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/[0.015]
            blur-[100px]
          "
        />
      </div>

      {/* ========================================
          ORBITAL CONTACT AREA
      ======================================== */}

      <section
        className="
          relative
          flex
          min-h-screen
          items-center
          justify-center
          px-4
        "
        aria-label="Social media and contact links"
      >
        <div
          className="
            relative
            h-[390px]
            w-[390px]

            sm:h-[500px]
            sm:w-[500px]

            md:h-[600px]
            md:w-[600px]

            lg:h-[650px]
            lg:w-[650px]
          "
        >
          {/* ========================================
              OUTER ORBIT
          ======================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[88%]
              w-[88%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-white/[0.055]
            "
          />

          {/* ========================================
              INNER ORBIT
          ======================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[59%]
              w-[59%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-white/[0.045]
            "
          />

          {/* ========================================
              CENTER ORBIT
          ======================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[35%]
              w-[35%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-white/[0.025]
            "
          />

          {/* ========================================
              CENTER GLOBE
          ======================================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-40
              flex
              h-[62px]
              w-[62px]
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.14]
              bg-[#292d31]
              text-white
              shadow-[0_10px_40px_rgba(0,0,0,0.35)]
              transition-all
              duration-300
              hover:scale-110
              hover:border-white/25
              hover:bg-[#32373c]
            "
          >
            <Globe className="h-7 w-7" aria-hidden="true" />
          </div>

          {/* ========================================
              SOCIAL ICONS
          ======================================== */}

          {coreSocialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.external ? "_blank" : undefined}
              rel={
                social.external
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={social.label}
              className={`
                social-node
                social-${social.position}

                group
                absolute
                z-30

                flex
                h-[50px]
                w-[50px]

                items-center
                justify-center

                rounded-full

                border
                border-white/[0.13]

                bg-[#2c3135]

                shadow-[0_8px_25px_rgba(0,0,0,0.25)]

                transition-all
                duration-300
                ease-out

                hover:scale-[1.14]
                hover:bg-[#343a3f]
                hover:border-white/25

                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white/40

                sm:h-[54px]
                sm:w-[54px]
              `}
              style={
                {
                  "--brand-color": social.color,
                  "--ring-color": social.ringColor,
                } as React.CSSProperties
              }
            >
              {/* Brand icon */}

              <span
                className="
                  relative
                  z-10
                  text-[21px]
                  transition-all
                  duration-300
                  group-hover:scale-110
                "
                style={{
                  color: social.color,
                }}
              >
                {getIcon(social.icon as string)}
              </span>

              {/* Brand glow */}

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-[-5px]
                  rounded-full
                  opacity-0
                  blur-md
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
                style={{
                  background: social.ringColor,
                }}
              />

              {/* Tooltip */}

              <span
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-full
                  z-50
                  mt-3
                  -translate-x-1/2
                  translate-y-1
                  whitespace-nowrap
                  rounded-md
                  border
                  border-white/10
                  bg-[#222528]/95
                  px-3
                  py-1.5
                  text-[10px]
                  font-medium
                  tracking-wide
                  text-white/80
                  opacity-0
                  shadow-xl
                  backdrop-blur-md
                  transition-all
                  duration-200
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                {social.label}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ========================================
          BOTTOM DOTS
      ======================================== */}

      <div
        className="
          absolute
          bottom-[52px]
          left-1/2
          flex
          -translate-x-1/2
          items-center
          gap-[7px]
        "
      >
        <span className="h-[5px] w-[5px] rounded-full bg-white/20" />

        <span className="h-[6px] w-[6px] rounded-full bg-white/55" />

        <span className="h-[5px] w-[5px] rounded-full bg-white/20" />
      </div>

      {/* ========================================
          FOOTER
      ======================================== */}

      <footer
        className="
          absolute
          bottom-5
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
        "
      >
        <p className="text-[10px] tracking-wide text-white/25">
          © {new Date().getFullYear()} Jyotirmaya Behera
        </p>
      </footer>

      {/* ========================================
          RESPONSIVE POSITIONING
      ======================================== */}

      {/* <style jsx>{`
        *
         * OUTER RING
         *
         * These positions intentionally mimic
         * the radial arrangement from your
         * reference screenshot.
         * */}

        {/* .social-facebook { top: 8%; left: 32%; } }
        .social-telegram { top: 8%; right: 28%; }
        .social-threads { top: 18%; right: 10%; }
        .social-github { top: 25%; left: 50%; transform: translateX(-50%); }
        .social-linkedin { top: 31%; right: 17%; }
        .social-youtube { top: 31%; left: 28%; }
        .social-quora { top: 25%; left: 10%; }
        .social-snapchat { top: 42%; left: 8%; }
        .social-instagram { bottom: 31%; left: 28%; }
        .social-x { bottom: 31%; right: 25%; }
        .social-reddit { bottom: 40%; right: 8%; }
        .social-pinterest { bottom: 20%; right: 29%; }
        .social-medium { bottom: 11%; left: 50%; transform: translateX(-50%); }
        .social-substack { bottom: 20%; left: 22%; }
        .social-email { bottom: 38%; left: 8%; }

        @media (max-width: 640px) {
          .social-facebook { top: 7%; left: 25%; }
          .social-telegram { top: 7%; right: 25%; }
          .social-threads { top: 18%; right: 5%; }
          .social-github { top: 25%; left: 50%; }
          .social-linkedin { top: 32%; right: 8%; }
          .social-youtube { top: 32%; left: 20%; }
          .social-quora { top: 25%; left: 5%; }
          .social-snapchat { top: 44%; left: 2%; }
          .social-instagram { bottom: 30%; left: 19%; }
          .social-x { bottom: 30%; right: 18%; }
          .social-reddit { bottom: 42%; right: 2%; }
          .social-pinterest { bottom: 19%; right: 23%; }
          .social-medium { bottom: 9%; left: 50%; }
          .social-substack { bottom: 19%; left: 13%; }
          .social-email { bottom: 39%; left: 2%; }
        }
      `</style> */}
    </main>
  );
}