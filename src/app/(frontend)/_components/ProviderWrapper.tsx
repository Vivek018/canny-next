"use client";

import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Analytics } from "@vercel/analytics/react";

export function ProviderWrapper({ children, ...props }: ThemeProviderProps) {
  return (
    <ThemeProvider {...props}>
      {children}
      <Analytics />
    </ThemeProvider>
  );
}
