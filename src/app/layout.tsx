import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Advitiya 2K25 🔥",
  description:
    "Advitiya 2k25 🔥 is the college event conducted by CSEDS RGMCET #advitiyians #rgmcet #cseds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <div className="flex flex-col h-screen">
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          {children}

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
