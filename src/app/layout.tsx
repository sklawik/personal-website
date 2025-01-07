import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DynamicHeader from "./components/DynamicHeader";
import Footer from "./components/Footer";

import ServiceOffline from "./serviceOffline/page";
import { getPrisma } from "./hooks/getPrisma";
import Header from "./components/ui/Header";
import ClientSideWrapper from "./components/ui/ClientSideWrapper";

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
  title: "Stronka personalna",
  description: "Portfolio i blog w trakcie budowy napisany w NextJS15​ ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const prisma = getPrisma();
  const data = await prisma?.serviceConfig.findFirst();
  if (!data) {
    await prisma?.serviceConfig.create({
      data: {
        isServiceAccessible: true,
      },
    });
    await prisma?.role.createMany({
      data: [
        { name: "Everyone", hexColor: "#ffffff", globalPermissions: 0 },
        { name: "Superuser", hexColor: "#ff0000", globalPermissions: 255 },
      ],
    });
    await prisma?.user.create({
      data: {
        displayName: "Administrator",
        email: "admin@localhost",
        password: "",
      },
    });

    const JWT_SECRET = process.env.JWT_SECRET;
    let cookieToSet = "";
    const secret = new TextEncoder().encode(JWT_SECRET);
  }
  const isServiceOnline = data?.isServiceAccessible;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  max-h-svh h-svh`}
      >
        <ClientSideWrapper>
          <DynamicHeader />
          {isServiceOnline ? children : <ServiceOffline />}
        </ClientSideWrapper>
      </body>
    </html>
  );
}
