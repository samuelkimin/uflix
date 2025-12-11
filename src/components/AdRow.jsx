import { useEffect } from "react";

export default function AdRow() {
  useEffect(() => {
    const anchor = document.getElementById("ad-row-anchor");
    if (!anchor) return;

    const createAd = () => {
      const wrapper = document.createElement("div");
      wrapper.className = "ad-item";

      const configScript = document.createElement("script");
      configScript.innerHTML = `
        atOptions = {
          'key': '97539ad6f8ca20eee2cac37372501dac',
          'format': 'iframe',
          'height': 50,
          'width': 320,
          'params': {}
        };
      `;

      const invokeScript = document.createElement("script");
      invokeScript.src =
        "//www.highperformanceformat.com/97539ad6f8ca20eee2cac37372501dac/invoke.js";
      invokeScript.async = true;

      wrapper.appendChild(configScript);
      wrapper.appendChild(invokeScript);
      anchor.appendChild(wrapper);
    };

    // BUAT 3 SLOT IKLAN MISALNYA
    createAd();
    createAd();
    createAd();
  }, []);

  return (
    <div
      id="ad-row-anchor"
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        marginTop: "20px"
      }}
    />
  );
}
