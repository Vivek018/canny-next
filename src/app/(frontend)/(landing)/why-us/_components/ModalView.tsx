"use client";

import { Suspense, useEffect, useState } from "react";

import { cn } from "@/libs/cn";
import { Common } from "@/common/three/CommonComponents";
import { Canvas } from "@react-three/fiber";
import { ModalLoader } from "./ModalLoader";
import dynamic from "next/dynamic";

const HappyMale = dynamic(
  () => import("./compare-modals/HappyMale").then((mod) => mod.HappyMale),
  {
    ssr: false,
  }
);

const SadMale = dynamic(
  () => import("./compare-modals/SadMale").then((mod) => mod.SadMale),
  {
    ssr: false,
  }
);

type Props = {
  className?: string;
  index: number;
};

export const HappyModalView = ({ className, index }: Props) => {
  const [height, setHeight] = useState(1);

  useEffect(() => {
    setHeight(window?.innerWidth > 1000 ? 1.2 : 0.8);
  }, []);

  return (
    <div
      className={cn(
        "w-1/3 ml-4 lg:ml-0 md:w-2/5 lg:w-1/2 h-1/2 lg:h-full",
        className
      )}
    >
      <Suspense fallback={<ModalLoader />}>
        <Canvas>
          <Common cameraPosition={[0, height, 6]} />
          <HappyMale index={index} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export const SadModalView = ({ className, index }: Props) => {
  const [height, setHeight] = useState(1);

  useEffect(() => {
    setHeight(window?.innerWidth > 1000 ? 1.2 : 0.8);
  }, []);

  return (
    <div
      className={cn(
        "w-1/3 ml-4 lg:ml-0 md:w-2/5 lg:w-1/2 h-1/2 lg:h-full",
        className
      )}
    >
      <Suspense fallback={<ModalLoader />}>
        <Canvas>
          <Common cameraPosition={[0, height, 6]} />
          <SadMale index={index} />
        </Canvas>
      </Suspense>
    </div>
  );
};
