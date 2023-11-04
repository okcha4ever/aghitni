// import { ClerkProvider } from "@clerk/nextjs";

import Header from "@/components/Header";
import Profile from "@/components/Profile";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import MySessionProvider from "@/providers/MySessionProvider";

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
  params,
}: {
  children: React.ReactNode;
  params: { session: Session };
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <MySessionProvider session={params.session}>
          <ReactQueryProvider>
            <Profile />
            <Header />
            {children}
            <Footer />
          </ReactQueryProvider>
        </MySessionProvider>
      </body>
    </html>
  );
}
