"use client";

import { useState } from "react";
import Image from "next/image";
import { Article } from "@/types";
import { PortableText } from "@portabletext/react";
import { cn } from "@/libs/cn";
import { Button } from "@/common/ui/Button";
import { Icons } from "@/libs/Icons";
import { useRouter } from "next/navigation";
import { routes } from "@/constants";
import { useSideNumbers } from "../_hooks/useSideNumbers";
import { TextComponents } from "../_utils/text-components";

type Props = {
  article: Article;
};

export function Article({ article }: Props) {
  const { sideNumbers } = useSideNumbers(article?.body);
  const [activeNumber, setActiveNumber] = useState<number | null>(null);
  const { replace } = useRouter();

  const onNumberClick = (key: number) => () => {
    const myElement = document.getElementById(key.toString())!;
    myElement.scrollIntoView({ behavior: "instant", block: "start" });
  };

  const textComponents = TextComponents(setActiveNumber);

  return (
    <div className='flex relative'>
      <aside className='hidden md:flex fixed w-[12%] lg:w-[15%] h-[70%] top-1/2 -translate-y-1/2 mt-10 flex-col gap-10'>
        <Button
          variant='default'
          size='icon'
          className='capitalize ml-10 mb-2'
          onClick={() => replace(routes.articles)}
        >
          <Icons.ChevronLeft />
        </Button>
        {sideNumbers.map((number, index) => {
          return (
            <span
              key={number}
              className={cn(
                "text-2xl tracking-wide w-min p-2 opacity-30 dark:opacity-50 ml-10 font-bold font-mono cursor-pointer",
                activeNumber === number && "opacity-100 dark:opacity-100"
              )}
              onClick={onNumberClick(number)}
            >
              0{index + 1}
            </span>
          );
        })}
      </aside>
      <article className='mx-auto md:ml-[15%] lg:ml-[18%] w-[90%] lg:w-[85%] pb-4 md:pb-10 sm:px-3'>
        <div className='text-sm sm:text-base flex flex-row h-min justify-start items-center opacity-75'>
          <time>{article?.date}</time>
          <span className='w-1.5 h-1.5 brightness-125 rounded-full bg-[#E57373] mx-4'></span>
          <p>{article?.author}</p>
        </div>
        <h1 className='mt-12 mb-4 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold'>
          {article?.title}
        </h1>
        {article?.tags?.map((tag, index) => (
          <span
            key={index}
            className='inline-block text-[11px] py-1 px-2 rounded-full bg-accent mr-2'
          >
            {tag}
          </span>
        ))}
        <div className='w-full mt-6 md:mt-12 rounded-lg shadow-2xl overflow-hidden'>
          <Image
            src={article?.header}
            className='max-w-full'
            width='1500'
            height='600'
            priority
            alt={article?.title}
          />
        </div>
        <div className='mt-20'>
          <PortableText
            value={article.body as any}
            components={textComponents}
          />
        </div>
      </article>
    </div>
  );
}
