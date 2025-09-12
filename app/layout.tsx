import type { Metadata } from "next";
import { Asap } from "next/font/google";
import "./globals.css";

const asap = Asap({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ditin Agrawal - Software Engineer",
  description:
    "Ditin Agrawal is a passionate software engineer / Full Stack Developer with a knack for building web applications and exploring new technologies.",
  keywords: [
    "ditin agrawal",
    "software engineer",
    "full stack developer",
    "web developer",
    "portfolio",
    "link tree",
    "resume",
    "portfolio template",
  ],
  authors: [{ name: "Ditin Agrawal" }],
  creator: "Ditin Agrawal",
  publisher: "Ditin Agrawal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ditin.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ditin.in",
    siteName: "Ditin Agrawal - Software Engineer",
    title: "Ditin Agrawal - Software Engineer",
    description:
      "Ditin Agrawal is a passionate software engineer / Full Stack Developer with a knack for building web applications and exploring new technologies.",
    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 630,
        alt: "Ditin Agrawal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ditin Agrawal - Software Engineer",
    description:
      "Ditin Agrawal is a passionate software engineer / Full Stack Developer with a knack for building web applications and exploring new technologies.",
    images: ["/og.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${asap.className} antialiased`}>{children}</body>
    </html>
  );
}
