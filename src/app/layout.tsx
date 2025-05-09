import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
  mantineHtmlProps,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import '@mantine/notifications/styles.css';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Drawer } from "@/components/Drawer";
import "./globals.css";
import QueryProvider from "@/Providers/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coşkun Mermerit",
  description: "Hazır Mutfak Döküm Tipi Mutfak Tezgahları",
};

const theme = createTheme({
  breakpoints: {
    xxl: "1600px",
  }
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
         <link rel="icon" href="/logo.webp" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} vsc-initialized`}
      >
        <QueryProvider>
          <MantineProvider theme={theme}>
            <Notifications />
            <Header />
            <Drawer />
            {children}
            <Footer />
          </MantineProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
