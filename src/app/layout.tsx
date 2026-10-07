import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";

const siteUrl = "https://saqibdevportfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Saqib | MERN Stack Developer",
    template: "%s | Saqib",
  },

  description:
    "Saqib — Md. Shahidul Islam Sakib, a MERN Stack Developer from Chattogram, Bangladesh, building modern full-stack web applications.",

  authors: [
    {
      name: "Md. Shahidul Islam Sakib",
      url: siteUrl,
    },
  ],

  creator: "Md. Shahidul Islam Sakib",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Saqib | MERN Stack Developer",
    description:
      "Saqib — Md. Shahidul Islam Sakib, a MERN Stack Developer from Chattogram, Bangladesh.",
    url: siteUrl,
    siteName: "Saqib",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Saqib | MERN Stack Developer",
    description:
      "Saqib — Md. Shahidul Islam Sakib, a MERN Stack Developer from Chattogram, Bangladesh.",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}