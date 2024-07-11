import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ebGaramond = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  title: "Camping in Mussoorie | Glamping near Dehradun - EBC Mussoorie",
  description:
    "EBC Mussoorie is the best luxury resorts in mussoorie. We are offering camping in near mussorie, dehradun, rishikesh, dehradun and near Delhi. Visit our Property!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-55R39KSH');
        `,
          }}
        />
        {/* Kiwi SDK */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,c,r,a,m){
            w['KiwiObject']=r;
            w[r]=w[r] || function () {
              (w[r].q=w[r].q||[]).push(arguments)};
            w[r].l=1*new Date();
            a=d.createElement(s);
            m=d.getElementsByTagName(s)[0];
            a.async=1;
            a.src=c;
            m.parentNode.insertBefore(a,m)
          })(window,document,'script',"https://app.interakt.ai/kiwi-sdk/kiwi-sdk-17-prod-min.js?v="+ new Date().getTime(),'kiwi');
          window.addEventListener("load",function () {
            kiwi.init('', '6Drc1F8ThlrVVOwqfo7ZJl4KsPZtnrob', {});
          });
        `,
          }}
        />

        {/* End Google Tag Manager */}
      </head>
      <body suppressHydrationWarning={true} className={ebGaramond.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-55R39KSH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
