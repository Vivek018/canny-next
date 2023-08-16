import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/libs/cn";

type ComparisonMainTextProps = {
  className?: string;
  textClassName?: string;
  textLeft: string;
  textRight: string;
};

const commonComparsionMainTextClassName =
  "w-full h-1/2 ml-auto text-end lg:w-1/2 lg:h-full lg:pt-48 lg:text-center text-lg sm:text-2xl md:text-4xl font-semibold tracking-wider text-muted-foreground font-anton flex justify-end items-center lg:justify-center lg:items-start pr-2 xs:pr-4 sm:pr-8 md:pr-16 lg:pr-0";

export function ComparisonMainText({
  className,
  textClassName,
  textLeft,
  textRight,
}: ComparisonMainTextProps) {
  return (
    <section
      className={cn(
        "fixed w-full h-full flex flex-col lg:flex-row -z-10",
        className
      )}
    >
      <div
        className={cn(
          commonComparsionMainTextClassName,
          textClassName,
          "bg-modal-primary"
        )}
      >
        <AnimatePresence key={textLeft}>
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {textLeft}
          </motion.h1>
        </AnimatePresence>
      </div>
      <div
        className={cn(
          commonComparsionMainTextClassName,
          textClassName,
          "bg-modal-secondary"
        )}
      >
        <AnimatePresence key={textRight}>
          <motion.h1
            initial={{ y: -30, opacity: 0.6 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {textRight}
          </motion.h1>
        </AnimatePresence>
      </div>
    </section>
  );
}

type ComparisonTitleProps = {
  className?: string;
  textClassName?: string;
};

const commonComparsionTitleClassName =
  "w-full h-1/2 lg:w-1/2 lg:h-full uppercase font-bold tracking-wide text-muted-foreground opacity-10 text-5xl xs:text-6xl sm:text-7xl md:text-8xl grid place-items-center";

export function ComparsionTitle({
  className,
  textClassName,
}: ComparisonTitleProps) {
  return (
    <section
      className={cn(
        "fixed w-min h-full left-1/2 -translate-x-1/2 lg:w-full lg:h-min lg:top-1/2 lg:-translate-y-1/2 flex flex-col lg:flex-row",
        className
      )}
    >
      <h2 className={cn(commonComparsionTitleClassName, textClassName)}>US</h2>
      <h2 className={cn(commonComparsionTitleClassName, textClassName)}>
        Others
      </h2>
    </section>
  );
}
