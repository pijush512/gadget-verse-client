import { Orbitron, Poppins, Outfit } from "next/font/google";
import "./globals.css";
import MainLayout from "./(main)/layout";
import { Toaster } from 'react-hot-toast';
const navFont = Orbitron({
  variable: "--font-nav",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bodyFont = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const headingFont = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
        className={`${navFont.variable} ${headingFont.variable} ${bodyFont.variable} font-body antialiased`}
      >
        <Toaster position="top-center" reverseOrder={false} />
        <MainLayout>
          {children}
        </MainLayout>

      </body>
    </html>
  );
}


