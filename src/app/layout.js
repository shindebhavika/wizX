
// "use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatePresence } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "wizX_FullStack_Assignment",
  description: "wizX_FullStack_Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pl-1 pr-1`}
      >
        <AnimatePresence
      mode="wait"
      initial={true}
      // onExitComplete={() => window.scrollTo(0, 0)}
    >        {children}</AnimatePresence>

      </body>
    </html>
  );
}
