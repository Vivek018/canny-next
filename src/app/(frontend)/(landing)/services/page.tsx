"use client";

import { servicesRoutes } from "@/constants";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { servicesConfig } from "./_constants";

export const metadata: Metadata = {
  title: servicesConfig.name,
  description: servicesConfig.description,
  keywords: servicesConfig.keywords,
};

type Props = {};

export default function ServicePage({}: Props) {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/services/${servicesRoutes[0].slug}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className='h-[160px] grid place-items-center text-2xl md:text-4xl font-bold'>
      Redirecting...
    </main>
  );
}
