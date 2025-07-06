import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Script from "next/script";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains",
});

export const metadata = {
  title: "Vitor Ribeiro",
  description: "Portfólio Profissional",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">  
      <head>
        <script src="https://cdn.emailjs.com/sdk/3.2.0/email.min.js"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded"
          rel="stylesheet"
        />    
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M9HBZJLDB0"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M9HBZJLDB0');
          `}
        </Script> 
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
        {children}
        </PageTransition>
      </body>
      </html>
  );
}
