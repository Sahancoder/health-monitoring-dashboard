import type { Metadata } from "next";
import "@/styles/globals.css";
import { ReactNode } from "react";

import Providers from "@/components/layout/Providers";

export const metadata: Metadata = {
  title: "Health Monitoring Dashboard",
  description: "Real-time patient vitals and care insights",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
