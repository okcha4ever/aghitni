// import { ClerkProvider } from "@clerk/nextjs";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import MySessionProvider from "@/providers/MySessionProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import "@/styles/globals.css";
import { Session } from "next-auth";
import { Inter } from "next/font/google";

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
