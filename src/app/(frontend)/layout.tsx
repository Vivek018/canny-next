import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ProviderWrapper } from "./_components/ProviderWrapper";
import { cn } from "@/libs/cn";
import { Header } from "./_components/Header";
import { siteConfig } from "./_constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: siteConfig.icons,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(inter.className)}>
        <ProviderWrapper attribute='class' defaultTheme='system' enableSystem>
          <Header />
          {children}
        </ProviderWrapper>
      </body>
    </html>
  );
}
