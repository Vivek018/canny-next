import { Metadata } from "next";
import { ReactNode } from "react";
import { serviceConfig } from "./_constants";
import { ServicePageRoutes } from "@/types";

export async function generateMetaData({
  params: { service },
}: {
  params: { service: ServicePageRoutes };
}): Promise<Metadata> {
  return {
    title: serviceConfig[service].name,
    description: serviceConfig[service].description,
    keywords: serviceConfig[service].keywords,
  };
}

type Props = {
  children: ReactNode;
};

export default function ServiceLayout({ children }: Props) {
  return <>{children}</>;
}
