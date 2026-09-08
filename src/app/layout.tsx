import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollReset from "@/components/ScrollReset";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#080b11" },
  ],
};

export const metadata: Metadata = {
  title: "NOVA — Workflow Automation for Modern Teams",
  description:
    "NOVA connects your stack into reliable, automated pipelines. Eliminate repetitive status updates, route approvals instantly, and orchestrate complex workflows across engineering, product, and ops.",
  keywords: [
    "workflow automation",
    "developer tools",
    "automated pipelines",
    "engineering workflows",
    "approval routing",
    "bi-directional sync",
    "no-code workflow builder",
  ],
  authors: [{ name: "NOVA Technologies" }],
  openGraph: {
    title: "NOVA — Workflow Automation for Modern Teams",
    description:
      "Connect your tools, automate routine operations, and orchestrate complex business logic with visual workflows and autonomous triggers.",
    type: "website",
    siteName: "NOVA",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOVA — Workflow Automation for Modern Teams",
    description:
      "Connect your tools, automate routine operations, and orchestrate complex business logic with visual workflows and autonomous triggers.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NOVA",
  applicationCategory: "BusinessApplication",
  operatingSystem: "All",
  description:
    "Workflow automation platform that connects developer and business tools into automated pipelines with sub-second event triggers.",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "0",
    highPrice: "18",
    priceCurrency: "USD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme")||"light";if(t==="dark"){document.documentElement.classList.add("dark");}else{document.documentElement.classList.remove("dark");}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--amber)] focus:text-[var(--text-on-amber)] focus:font-semibold focus:shadow-xl focus:rounded-sm focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <ScrollReset />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
