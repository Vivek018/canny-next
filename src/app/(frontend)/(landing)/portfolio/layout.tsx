import { Metadata } from "next";
import { ReactNode } from "react";
import { portfolioConfig } from "./_constants";

export const metadata: Metadata = {
  title: portfolioConfig.name,
  description: portfolioConfig.description,
  keywords: portfolioConfig.keywords,
};

type Props = {
  children: ReactNode;
};

export default function PortfolioLayout({ children }: Props) {
  return <>{children}</>;
}
