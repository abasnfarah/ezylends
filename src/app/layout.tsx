import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "grainy min-h-screen bg-background font-sans antialiased absolute",
          inter.className,
          inter.variable,
        )}
      >
        <div className="inset-1 h-full w-full object-cover from-green-900 to-blue-900 absolute mix-blend-overlay" />
        {children}
      </body>
    </html>
  );
}
