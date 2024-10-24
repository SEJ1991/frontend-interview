import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Script from "next/script";

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
  title: "Frontend Interview",
  description: "practice frontend interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="initial-environment-script"
        dangerouslySetInnerHTML={{
          __html: `
          const initVh = document.documentElement.clientHeight * 0.01;
          document.documentElement.style.setProperty('--full-px', initVh + 'px');

          const handleResize = () => {
            const newVh = document.documentElement.clientHeight * 0.01;
            document.documentElement.style.setProperty('--full-px', (newVh < 6 ? 6 : newVh) + 'px');
          };

          window.addEventListener('resize', handleResize);
          `,
        }}
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-auto h-full-vh`}
      >
        {children}
      </body>
    </html>
  );
}
