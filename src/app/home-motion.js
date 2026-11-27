"use client";

import dynamic from "next/dynamic";

export const CeilingScene = dynamic(() => import("./ceiling-scene"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100%",
        color: "#f59e0b",
        fontSize: "13px",
        fontWeight: "750",
        letterSpacing: "0.1em",
      }}
    >
      <span>LOADING 3D ARCHITECTURAL MODEL...</span>
    </div>
  ),
});

export default function HomeMotion({ children }) {
  return <>{children}</>;
}
