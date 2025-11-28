import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "@/Components/PrelineScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Impact English",
  description:
    "At Impact English, we go beyond textbooks, focusing on real-world English for IELTS success. Our tailored resources ensure confident progress without overwhelm.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
    </head>
      <body className={inter.className}>{children}</body>
      <PrelineScript />
    </html>
  );
}
