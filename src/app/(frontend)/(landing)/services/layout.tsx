import { LandingDescription } from "@/common/LandingDescription";
import { LandingTitle } from "@/common/LandingTitle";
import { ReactNode } from "react";
import { ServiceFilter } from "./_components/ServiceFilter";
import { Metadata } from "next";
import { servicesConfig } from "./_constants";

export const metadata: Metadata = {
  title: servicesConfig.name,
  description: servicesConfig.description,
  keywords: servicesConfig.keywords,
};

type Props = {
  children: ReactNode;
};

export default function ServicesLayout({ children }: Props) {
  return (
    <main className='md:ml-16 lg:ml-0 w-full h-full flex flex-col'>
      <section className='mx-auto mt-24 md:mt-36 flex flex-col items-center justify-end w-[90%] sm:w-[60%]'>
        <LandingTitle title='Our Services' />
        <LandingDescription text='Unlock a world of tailored solutions for your success through our comprehensive suite of services.' />
      </section>
      <section className='w-full grid place-items-center my-4 xs:my-6 md:my-10 px-2 md:px-10'>
        <ServiceFilter />
      </section>
      <section className='w-full h-full md:w-3/4 px-3 xs:px-6 mb-20 xs:mb-24 sm:mb-28 md:mb-10 md:mx-auto flex flex-col'>
        {children}
      </section>
    </main>
  );
}
