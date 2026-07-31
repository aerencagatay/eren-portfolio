import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

/* `latin-ext` is required for the Turkish glyphs (ğ, ı, ş, ç) used across the site. */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://aerencagatay.github.io/eren-portfolio";
const description =
  "Ahmet Eren Çağatay — Software Engineer at ATP Tradesoft building data-intensive, business-critical software for capital markets. B.S. in Computer Science Engineering with a Minor in Finance from Sabancı University. Python, SQL, C#/.NET, machine learning and anomaly detection.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ahmet Eren Çağatay — Software Engineer",
  description,
  keywords: [
    "Ahmet Eren Çağatay",
    "Software Engineer",
    "Fintech",
    "Capital Markets",
    "Backend Development",
    "Machine Learning",
    "Anomaly Detection",
    "Deep Learning",
    "Python",
    "SQL",
    "C#",
    ".NET",
    "PyTorch",
    "Sabancı University",
    "ATP Tradesoft",
    "İstanbul",
  ],
  authors: [{ name: "Ahmet Eren Çağatay" }],
  creator: "Ahmet Eren Çağatay",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ahmet Eren Çağatay",
    title: "Ahmet Eren Çağatay — Software Engineer",
    description,
    images: [
      {
        url: "/profile.jpg",
        alt: "Ahmet Eren Çağatay",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Ahmet Eren Çağatay — Software Engineer",
    description,
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0A]">{children}</body>
    </html>
  );
}
