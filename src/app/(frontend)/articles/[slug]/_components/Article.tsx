"use client";

import { Article } from "@/types";
import { PortableText } from "@portabletext/react";
import { useEffect, useRef, useState } from "react";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";
import VisibilitySensor from "react-visibility-sensor";
import { cn } from "@/libs/cn";
import { Button } from "@/common/ui/Button";
import { Icons } from "@/libs/Icons";
import { useRouter } from "next/navigation";
import { routes } from "@/constants";

type Props = {
  article: Article;
};

export function Article({ article }: Props) {
  const sideNumbers = useRef<number[]>([]);
  const [activeNumber, setActiveNumber] = useState<number | null>(null);
  const { replace } = useRouter();

  const onNumberClick = (key: number) => {
    const myElement = document.getElementById(key.toString())!;
    myElement.scrollIntoView({ behavior: "instant", block: "start" });
  };

  useEffect(() => {
    if (sideNumbers.current.length <= 5)
      article.body.map((content: any) => {
        if (content.style === "h3") {
          if (!sideNumbers.current.includes(content._key))
            sideNumbers.current.push(content._key);
        }
      });
    else return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const SampleImageComponent = ({ value }: any) => {
    return (
      <div className='w-11/12 mx-auto my-20 rounded-lg shadow-lg overflow-hidden'>
        <Image
          width='600'
          height='400'
          className='object-contain'
          src={urlBuilder({
            projectId: process.env.NEXT_PUBLIC_SANITY_PID!,
            dataset: "production",
          })
            .image(value)
            .url()}
          alt={value.alt || "Article Image"}
          loading='lazy'
        />
      </div>
    );
  };

  const textComponents = {
    block: {
      h3: ({ children, node: { _key } }: any) => {
        return (
          <VisibilitySensor
            onChange={(isVisible: boolean) => {
              isVisible ? setActiveNumber(_key) : null;
            }}
          >
            <h3
              id={_key}
              className='mt-4 sm:mt-8 md:mt-12 text-lg sm:text-xl md:text-3xl tracking-wider font-bold'
            >
              {children}
            </h3>
          </VisibilitySensor>
        );
      },
      normal: ({ children }: any) => (
        <p className='mt-4 sm:mt-8 md:mt-12 text-sm xs:text-base opacity-90 md:text-lg tracking-wide text-muted-foreground'>
          {children}
        </p>
      ),
    },
    list: {
      number: ({ children }: any) => (
        <ol className='mt-4 sm:mt-8 md:mt-12 text-sm xs:text-base text-muted-foreground tracking-wide list-decimal'>
          {children}
        </ol>
      ),
    },
    listItem: {
      number: ({ children }: any) => (
        <li className='mt-4 sm:mt-8 md:mt-16 opacity-90'>{children}</li>
      ),
    },
    types: {
      image: SampleImageComponent,
    },
  };
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
        {sideNumbers.current.map((number, index) => {
          return (
            <span
              key={number}
              className={cn(
                "text-2xl tracking-wide w-min p-2 opacity-30 dark:opacity-50 ml-10 font-bold font-mono cursor-pointer",
                activeNumber === number && "opacity-100 dark:opacity-100"
              )}
              onClick={() => onNumberClick(number)}
            >
              0{index + 1}
            </span>
          );
        })}
      </aside>
      <article className='mx-auto md:ml-[15%] lg:ml-[18%] w-[90%] lg:w-[85%] pb-4 md:pb-10 px-3 sm:px-6'>
        <div className='text-sm sm:text-base flex flex-row h-min justify-between xs:justify-start items-center opacity-75'>
          <Button
            variant='ghost'
            size="icon"
            className='md:hidden capitalize w-9 h-9 xs:w-12 xs:h-12 bg-input'
            onClick={() => replace(routes.articles)}
          >
            <Icons.ChevronLeft />
          </Button>
          <time className="xs:ml-auto md:ml-0">{article?.date}</time>
          <span className='hidden w-1.5 h-1.5 xs:block brightness-125 rounded-full bg-[#E57373] mx-4'></span>
          <p>{article?.author}</p>
        </div>
        <h1 className='mt-12 mb-10 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold'>
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
        <div className='w-full mt-10 md:mt-16 rounded-lg shadow-2xl overflow-hidden'>
          <Image
            src={article?.header}
            className='max-w-full'
            width='1500'
            height='600'
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
