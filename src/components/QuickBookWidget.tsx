"use client";
// components/QuickBookWidget.js
import { useEffect } from "react";

const QuickBookWidget = () => {
  useEffect(() => {
    const scriptId = "swiftbook-widget-script";

    // Prevent loading the script multiple times
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://settings.swiftbook.io/displaywidget/preview/booking-service.min.js?propertyId=361N9alzFVKPE8vjKbqVCVTEzMTg=&scriptId=361N9alzFVKPE8vjKbqVCVTEzMTg=";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      id="quickbook-widget-361N9alzFVKPE8vjKbqVCVTEzMTg=-361N9alzFVKPE8vjKbqVCVTEzMTg="
      className="Configure-quickBook-Widget"
    />
  );
};

export default QuickBookWidget;
