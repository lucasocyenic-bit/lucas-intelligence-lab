import type { Metadata } from "next";

// Self-hosted font files (npm packages, not next/font/google) — zero
// external network dependency at build time, works in any CI/offline
// environment. See ARCHITECTURE.md.
import "@fontsource-variable/bricolage-grotesque/wght.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "Lucas // Intelligence Lab",
  description:
    "AI systems, agentic architecture, and creative technology by Lucas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background font-body text-foreground">
        {children}
      </body>
    </html>
  );
}
