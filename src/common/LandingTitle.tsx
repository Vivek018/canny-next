import { cn } from "@/libs/cn";

type Props = {
  className?: string;
  title: string;
};

export function LandingTitle({ className, title }: Props) {
  return (
    <h1
      className={cn(
        "text-lg sm:text-xl md:text-[28px] md:leading-[2.25rem] lg:text-[40px] font-bold uppercase tracking-wide text-center dark:text-transparent dark:bg-clip-text dark:bg-text",
        className
      )}
    >
      {title}
    </h1>
  );
}
