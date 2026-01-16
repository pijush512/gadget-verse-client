import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "./(main)/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GadgetVerse",
  description:
    "Explore the latest tech and gadgets with a seamless shopping experience.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainLayout>
          {children}
        </MainLayout>

      </body>
    </html>
  );
}


