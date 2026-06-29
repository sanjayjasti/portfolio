import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl = "https://portfolio-sable-tau-b7ysjwnjns.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jasti Sanjay | AI/ML Student & Developer",
    template: "%s | Jasti Sanjay",
  },
  description:
    "Portfolio of Jasti Sanjay — B.Tech student specializing in Artificial Intelligence & Machine Learning. Building practical AI solutions and full-stack applications.",
  keywords: [
    "Jasti Sanjay",
    "AI Student",
    "Machine Learning",
    "Deep Learning",
    "Python Developer",
    "LSTM",
    "Stock Prediction",
    "Full Stack",
    "B.Tech AIML",
    "Portfolio",
    "Data Analytics",
  ],
  authors: [{ name: "Jasti Sanjay", url: siteUrl }],
  creator: "Jasti Sanjay",
  verification: {
    google: "google18471c02441f3e2b.html",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Jasti Sanjay — Portfolio",
    title: "Jasti Sanjay | AI/ML Student & Developer",
    description:
      "B.Tech student specializing in AI & ML. Building practical solutions including LSTM-based stock prediction and real-time chat applications.",
    images: [
      {
        url: "/assets/profile.png",
        width: 1200,
        height: 630,
        alt: "Jasti Sanjay — AI/ML Student & Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasti Sanjay | AI/ML Student & Developer",
    description:
      "B.Tech student specializing in AI & ML. Building practical solutions including LSTM-based stock prediction and real-time chat applications.",
    images: ["/assets/profile.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jasti Sanjay",
  url: siteUrl,
  jobTitle: "AI/ML Student & Developer",
  description:
    "B.Tech student specializing in Artificial Intelligence & Machine Learning, building practical AI solutions and full-stack applications.",
  sameAs: [
    "https://github.com/sanjayjasti18",
    "https://www.linkedin.com/in/jasti-sanjay/",
    "https://leetcode.com/u/sanjay_jasti/",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "LSTM Networks",
    "Python",
    "TensorFlow",
    "Keras",
    "Stock Prediction",
    "Data Analytics",
    "Full Stack Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
