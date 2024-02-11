import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const revalidate = 10


export const metadata: Metadata = {
  title: "Picxo image bank",
  description: "Get access to high quality images at your fingertips",
  // icons:{
  //   icon:"https://example.com/icon.png",
  //   apple:"https://example.com/apple-icon.png"
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-4xl mx-auto" >
           {children}
        </main>
      </body>
    </html>
  );
}
