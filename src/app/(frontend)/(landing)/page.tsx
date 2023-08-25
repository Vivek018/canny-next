"use client";

import { LandingTitle } from "@/common/LandingTitle";
import { LandingDescription } from "@/common/LandingDescription";
import { Canvas } from "@react-three/fiber";
import { Common } from "@/common/three/CommonComponents";
import { Carousel } from "./_components/Carousel";
import { useEffect, useState } from "react";

type Props = {};

export default function HomePage({}: Props) {
  const [fov, setFov] = useState(40);

  useEffect(() => {
    setFov(
      window?.innerWidth > 1000
        ? 35
        : window?.innerWidth > 700
        ? 40
        : window.innerWidth > 400
        ? 50
        : 57
    );
  }, []);

  return (
    <main className='absolute top-1/2 left-1/2 md:left-[60%] lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full mt-20 md:mt-28'>
      <section className='flex flex-col mt-6 mx-auto gap-1 md:gap-2 lg:gap-5 w-[90%] md:w-[60%]'>
        <LandingTitle title='Web Production Agency' />
        <LandingTitle title='for the Future' className='-mt-1' />
        <LandingDescription
          text='We craft captivating online experiences using cutting-edge
            technologies, pushing the boundaries of design and functionality.
            Elevate your digital presence with us and stand out in the future of
            the web.'
        />
      </section>
      <section className='w-full h-3/5'>
        <Canvas>
          <Common cameraFov={fov} cameraPosition={[0, 3, 35]} />
          <Carousel />
        </Canvas>
      </section>
    </main>
  );
}
