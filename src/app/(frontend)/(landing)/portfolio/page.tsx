"use client";

import { LandingTitle } from "@/common/LandingTitle";
import { LandingDescription } from "@/common/LandingDescription";

import { Projects } from "./_components/Projects";
import { Canvas } from "@react-three/fiber";
import { proxy } from "valtio";

import defaultBg from "@/assets/images/0.jpg";

type Props = {};

const state = proxy({
  clicked: null,
  urls: Array(15).fill(defaultBg.src),
});

export default function PortfolioPage({}: Props) {
  return (
    <main className='absolute w-full h-full'>
      <section className='w-11/12 md:w-1/2 mt-2 h-[180px] md:h-[240px] mx-auto justify-end items-center flex flex-col'>
        <LandingTitle title='Our Portfolio' />
        <LandingDescription text='Explore our diverse portfolio showcasing our capabilities. From stunning designs to innovative solutions, our work speaks volumes.' />
      </section>
      <section className='w-full h-4/6 pb-14 md:pb-0'>
        <Canvas
          gl={{ antialias: false }}
          dpr={[1, 1.5]}
          className='h-1/2'
          onPointerMissed={() => (state.clicked = null)}
        >
          <Projects state={state} />
        </Canvas>
      </section>
    </main>
  );
}
