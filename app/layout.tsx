import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Poppins } from "next/font/google";
import { GADS, HERO } from "./lib/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: HERO.brand.title,
  description: "Makeup, beautician, hair and nail courses at VLCC School of Beauty, Alambagh, Lucknow. Practical training and certificate.",
  robots: { index: false, follow: false }, // ads landing page: keep out of Google search
};

export const viewport: Viewport = { themeColor: "#004785" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GADS.id}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GADS.id}');`}
        </Script>
      </body>
    </html>
  );
}
