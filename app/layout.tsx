import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ICFEC 2026 - IEEE International Conference on Fog and Edge Computing',
  description: 'ICFEC2026 - 10th IEEE International Conference on Fog and Edge Computing. Submit your research on fog computing, edge computing, IoT, and distributed systems.',
  keywords: [
    'ICFEC',
    'ICFEC2026', 
    'ICFEC 2026',
    'icfec2026',
    'icfec 2026',
    'IEEE ICFEC',
    'fog computing',
    'edge computing',
    'IoT',
    'distributed systems',
    'cloud computing',
    'computer science conference',
    'IEEE conference',
    'International Conference on Fog and Edge Computing',
    'fog and edge computing',
    'edge AI',
    'distributed computing',
    'mobile edge computing',
    'edge networks'
  ],
  authors: [{ name: 'ICFEC 2026 Organizing Committee' }],
  creator: 'wnsah814',
  publisher: 'IEEE',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://icfec2026.hanyang.ac.kr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ICFEC 2026 - IEEE International Conference on Fog and Edge Computing',
    description: 'ICFEC2026 - 10th IEEE International Conference on Fog and Edge Computing. Submit your research on fog computing, edge computing, IoT, and distributed systems.',
    url: 'https://icfec2026.hanyang.ac.kr',
    siteName: 'ICFEC 2026',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/1_SydneyAerial.jpg',
        width: 1200,
        height: 630,
        alt: 'ICFEC 2026 - IEEE International Conference on Fog and Edge Computing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICFEC 2026 - IEEE International Conference on Fog and Edge Computing',
    description: 'ICFEC2026 - 10th IEEE International Conference on Fog and Edge Computing',
    images: ['/images/1_SydneyAerial.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Website developed by wnsah814 */}
        <meta name="developer" content="wnsah814" />
        <meta name="generator" content="Next.js - Developer: wnsah814" />
        {/* 추가적인 SEO 개선을 위한 스키마 마크업 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@type": "Event",
              "name": "ICFEC 2026 - IEEE International Conference on Fog and Edge Computing",
              "description": "10th IEEE International Conference on Fog and Edge Computing",
              "url": "https://icfec2026.hanyang.ac.kr",
              "location": {
                "@type": "Place",
                "name": "Hanyang University",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "222 Wangsimni-ro, Seongdong-gu",
                  "addressLocality": "Seoul",
                  "addressCountry": "KR"
                }
              },
              "organizer": {
                "@type": "Organization",
                "name": "IEEE",
                "url": "https://www.ieee.org"
              },
              "contributor": {
                "@type": "Person",
                "name": "wnsah814",
                "@id": "https://github.com/wnsah814"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://icfec2026.hanyang.ac.kr",
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}