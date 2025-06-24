import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // ✅ Import your Navbar component

// Load fonts from Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Optional metadata used by Next.js for SEO
export const metadata = {
  title: "Soul Circle", // updated to your app name
  description: "Connect and grow with your circle",
};

// ✅ This RootLayout wraps all pages in your app
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Navbar will show on every page */}
       

        {/* ✅ Render the actual page content below the Navbar */}
        <main>{children}</main>
      </body>
    </html>
  );
}
