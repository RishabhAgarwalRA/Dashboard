import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Modern Dashboard Interface",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex">
          <Sidebar />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
