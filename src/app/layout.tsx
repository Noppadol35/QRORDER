import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CustomProvider } from "./provider";
import "../globals.css";
import Nav from "../components/Nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buffet Order System",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CustomProvider>
      <html lang="en">
        <body className={inter.className}>
          <Nav />
          {children}
          </body>
      </html>
    </CustomProvider>
  );
}
