import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DynamicHeader from "./components/DynamicHeader";
import { serversideUseConfig } from "./hooks/serversideUseConfig";


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
  title: "Sebastian Klawikowski",
  description: "Personal website of a passionate web developer ❤️​ ",
};



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  



  return (
   
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased max-h-svh h-svh`}
        >
          <DynamicHeader/>
          {children}
        </body>
      </html> 
  );
}
