"use client";

import { Button } from "@/common/ui/Button";
import { Icons } from "@/libs/Icons";
import { Dispatch, SetStateAction } from "react";

type Props = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  prevDisable: boolean;
  nextDisable: boolean;
};

export function Pagination({ page, prevDisable, nextDisable, setPage }: Props) {
  return (
    <div className='flex px-4 py-1 justify-center items-center gap-8'>
      <Button
        variant='accent'
        size='icon'
        disabled={prevDisable}
        onClick={() => {
          setPage((prev) => prev - 1);
        }}
      >
        <Icons.ChevronLeft />
      </Button>
      <p>{page + 1}</p>
      <Button
        variant='accent'
        size='icon'
        disabled={nextDisable}
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
      >
        <Icons.ChevronRight />
      </Button>
    </div>
  );
}
