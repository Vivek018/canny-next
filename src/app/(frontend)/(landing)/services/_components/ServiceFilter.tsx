"use client";

import { servicesRoutes } from "@/constants";
import { cn } from "@/libs/cn";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

export function ServiceFilter({}: Props) {
  const pathname = usePathname();

  const servicePage = pathname.split("/")[pathname.split("/").length - 1];
  

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.15 } }}
      className='flex flex-row sm:gap-2 rounded-full shadow-inner bg-input p-1 md:p-1.5'
    >
      {servicesRoutes.map(({ slug, title }) => {
        return (
          <Link
            aria-disabled={servicePage === slug}
            href={slug}
            key={slug}
            className={cn(
              "py-2 px-2 xs:py-2 xs:px-2.5 sm:py-2 sm:px-4 relative",
              servicePage === slug &&
                "bg-background shadow-md rounded-full cursor-default"
            )}
          >
            <p className='text-[8px] xs:text-[10px] sm:text-xs md:text-sm'>
              {title}
            </p>
          </Link>
        );
      })}
    </motion.div>
  );
}
