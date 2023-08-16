"use client";

import { cn } from "@/libs/cn";
import { motion } from "framer-motion";

type Props = {
  className?: string;
  title: string;
};

export function LandingTitle({ className, title }: Props) {
  return (
    <motion.h1
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
      className={cn(
        "text-lg sm:text-xl md:text-[28px] md:leading-[2.25rem] lg:text-[40px] font-bold uppercase tracking-wide text-center dark:text-transparent dark:bg-clip-text dark:bg-text",
        className
      )}
    >
      {title}
    </motion.h1>
  );
}
