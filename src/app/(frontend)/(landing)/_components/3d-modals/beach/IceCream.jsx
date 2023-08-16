"use client";

import { animated, useSpring } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

import iceCream from "@/assets/modals/ice-cream/model.gltf";

export function IceCream(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(iceCream);

  const { iceCreamScale, iceCreamY, coneRotationY } = useSpring({
    from: {
      iceCreamScale: 0.5,
      iceCreamY: 0.5,
      coneRotationY: 0,
    },
    to: [
      {
        iceCreamScale: 1,
        iceCreamY: 0.2,
        coneRotationY: Math.PI / 2,
      },
      {
        iceCreamY: 0,
        coneRotationY: 2 * Math.PI,
      },
      { iceCreamScale: 0.5, iceCreamY: 0.5, coneRotationY: 0 },
    ],
    config: {
      mass: 1,
      tension: 800,
      friction: 20,
    },
    loop: true,
  });

  return (
    <animated.group
      ref={group}
      {...props}
      dispose={null}
      rotation-y={coneRotationY}
    >
      <animated.mesh
        geometry={nodes.Mesh_iceCream.geometry}
        material={materials.purpleLight}
        position-y={iceCreamY}
        scale-x={iceCreamScale}
        scale-y={iceCreamScale}
        scale-z={iceCreamScale}
      />
      <mesh
        geometry={nodes.Mesh_iceCream_1.geometry}
        material={materials.brownLight}
      />
    </animated.group>
  );
}

useGLTF.preload(iceCream);
