import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maithil's Terminal Studio",
  description: "Developer terminal - Building apps, systems, and digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0a0e27] text-[#00ff00] font-mono">
        {children}
      </body>
    </html>
  );
}
