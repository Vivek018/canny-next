"use client";

import { Suspense, useState } from "react";
import { CompareFilter } from "./_components/CompareFilter";

import {
  ComparisonMainText,
  ComparsionTitle,
} from "./_components/ComparisonText";
import { ModalLoader } from "./_components/ModalLoader";
import { OtherText, UsText } from "./_constants";
import dynamic from "next/dynamic";

const HappyModalView = dynamic(
  () => import("./_components/ModalView").then((mod) => mod.HappyModalView),
  {
    ssr: false,
    loading: () => <ModalLoader />,
  }
);

const SadModalView = dynamic(
  () => import("./_components/ModalView").then((mod) => mod.SadModalView),
  {
    ssr: false,
    loading: () => <ModalLoader />,
  }
);


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
        <Suspense fallback={<ModalLoader />}>
          <HappyModalView index={index} />
          <SadModalView index={7 - index} />
        </Suspense>
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
