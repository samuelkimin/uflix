import { useEffect } from "react";

export default function PopunderLoader() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//pl28237572.effectivegatecpm.com/20/96/f0/2096f072aaf88cd447ba8b516c60a8db.js";
    script.async = true;

    // taruh script popunder di body paling bawah
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
