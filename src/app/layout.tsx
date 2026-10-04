import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./global.css";
import { ThemeProvider } from "@/contexts/theme-context";

export const metadata: Metadata = {
  title: "MD. Shahidul Islam Sakib | MERN Stack Developer",

  description:
    "Full-stack developer portfolio of MD. Shahidul Islam Sakib, a MERN Stack Developer from Chattogram, Bangladesh.",

  alternates: {
    canonical: "https://saqibdevportfolio.vercel.app/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "MD. Shahidul Islam Sakib | MERN Stack Developer",

    description:
      "Full-stack developer portfolio of MD. Shahidul Islam Sakib, a MERN Stack Developer from Chattogram, Bangladesh.",

    url: "https://saqibdevportfolio.vercel.app/",

    siteName: "MD. Shahidul Islam Sakib",

    type: "website",
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