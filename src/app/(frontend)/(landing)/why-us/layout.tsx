import { Metadata } from "next";
import { ReactNode } from "react";
import { whyUsConfig } from "./_constants";

export const metadata: Metadata = {
  title: whyUsConfig.name,
  description: whyUsConfig.description,
  keywords: whyUsConfig.keywords,
};

type Props = {
  children: ReactNode
}


export default function WhyUsLayout({children}: Props) {
  return (
    <>{children}</>
  )
}