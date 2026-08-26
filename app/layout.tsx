import type { Metadata } from "next";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";

export const metadata: Metadata = {
  title: "Harshan Nayak — Software Engineer 2 | Agentic AI Specialist",
  description:
    "Portfolio of Harshan Nayak — Software Engineer 2 at HCLSoftware specializing in Agentic AI (BigFix AEX), Intelligent Runbook Automation (BigFix Runbook AI), Ansible, Red Hat AWX, and modern Next.js systems.",
  keywords: [
    "Harshan Nayak",
    "Agentic AI",
    "HCLSoftware",
    "BigFix AEX",
    "Runbook AI",
    "Ansible",
    "Red Hat AWX",
    "Next.js",
    "Convex",
    "IIITDM Jabalpur",
  ],
  authors: [{ name: "Harshan Nayak" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-black antialiased">
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
