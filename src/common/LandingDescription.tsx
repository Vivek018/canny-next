import { cn } from "@/libs/cn";

type Props = {
  className?: string;
  text: string;
};

export function LandingDescription({ className, text }: Props) {
  return (
    <p
      className={cn(
        "mt-1 md:mt-4 text-center text-xs sm:text-sm md:text-base text-foreground opacity-50",
        className
      )}
    >
      {text}
    </p>
  );
}
