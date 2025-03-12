import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

const soraFont = Sora({
  weight: ['100', '200', '300', '400',  '500', '600', '700', '800'],
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "Igor Colombini Portfolio",
  description: "Potifolio com NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${soraFont.className} antialiased`} >
        <ResponsiveNav/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
