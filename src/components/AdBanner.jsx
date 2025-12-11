import { useEffect } from "react";

export default function AdBanner() {
  useEffect(() => {
    // Script inline atOptions
    const configScript = document.createElement("script");
    configScript.type = "text/javascript";
    configScript.innerHTML = `
    atOptions = {
  	    'key' : '18a6b1cf024ecab7fbabd391f8f36571',
  	    'format' : 'iframe',
  	    'height' : 60,
  	    'width' : 468,
  	    'params' : {}
      };
    `;
    document.body.appendChild(configScript);

    // Script eksternal invoke.js
    const invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.src = "//www.highperformanceformat.com/97539ad6f8ca20eee2cac37372501dac/invoke.js";
    invokeScript.async = true;
    document.body.appendChild(invokeScript);

    // Optional: cleanup saat unmount
    return () => {
      document.body.removeChild(configScript);
      document.body.removeChild(invokeScript);
    };
  }, []);

  return null; // tidak render apa pun ke halaman
}
