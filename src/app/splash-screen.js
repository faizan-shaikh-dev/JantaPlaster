"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0f172a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "14px",
      }}
      role="status"
      aria-label="Janta Plaster & Hardware is loading"
    >
      <Image
        src="/brand/jp-mark.svg"
        alt="Janta Plaster Logo"
        width={60}
        height={60}
        priority
      />
      <div style={{ textAlign: "center" }}>
        <strong style={{ color: "#ffffff", fontSize: "15px", letterSpacing: "0.06em", display: "block" }}>
          JANTA PLASTER &amp; HARDWARE
        </strong>
        <span style={{ color: "#f59e0b", fontSize: "10px", fontWeight: "750", letterSpacing: "0.16em" }}>
          JALGAON · MAHARASHTRA
        </span>
      </div>
    </div>
  );
}
