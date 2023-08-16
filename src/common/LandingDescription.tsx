"use client";

import { cn } from "@/libs/cn";
import { motion } from "framer-motion";

type Props = {
  className?: string;
  text: string;
};

export function LandingDescription({ className, text }: Props) {
  return (
    <motion.p
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 0.5, transition: { delay: 0.3, duration: 0.3 } }}
      className={cn(
        "mt-1 md:mt-4 text-center text-xs sm:text-sm md:text-base text-foreground opacity-50",
        className
      )}
    >
      {text}
    </motion.p>
  );
}
