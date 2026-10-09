import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ContactChat from "@/components/ContactChat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jyotirmayabehera.com"),
  title: {
    default: "Jyotirmaya Behera — Full-Stack Developer & AI Builder",
    template: "%s | Jyotirmaya Behera",
  },
  description:
    "Jyotirmaya Behera is a software developer and AI engineer in Bhubaneswar, India, building AI/ML systems and high-performance web applications.",
  authors: [{ name: "Jyotirmaya Behera" }],
  creator: "Jyotirmaya Behera",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jyotirmayabehera.com",
    title: "Jyotirmaya Behera — Full-Stack Developer & AI Builder",
    description:
      "Jyotirmaya Behera is a software developer and AI engineer in Bhubaneswar, India, building AI/ML systems and high-performance web applications.",
    siteName: "Jyotirmaya Behera",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jyotirmaya Behera — Full-Stack Developer & AI Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jyotirmaya Behera — Full-Stack Developer & AI Builder",
    description:
      "Jyotirmaya Behera is a software developer and AI engineer building AI/ML systems and production full-stack applications.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://jyotirmayabehera.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/favicon_io/site.webmanifest",
};

const websiteJsonLd = `
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Jyotirmaya Behera",
    "url": "https://jyotirmayabehera.com",
    "description": "Jyotirmaya Behera is a software developer and AI engineer building AI/ML systems and full-stack web applications."
  }
`;

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: websiteJsonLd,
          }}
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--fg)] selection:bg-[var(--accent)] selection:text-white">
        <Navbar />
        <main id="main-content" className="flex-1 w-full" role="main">
          {children}
        </main>
        <ContactChat />
      </body>
    </html>
  );
}