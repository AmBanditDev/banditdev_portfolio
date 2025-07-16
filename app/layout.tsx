import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AOSAnimate from "@/components/aos-animate";
import { GoogleTagManager } from '@next/third-parties/google'
import Head from "next/head";

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: "Thanwabandit Yoschamlue | Frontend Developer & Full Stack Developer",
  description: "I'm a new web developer with a passion for technology, eager to learn new things. I'm actively seeking opportunities to collaborate with expert teams to expand my capabilities and grow into a web specialist in the future.",
  alternates: {
    canonical: './',
  },
  metadataBase: new URL('https://thanwabandit-yoschamlue-portfolio.vercel.app/'),
  openGraph: {
    title: "Thanwabandit Yoschamlue | Frontend Developer & Full Stack Developer",
    description: "I'm a new web developer with a passion for technology, eager to learn new things. I'm actively seeking opportunities to collaborate with expert teams to expand my capabilities and grow into a web specialist in the future.",
    url: '/',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OG Image Portfolio Website',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Thanwabandit Yoschamlue | Frontend Developer & Full Stack Developer",
    description: "I'm a new web developer with a passion for technology, eager to learn new things. I'm actively seeking opportunities to collaborate with expert teams to expand my capabilities and grow into a web specialist in the future.",
    images: ['/og-image.png'],
    creator: "Mr.Thanwabandit Yoschamlue"
  }
};

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

      <body className={`${baiJamjuree.className} antialiased relative max-w-[700px] mx-auto overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Navbar />
          <main className="w-full overflow-hidden">
            {children}
            <AOSAnimate />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
