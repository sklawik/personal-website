import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DynamicHeader from "./components/DynamicHeader";
import Footer from "./components/Footer";

import ServiceOffline from "./serviceOffline/page";
import { headers } from "next/headers";


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


  const url = headers().get('referer')
  let theURL = null
  if(url){
     theURL = new URL(url)
  }
  
  let globalConfig = await import('@/app/app.config')



  return (
   
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased max-h-svh h-svh`}
        >
          <DynamicHeader/>
  { (globalConfig.isServiceAccessible || theURL?.pathname.startsWith('/admin')) ==true ? children : <ServiceOffline/>}
          <Footer></Footer>
        </body>
      </html> 
  );
}
