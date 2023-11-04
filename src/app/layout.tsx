import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

import Header from "@/components/Header";
import Profile from "@/components/Profile";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Aghitni",
  description: "A web app to help the Palestinians in need. Made with love <3.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ReactQueryProvider>
          <body className={`font-sans ${inter.variable}`}>
            <Profile />
            <Header />
            {children}
            <Toaster />
          </body>
        </ReactQueryProvider>
      </html>
    </ClerkProvider>
  );
}
