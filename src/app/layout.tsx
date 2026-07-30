import type { Metadata } from "next";
import "./globals.css";

// Phase 1 uses the system font stack (see globals.css) so the app has zero
// external network dependencies at build time. Phase 2 selects and wires in
// the deliberate display/body/mono type pairing for the real design system.

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
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
