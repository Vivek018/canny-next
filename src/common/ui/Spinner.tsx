import spinner from "@/assets/icons/spinner.svg";
import { cn } from "@/libs/cn";
import Image from "next/image";

export const Spinner = ({ className }: { className?: string }) => {
  return (
    <div className='z-50'>
      <Image
        className={cn(
          "w-4 text-gray animate-spin fill-primary z-50",
          className
        )}
        src={spinner}
        alt='search spinner'
      />
      <span className='sr-only'>Loading...</span>
    </div>
  );
};
