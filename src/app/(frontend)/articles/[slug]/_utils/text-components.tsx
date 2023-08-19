import urlBuilder from "@sanity/image-url";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import VisibilitySensor from "react-visibility-sensor";

const SampleImageComponent = ({ value }: any) => {
  return (
    <div className='w-11/12 mx-auto my-20 rounded-lg shadow-lg overflow-hidden'>
      <Image
        width='600'
        height='400'
        priority
        className='object-contain'
        src={urlBuilder({
          projectId: process.env.NEXT_PUBLIC_SANITY_PID!,
          dataset: "production",
        })
          .image(value)
          .url()}
        alt={value.alt || "Article Image"}
      />
    </div>
  );
};

export const TextComponents = (
  setActiveNumber: Dispatch<SetStateAction<number | null>>
) => {
  return {
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
              className='pt-4 sm:pt-8 md:pt-12 text-lg sm:text-xl md:text-3xl tracking-wider font-bold'
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
        <ol className='mt-4 sm:mt-8 md:mt-12 text-sm xs:text-base md:text-lg text-muted-foreground tracking-wide list-decimal'>
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
};
