import { LandingDescription } from "@/common/LandingDescription";
import { LandingTitle } from "@/common/LandingTitle";
import { TechInfo } from "./_components/TechInfo";
import { techStack, techStackConfig } from "./_constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: techStackConfig.name,
  description: techStackConfig.description,
  keywords: techStackConfig.keywords,
};

type Props = {};

export default function TechStackPage({}: Props) {
  return (
    <main className='md:ml-16 lg:ml-0 w-full h-full flex flex-col'>
      <section className='mx-auto mt-24 md:mt-36 flex flex-col items-center justify-end w-[90%] sm:w-[60%]'>
        <LandingTitle title='Our Tech Stack' />
        <LandingDescription text='We choose the finest tools to ensure you receive the finest experience.' />
      </section>
      <section className='w-full md:w-[65%] px-3 mt-6 sm:mt-10 xs:px-6 mb-20 xs:mb-24 sm:mb-28 md:mb-10 md:mx-auto gap-2 sm:gap-3 grid grid-cols-2 sm:grid-cols-3 sm:grid-rows-3'>
        {techStack.map((tech, index) => (
          <TechInfo key={tech.title} tech={tech} index={index} />
        ))}
      </section>
    </main>
  );
}
