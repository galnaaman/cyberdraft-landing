import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  metadataBase: new URL('https://cyberdraft.ai'),
  title: "CyberDraft - Cybersecurity Training & Career Accelerator | No Degree Required",
  description: "Launch your $100K+ cybersecurity career in weeks, not years. Master ethical hacking, penetration testing, and cyber defense with hands-on training. Join 2,000+ successful graduates.",
  keywords: [
    "cybersecurity training",
    "ethical hacking course",
    "penetration testing certification",
    "cybersecurity bootcamp",
    "cybersecurity career change",
    "cybersecurity without degree",
    "cyber security jobs",
    "information security training",
    "cybersecurity certification",
    "incident response training"
  ],
  authors: [{ name: "CyberDraft Team" }],
  creator: "CyberDraft",
  publisher: "CyberDraft",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cyberdraft.ai",
    siteName: "CyberDraft",
    title: "CyberDraft - Launch Your $100K+ Cybersecurity Career Fast",
    description: "Skip expensive bootcamps. Master cybersecurity with hands-on training, real-world missions, and step-by-step career guidance. Start your 7-day jumpstart today.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CyberDraft Cybersecurity Training Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberDraft - Launch Your Cybersecurity Career Fast",
    description: "Master ethical hacking & cyber defense. Get job-ready skills without expensive bootcamps or degrees.",
    images: ["/twitter-image.jpg"],
    creator: "@cyberdraft",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://cyberdraft.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://cyberdraft.ai/#organization",
        "name": "CyberDraft",
        "url": "https://cyberdraft.ai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://cyberdraft.ai/logo.png",
          "width": 240,
          "height": 60
        },
        "description": "Leading cybersecurity training platform helping professionals launch high-paying careers without traditional degrees.",
        "sameAs": [
          "https://www.facebook.com/share/g/1CNaskQy22/",
          "https://twitter.com/cyberdraft"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://cyberdraft.ai/#website",
        "url": "https://cyberdraft.ai",
        "name": "CyberDraft - Cybersecurity Training Platform",
        "description": "Launch your $100K+ cybersecurity career with hands-on training, ethical hacking missions, and job-ready skills.",
        "publisher": {
          "@id": "https://cyberdraft.ai/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": "https://cyberdraft.ai/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "Course",
        "name": "7-Day Cyber Jumpstart",
        "description": "Intensive cybersecurity fundamentals course covering ethical hacking, penetration testing, and defense strategies.",
        "provider": {
          "@id": "https://cyberdraft.ai/#organization"
        },
        "courseMode": "online",
        "educationalLevel": "Beginner to Intermediate",
        "teaches": [
          "Ethical Hacking",
          "Penetration Testing", 
          "Incident Response",
          "Vulnerability Assessment",
          "Cybersecurity Defense"
        ],
        "offers": {
          "@type": "Offer",
          "category": "Education",
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
