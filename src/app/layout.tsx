import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import useService from "./hooks/useService";
import { FaRegSadTear } from "react-icons/fa";


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

  const isServiceOnline = await useService()

  

  return (
   
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          { isServiceOnline == true ? children : <div className="w-screen h-screen flex flex-row justify-center items-center gap-2 text-2xl">serwis jest offline <FaRegSadTear />
            </div>}
        </body>
      </html> 
  );
}
