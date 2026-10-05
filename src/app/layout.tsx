import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ContactChat from "@/components/ContactChat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jyotirmayabehera.com"),
  title: {
    default: "Jyotirmaya Behera | Software Developer",
    template: "%s | Jyotirmaya Behera",
  },
  description:
    "Jyotirmaya Behera is a software developer and Integrated MCA student at Utkal University, building AI/ML systems and full-stack applications with Python, React, Next.js, and modern web technologies.",
  authors: [{ name: "Jyotirmaya Behera" }],
  creator: "Jyotirmaya Behera",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jyotirmayabehera.com",
    title: "Jyotirmaya Behera | Software Developer",
    description:
      "Jyotirmaya Behera is a software developer and Integrated MCA student at Utkal University, building AI/ML systems and full-stack applications with Python, React, Next.js, and modern web technologies.",
    siteName: "Jyotirmaya Behera",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jyotirmaya Behera — Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jyotirmaya Behera | Software Developer",
    description:
      "Jyotirmaya Behera is a software developer and Integrated MCA student at Utkal University, building AI/ML systems and full-stack applications.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://jyotirmayabehera.com",
  },
};

// WebSite structured data - JSON-LD for Google
// This helps Google understand the website identity and name
const websiteJsonLd = `
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Jyotirmaya Behera",
    "url": "https://jyotirmayabehera.com",
    "description": "Jyotirmaya Behera is a software developer and Integrated MCA student at Utkal University, building AI/ML systems and full-stack applications."
  }
`;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(!s&&d)){document.documentElement.classList.add('dark');document.documentElement.setAttribute('data-theme','dark');}else{document.documentElement.classList.remove('dark');document.documentElement.setAttribute('data-theme','light');}}catch(e){}})();`,
          }}
        />
        <script
          async
          dangerouslySetInnerHTML={{
            __html: websiteJsonLd
          }}
        />
        {/* Favicon - automatically served from public/favicon.ico */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--fg)]">
        <Navbar />
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
        <ContactChat />
      </body>
    </html>
  );
}