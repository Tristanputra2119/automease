import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Automease — Automation Website",
  description:
    "Automease membantu mengotomatiskan pekerjaan Anda dengan sistem yang cepat, aman, dan efisien.",

  keywords: [
    "automation",
    "automease",
    "automation tools",
    "task automation",
    "web automation",
  ],

  openGraph: {
    title: "Automease — Automation Website",
    description:
      "Automease membantu mengotomatiskan pekerjaan Anda dengan sistem yang cepat, aman, dan efisien.",
    url: "https://automease.vercel.app",
    siteName: "Automease",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Automease Preview",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Automease — Automation Website",
    description:
      "Automease membantu mengotomatiskan pekerjaan Anda dengan sistem yang cepat, aman, dan efisien.",
    images: ["/logo.png"],
  },

  // Search engine robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="antialiased">{children}</body>
    </html>
  );
}
