"use client";
import { usePathname } from "next/navigation";
import Script from "next/script";
const Salesiq = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/ebclanding/" && (
        <>
          <Script id="zoho-init" strategy="afterInteractive">
            {`
          window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}
          `}
          </Script>
          <Script
            id="zsiqscript"
            src="https://salesiq.zohopublic.in/widget?wc=siq6e7cc99577f935a7f4d7407e0f3dc2a9d77b6293d0d9170ce605aa26f046fde7"
            strategy="afterInteractive"
            defer
          />
        </>
      )}
    </>
  );
};

export default Salesiq;
