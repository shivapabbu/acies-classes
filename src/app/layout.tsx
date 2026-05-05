import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  title: {
    default: "ACIES Classes",
    template: "%s | ACIES Classes",
  },
  description:
    "ACIES Classes provides high-quality coaching with expert faculty, regular tests, and personal mentorship.",
  metadataBase: new URL(siteUrl),
  applicationName: "ACIES Classes",
  icons: {
    icon: [{ url: "/logo-square.jpeg", type: "image/jpeg" }],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "ACIES Classes",
    description:
      "ACIES Classes provides high-quality coaching with expert faculty, regular tests, and personal mentorship.",
    siteName: "ACIES Classes",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACIES Classes",
    description:
      "ACIES Classes provides high-quality coaching with expert faculty, regular tests, and personal mentorship.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
