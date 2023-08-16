import { ReactNode } from "react";

export const metadata = {
  title: "Canny Next Sanity Dashboard",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
