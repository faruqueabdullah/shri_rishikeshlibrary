import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  // variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  title: "Shri Rishikesh Library | Best library in Siwan",
  description: "The best library in affordable price.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <body className={`min-h-full flex flex-col ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
