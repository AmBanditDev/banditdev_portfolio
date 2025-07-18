import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AOSAnimate from "@/components/aos-animate";
import { GoogleTagManager } from '@next/third-parties/google'
import Head from "next/head";
import { SEO } from "@/lib/constants";

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "600", "700"]
})

export const metadata: Metadata = SEO.HOME

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
      </Head>

      <GoogleTagManager gtmId="GTM-MGV65R6W" />

      <body className={`${baiJamjuree.className} antialiased relative mx-auto overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="max-w-[700px] mx-auto px-4 lg:px-0">
            <Navbar />
            <main className="w-full">
              {children}
              <AOSAnimate />
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
