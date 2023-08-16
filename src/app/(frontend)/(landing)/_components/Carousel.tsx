"use client";

import { animated, useSpring } from "@react-spring/three";
import { Float } from "@react-three/drei";
import { IceCream } from "../_components/3d-modals/beach/IceCream";
import { Palm } from "../_components/3d-modals/beach/Palm";
import { VolleyBall } from "../_components/3d-modals/beach/VolleyBall";
import { BookCase } from "../_components/3d-modals/haunted/BookCase";
import { Cauldron } from "../_components/3d-modals/haunted/Cauldron";
import { Fence } from "../_components/3d-modals/haunted/Fence";
import { Witch } from "../_components/3d-modals/haunted/Witch";

const STEP_DURATION = 2500;

type Props = {
  props?: any;
};

export function Carousel({ ...props }: Props) {
  const { carouselRotation } = useSpring({
    from: {
      carouselRotation: 0,
    },
    to: [
      {
        carouselRotation: -Math.PI / 2,
        delay: STEP_DURATION,
      },
      {
        carouselRotation: -Math.PI,
        delay: STEP_DURATION,
      },
      {
        carouselRotation: -1.5 * Math.PI,
        delay: STEP_DURATION,
      },
      {
        carouselRotation: -2 * Math.PI,
        delay: STEP_DURATION,
      },
    ],
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
    },
    loop: true,
    immediate: true,
  });

  return (
    <>
      <group rotation-y={-Math.PI / 4} position-y={-0.01}>
        <animated.group rotation-y={carouselRotation}>
          <mesh position={[0, -2, 0]}>
            <meshStandardMaterial color={"white"} />
            <cylinderGeometry args={[12, 12, 4, 64]} />
          </mesh>
          <mesh scale={[1, 6, 24]} position-y={3}>
            <boxGeometry />
            <meshStandardMaterial color={"white"} />
          </mesh>
          {/* HAUNTED */}
          <>
            <Float speed={5} floatIntensity={0.1}>
              <Witch
                position={[4, 3, 5]}
                scale={[1.6, 1.6, 1.6]}
                rotation-y={Math.PI * 1.25}
              />
            </Float>
            <BookCase
              position={[7, 0, -1.5]}
              scale={[2, 2, 2]}
              rotation-y={Math.PI}
            />
            <Float speed={3} floatIntensity={0.005}>
              <Fence
                position={[7.5, 2, -7.5]}
                scale={[1.6, 1.6, 1.6]}
                rotation-y={Math.PI / 4}
              />
            </Float>
            <Float speed={-1} floatIntensity={0.01}>
              <Cauldron position={[5.8, 1, 8]} scale={[1.9, 1.9, 1.9]} />
            </Float>
          </>
          {/* BEACH */}
          <>
            <Palm scale={[3, 3, 3]} position={[-1, 0, -4.6]} />
            <Palm
              scale={[1, 2.6, -4.6]}
              position={[-7, 0, 0]}
              rotation-y={Math.PI / 6}
            />
            <VolleyBall />
            <IceCream position={[-10, 2, 1]} scale={[3, 3, 3]} />
            <IceCream position={[-8, 2, 3]} scale={[3, 3, 3]} />
            <IceCream position={[-3, 2, 5]} scale={[3, 3, 3]} />
          </>
        </animated.group>
      </group>
    </>
  );
}
