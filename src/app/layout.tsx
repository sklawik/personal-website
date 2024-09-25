import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FaRegSadTear } from "react-icons/fa";
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

  const serviceConfig = await serversideUseConfig()




  return (
   
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased max-h-svh h-svh`}
        >
          <DynamicHeader/>
          {   serviceConfig.isServiceAccessible == true ? children : <div className="w-screen h-svh max-h-svh flex flex-row justify-center items-center gap-2 text-2xl">serwis jest offline <FaRegSadTear />
            </div>}
        </body>
      </html> 
  );
}
