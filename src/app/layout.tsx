import type {Metadata} from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Neural Edge: On-Premise Local AI Machines made in Eindhoven",
  description: "Secure your data with Neural Edge's on-site AI machines. Tailored AI tools, top-tier hardware," +
      "and local support in Eindhoven. Explore our customizable plans starting at €150 per month.",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link rel="icon" href="/neural-edge-icon.png" sizes="any" />
    </head>
    <body className={`${dmSans.className} antialiased dark`}>
    {children}
    </body>
    </html>
  );
}
