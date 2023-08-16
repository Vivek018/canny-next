"use client";

import { servicesRoutes } from "@/constants";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
