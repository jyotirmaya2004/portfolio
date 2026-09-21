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
  title: "Jyotirmaya Behera | Integrated MCA Student & Software Developer",
  description:
    "Portfolio of Jyotirmaya Behera - Integrated MCA student at Utkal University, Bhubaneswar. Software developer with interests in AI/ML, full-stack web development, and modern technologies.",
  keywords: [
    "Jyotirmaya Behera",
    "Software Developer",
    "Integrated MCA",
    "Utkal University",
    "Bhubaneswar",
    "AI/ML",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Jyotirmaya Behera" }],
  creator: "Jyotirmaya Behera",
  publisher: "Jyotirmaya Behera",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jyotirmaya.dev",
    title: "Jyotirmaya Behera | Software Developer Portfolio",
    description:
      "Portfolio of Jyotirmaya Behera - Integrated MCA student and software developer showcasing projects in AI/ML, web development, and more.",
    siteName: "Jyotirmaya Behera Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jyotirmaya Behera | Software Developer Portfolio",
    description:
      "Portfolio of Jyotirmaya Behera - Integrated MCA student and software developer.",
    creator: "@jyotirmaya_dev",
  },
  icons: {
    icon: "/images/profile.jpeg",
    shortcut: "/images/profile.jpeg",
    apple: "/images/profile.jpeg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f9f7" },
    { media: "(prefers-color-scheme: dark)",  color: "#111111" },
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
        <link rel="icon" href="/images/profile.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/profile.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(!s&&d)){document.documentElement.classList.add('dark');document.documentElement.setAttribute('data-theme','dark');}else{document.documentElement.classList.remove('dark');document.documentElement.setAttribute('data-theme','light');}}catch(e){}document.addEventListener('copy',function(e){var t=e.target;if(t&&(t.tagName==='INPUT'||t.tagName==='TEXTAREA'||t.isContentEditable))return;e.preventDefault();});document.addEventListener('cut',function(e){var t=e.target;if(t&&(t.tagName==='INPUT'||t.tagName==='TEXTAREA'||t.isContentEditable))return;e.preventDefault();});})();`,
          }}
        />
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