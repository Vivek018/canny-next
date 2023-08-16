"use client";

import { Button } from "@/common/ui/Button";
import { Icons } from "@/libs/Icons";
import { cn } from "@/libs/cn";
import { Dispatch, SetStateAction } from "react";

type Props = {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
};

export function CompareFilter({ index, setIndex }: Props) {
  return (
    <div className='fixed bottom-10 top-1/2 md:top-auto left-1/2 transform -translate-x-1/2  -translate-y-1/2 md:-translate-y-0 flex  gap-20 xs:gap-28 sm:gap-40 md:gap-4 justify-between items-center z-50'>
      <Button
        variant='ghost'
        role='slider'
        size='icon'
        disabled={index === 1}
        className='bg-primary md:bg-transparent text-background md:text-foreground w-12 h-12 sm:w-16 sm:h-16 md:w-12 md:h-12 hover:bg-primary md:hover:bg-accent md:disabled:hover:bg-transparent shadow-lg md:shadow-none'
        onClick={() => setIndex((prevValue) => prevValue - 1)}
      >
        <Icons.ChevronLeft />
      </Button>
      {Array.from([1, 2, 3, 4, 5, 6]).map((val) => {
        return (
          <Button
            key={val}
            variant='ghost'
            role='slider'
            className={cn(
              "hidden md:flex w-8 h-8 rounded-md",
              index === val && "cursor-auto bg-accent"
            )}
            onClick={() => setIndex(val)}
          >
            {val}
          </Button>
        );
      })}
      <Button
        variant='ghost'
        size='icon'
        role='slider'
        disabled={index === 6}
        className='bg-primary md:bg-transparent text-background md:text-foreground w-12 h-12 sm:w-16 sm:h-16 md:w-12 md:h-12 hover:bg-primary md:hover:bg-accent md:disabled:hover:bg-transparent shadow-lg md:shadow-none'
        onClick={() => setIndex((prevValue) => prevValue + 1)}
      >
        <Icons.ChevronRight />
      </Button>
    </div>
  );
}
