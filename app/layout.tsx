import type { Metadata } from "next";
import "./globals.css";
import { exo2, expletusSans } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
  title: {
    default: "Cosmic Furniture | A New Dimension of Luxury Living",
    template: "%s | Cosmic Furniture",
  },

  description:
    "Discover a new dimension of luxury living with Cosmic Furniture. Explore futuristic sofas, statement chairs and incredible beds, where innovative design meets exceptional comfort.",

  keywords: [
    "Cosmic Furniture",
    "luxury furniture",
    "designer furniture",
    "modern luxury furniture",
    "futuristic furniture",
    "contemporary home interiors",
    "premium home furnishings",
  ],

  openGraph: {
    title: "Cosmic Furniture | A New Dimension of Luxury Living",
    description:
      "Transform your space with futuristic design and exceptional comfort. Discover statement sofas, chairs and beds at Cosmic Furniture.",
    siteName: "Cosmic Furniture",
    type: "website",
    locale: "en_GB",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cosmic Furniture | A New Dimension of Luxury Living",
    description:
      "Explore futuristic luxury furniture for every room. Discover statement sofas, chairs and beds.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${exo2.variable} ${expletusSans.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
