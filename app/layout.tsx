import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STSC Department Overview",
  description: "Interactive presentation for the STSC Department with downloadable PowerPoint deck."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
