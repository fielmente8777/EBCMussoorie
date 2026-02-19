import Navbar from "@/components/navbar/Navbar";
import { EB_Garamond } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { FaPhone } from "react-icons/fa6";
import Footer from "../components/Footer";
import "./globals.scss";
import { WebProvider } from "@/contextApi/WebContext";
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
        <meta
          name="google-site-verification"
          content="vKQyk75wG0kfB4x60GCRAmVeErtPS9rgcM9-YNRAvLw"
        />
        {/* Pagesense Script */}
        <Script
          id="pagesense-script"
          strategy="afterInteractive"
          src="https://cdn-in.pagesense.io/js/everestbasecamp/3adab655c63f4325a1ea20ce11472e97.js"
        ></Script>

        {/* Zoho Script */}
        {/* <Script id="zoho-script" strategy="afterInteractive">
          {`window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}`}
        </Script>
        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.in/widget?wc=siq4bc7d026b8b5ab8b6663b74417f0678eeb748dabce26466abbf4b7a2765b5550"
        ></Script> */}
        {/* <Script
          type="text/javascript"
          strategy="afterInteractive"
          id="zsiqscript"
        >
          {`var $zoho= $zoho ||  {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"siq4bc7d026b8b5ab8b6663b74417f0678eeb748dabce26466abbf4b7a2765b5550", values:{},ready:function(){$zoho.salesiq.floatbutton.visible("");}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.in/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);`}
        </Script> */}
        {/* Clarity Script */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "n65gwfsc82");
            `,
          }}
        />
        {/* Sales iq  */}
        {/* Google Tag Manager */}
        {/* Google Tag Manager */}

        {/* Kiwi SDK */}
        {/* <Script
          id="kiwi-sdk-script"
          strategy="afterInteractive"
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
        /> */}
        {/* Meta Pixel Code */}
        <Script id="fb-pixel" strategy="lazyOnload">
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '710265047232004');
            fbq('track', 'PageView');
            `}
        </Script>
        <noscript>
          <Image
            height="1"
            width="1"
            alt="fb-pixel"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=710265047232004&ev=PageView&noscript=1"
          />
        </noscript>

        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PVZG7NGGMG"
        ></Script>
        <Script
          id="google-analytics-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PVZG7NGGMG');
        `,
          }}
        />
        {/* <!-- ASKSUITE CODE START --> */}

        {/* <Script id="script-infochat" src='https://cdn.asksuite.com/infochat.js?dataConfig=https://control.asksuite.com/api/companies/everest-base-camp-mussoorie'/> */}

        {/* <!-- ASKSUITE CODE END --> */}
        <Script
          id="google-tag-manager-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T36V8385');
           `,
          }}
        />
      </head>
      <body className={ebGaramond.className} suppressHydrationWarning={true}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T36V8385"
            height="0"
            width="0"
            title="Google Tag Manager (noscript)"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <WebProvider>
          <Navbar />
          {children}
          <Footer />
          <Link
            href={"tel:+919119001126"}
            target="_blank"
            className="whatsapp-button inline-block fixed bottom-12 left-[20px] w-[50px] h-[50px] bg-[#12c665] p-[12px]  rounded-full text-white z-40 text-[25px] overflow-hidden"
          >
            <span className="sr-only">call button</span>
            <FaPhone className="transform" />
          </Link>
        </WebProvider>
        {/* <WhatsApp /> */}
        <Script id="chatbot" strategy="beforeInteractive">
          {`window.eazbotConfig = {
            ndid: "e53a0946-ed31-455f-b278-37aa1b0c8c00",
            hid: "56369483",
          };`}
        </Script>
        <Script src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"></Script>
      </body>
    </html>
  );
}
