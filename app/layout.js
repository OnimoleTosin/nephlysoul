import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Nephly Soul",
  description: "Connect and grow with your circle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
<link rel="icon" href="/my-logo.png" />
        {/* Optional: other favicon types */}
        {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} antialiased font-nunito`}
      >
        {/* Navbar */}

        <main>{children}</main>
        <ToastContainer/>
      </body>
    </html>
  );
}

