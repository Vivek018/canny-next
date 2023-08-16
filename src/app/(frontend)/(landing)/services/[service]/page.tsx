import { ServicePageRoutes } from "@/types";
import { serviceContent } from "./_constants";
import { cn } from "@/libs/cn";
import Image from "next/image";

type Props = {
  params: { service: string };
};

export default function ServicesServicePage({ params: { service } }: Props) {
  const currentService = service
    ? serviceContent[service as ServicePageRoutes]
    : null;

  if (!currentService) return null;

  const { title, description, description2, description3, className, imageBg } =
    currentService;

  return (
    <article
      className={cn(
        "w-full max-h-[320px] md:max-h-[400px] gap-4 md:gap-10 flex flex-col p-4 md:p-10 shadow-lg rounded-md overflow-y-scroll",
        className
      )}
    >
      <div className='flex justify-between items-center pb-4 border-b gap-2 sm:gap-3 md:gap-6 lg:gap-10'>
        <h2 className='font-anton text-xl sm:text-3xl md:text-5xl lg:text-6xl tracking-wider leading-relaxed font-bold'>
          {title}
        </h2>
        <Image className='w-1/4' src={imageBg} alt='epic website' />
      </div>
      <div className='leading-relaxed text-sm lg:text-lg opacity-70'>
        <p className=''>{description}</p>
        <p className='mt-4 md:mt-8'>{description2}</p>
        <p className='mt-4 md:mt-8'>{description3}</p>
      </div>
    </article>
  );
}
