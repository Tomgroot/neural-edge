import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neural Edge",
  description: "Private on-site AI deployment with personal support",
};

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
      <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"/>
      <link rel="icon" href="/neural-edge-icon.png" sizes="any" />
    </head>
    <body
        className="font-dm-sans antialiased dark"
    >
    {children}
    </body>
    </html>
  );
}
