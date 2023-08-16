"use client";

import { cn } from "@/libs/cn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const scale = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.5,
    },
  },
};

type Props = {
  index: number;
  bgImage: any;
  name: string;
  slug: string;
  iconClassName?: string;
  titleClassName?: string;
};

export function ServiceIcon({
  index,
  bgImage,
  name,
  slug,
  iconClassName,
  titleClassName,
}: Props) {
  return (
    <Link href={`/services/${slug}`}>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={scale}
        className='w-12 md:w-14 lg:w-16 flex flex-col items-center justify-center gap-2'
      >
        <Image
          className={cn(
            "p-2 w-12 md:w-14 lg:w-16 rounded-md shadow-md",
            iconClassName
          )}
          src={bgImage}
          alt='Service Icon'
        ></Image>
        <h3
          className={cn(
            "px-1.5 py-1 bg-transparent rounded-md shadow-md text-foreground w-max text-[10px] md:text-sm gird place-items-center",
            titleClassName
          )}
        >
          {name}
        </h3>
      </motion.div>
    </Link>
  );
}
