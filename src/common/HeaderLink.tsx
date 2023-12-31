"use client";

import { cn } from "@/libs/cn";
import Link from "next/link";
type Props = { link: string; title: string; className?: string };

const commonStyles = "transition-all duration-100";

export function HeaderLink({ link, title, className }: Props) {
  return (
    <Link
      href={link}
      className={cn(
        commonStyles,
        "group flex flex-col items-center justify-center z-50",
        className
      )}
    >
      <h3
        className={cn(
          commonStyles,
          "uppercase text-xs xs:text-sm md:text-lg tracking-wide xs:tracking-widest hover:text-primary"
        )}
      >
        {title}
      </h3>
    </Link>
  );
}
