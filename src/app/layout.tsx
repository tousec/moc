import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@/redux/provider';
import { ToastContainer } from 'react-toastify';
import NextAuthProvider from './auth/components/SessionProvider';

import { HeaderMainNav } from "@/components/common/main-nav-component/main-nav";
import { MainFooterComponent } from "@/components/common/main-footer/main-footer";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Stars/' English Centre",
  description: "IELTS, Kids' English, Spoken English",
  manifest: '/manifest.json',
  icons: {
    apple: '/icons/icon-192x192.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextAuthProvider>
          <ReduxProvider>
            {/* <NavLayoutTemplate /> */}
            {/* {children} */}
            {/* <MainFooter /> */}
            <div className="z-50 max-w-7xl mx-auto">
        <HeaderMainNav />
        </div>
        {children}
        <MainFooterComponent />
          </ReduxProvider>
        </NextAuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
