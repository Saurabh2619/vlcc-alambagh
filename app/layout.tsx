import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Poppins } from "next/font/google";
import { GADS, HERO } from "./lib/site";
import ContactTracker from "./components/ContactTracker";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Microsoft Clarity (session recordings + heatmaps). Set NEXT_PUBLIC_CLARITY_ID in Vercel.
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "zcxl4lms79";

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
        <ContactTracker />
        <Analytics />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GADS.id}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GADS.id}',{allow_enhanced_conversions:true});`}
        </Script>
        {CLARITY_ID && (
          <Script id="clarity" strategy="lazyOnload">
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
          </Script>
        )}
      </body>
    </html>
  );
}
