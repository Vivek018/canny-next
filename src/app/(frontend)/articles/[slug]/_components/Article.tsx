"use client";

import { Article } from "@/types";
import { PortableText } from "@portabletext/react";
import { useEffect, useRef, useState } from "react";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";
import VisibilitySensor from "react-visibility-sensor";
import { cn } from "@/libs/cn";

type Props = {
  article: Article;
};

export function Article({ article }: Props) {
  const sideNumbers = useRef<number[]>([]);
  const [activeNumber, setActiveNumber] = useState<number | null>(null);

  const onNumberClick = (key: number) => {
    const myElement = document.getElementById(key.toString())!;
    myElement.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    article.body.map((content: any) => {
      if (content.style === "h3") {
        if (!sideNumbers.current.includes(content._key)) sideNumbers.current.push(content._key);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const SampleImageComponent = ({ value }: any) => {
    return (
      <div className='w-3/4 mx-auto my-20 rounded-lg shadow-lg overflow-hidden'>
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
            <h3 id={_key} className='pt-14 text-3xl tracking-wider font-bold'>
              {children}
            </h3>
          </VisibilitySensor>
        );
      },
      normal: ({ children }: any) => (
        <p className='mt-12 text-lg tracking-wide text-muted-foreground'>
          {children}
        </p>
      ),
    },
    list: {
      number: ({ children }: any) => (
        <ol className='mt-12 text-lg text-muted-foreground tracking-wide list-decimal'>
          {children}
        </ol>
      ),
    },
    listItem: {
      number: ({ children }: any) => <li className='mt-16'>{children}</li>,
    },
    types: {
      image: SampleImageComponent,
    },
  };

  return (
    <div className='flex relative'>
      <aside className='fixed w-[15%] h-[70%] top-1/2 -translate-y-1/2 mt-20 flex flex-col gap-10'>
        {sideNumbers.current.map((number, index) => {
          return (
            <span
              key={number}
              className={cn(
                "text-2xl tracking-wide w-min p-2 opacity-50 ml-14 font-bold font-mono cursor-pointer",
                activeNumber === number && "opacity-100"
              )}
              onClick={() => onNumberClick(number)}
            >
              0{index + 1}
            </span>
          );
        })}
      </aside>
      <article className='ml-[18%] w-[85%] pb-10 px-6'>
        <div className='flex h-min items-center opacity-70'>
          <time>{article?.date}</time>
          <span className='w-1.5 h-1.5 block rounded-full bg-[#E57373] mx-4'></span>
          <p>{article?.author}</p>
        </div>
        <h1 className='mt-14 mb-10 text-7xl font-extrabold'>
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
        <div className='w-full mt-16 rounded-lg shadow-2xl overflow-hidden'>
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
