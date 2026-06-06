import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import PageLoader from "@/components/ui/PageLoader";
import FloatingCta from "@/components/ui/FloatingCta";


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KlevraX | Premium AI + VR Mental Healthcare Platform",
  description: "Reimagining mental healthcare. Experience personalized, immersive VR therapy powered by medical-grade artificial intelligence and neural network diagnostics.",
  keywords: ["Mental Healthcare", "Virtual Reality Therapy", "AI Mental Health", "VR Therapy", "Biofeedback", "Clinical VR", "Headspace for VR", "Neurology AI"],
  authors: [{ name: "KlevraX Team" }],
  openGraph: {
    title: "KlevraX | Premium AI + VR Mental Healthcare",
    description: "Reimagining mental healthcare. Experience personalized, immersive VR therapy powered by medical-grade artificial intelligence.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "KlevraX | AI + VR Mental Healthcare",
    description: "Experience personalized, immersive therapy powered by artificial intelligence and virtual reality.",
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
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-dark text-white font-sans selection:bg-primary selection:text-white">
        <PageLoader />
        <CustomCursor />
        <FloatingCta />
        {children}
      </body>
    </html>
  );
}
