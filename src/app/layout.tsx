import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oracle × Microsoft IQ — Progression Demo Portal",
  description:
    "How AI agents grounded on Oracle Fusion data get progressively smarter as Microsoft IQ layers — Fabric IQ, Foundry IQ, Work IQ — are added. Executive demo portal.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen font-sans antialiased text-white">
        {children}
      </body>
    </html>
  );
}
