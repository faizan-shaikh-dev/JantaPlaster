import "./globals.css";
import { SiteFooter, SiteHeader, WhatsAppDock } from "./site-components";
import SplashScreen from "./splash-screen";

export const metadata = {
  title: "Janta Plaster & Hardware | False Ceilings, POP & Building Materials in Jalgaon",
  description:
    "Jalgaon's premier store & contractor for Saint-Gobain Gyproc False Ceilings, Sakarni POP, GI Channels, and UV Marble Panels since 1996. Located in Mehrun, Jalgaon.",
  keywords: [
    "False ceiling Jalgaon",
    "POP material Jalgaon",
    "Gyproc gypsum Jalgaon",
    "Janta Plaster Hardware",
    "Ceiling contractor Jalgaon",
    "PVC wall panels Jalgaon",
    "Building materials Mehrun",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-200 selection:text-slate-950">
        <SplashScreen />
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <WhatsAppDock />
      </body>
    </html>
  );
}
