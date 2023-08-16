"use client";

import { useState } from "react";
import { CompareFilter } from "./_components/CompareFilter";

import {
  ComparisonMainText,
  ComparsionTitle,
} from "./_components/ComparisonText";
import { HappyModalView, SadModalView } from "./_components/ModalView";
import { Metadata } from "next";
import { OtherText, UsText, whyUsConfig } from "./_constants";

export const metadata: Metadata = {
  title: whyUsConfig.name,
  description: whyUsConfig.description,
  keywords: whyUsConfig.keywords,
};

type Props = {};

export default function WhyUsPage({}: Props) {
  const [index, setIndex] = useState(1);

  return (
    <main>
      <div className='fixed top-1/2 aspect-square left-1/2 w-12 sm:w-16  md:w-40 rounded-full bg-background text-primary grid place-items-center transform -translate-x-1/2 -translate-y-1/2 shadow-lg md:shadow-2xl z-50'>
        <span className='hidden md:flex text-2xl sm:text-4xl md:text-8xl font-extrabold'>
          V
        </span>
        <span className='md:hidden text-2xl sm:text-4xl md:text-8xl font-extrabold'>
          {index}
        </span>
      </div>
      <section className='fixed w-full h-full flex flex-col lg:flex-row'>
        <HappyModalView index={index} />
        <SadModalView index={7 - index} />
      </section>
      <ComparisonMainText
        textLeft={UsText[index - 1]}
        textRight={OtherText[index - 1]}
      />
      <ComparsionTitle />
      <CompareFilter index={index} setIndex={setIndex} />
    </main>
  );
}
