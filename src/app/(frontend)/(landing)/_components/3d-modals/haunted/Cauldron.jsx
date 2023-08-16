"use client";

import { Sparkles, useGLTF } from "@react-three/drei";
import { useRef } from "react";

import cauldron from "@/assets/modals/cauldron/model.gltf";

export function Cauldron(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(cauldron);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere015.geometry}
        material={materials["Black.005"]}
      />
      <mesh
        geometry={nodes.Sphere015_1.geometry}
        material={materials.GreenLight}
      >
        <Sparkles
          count={64}
          scale={2}
          size={40}
          speed={0.4}
          color={"#77FF77"}
          position={[0, 0.5, 0]}
        />
      </mesh>
      <mesh geometry={nodes.Sphere015_2.geometry} material={materials.Green} />
      <mesh
        geometry={nodes.Sphere015_3.geometry}
        material={materials.BrownDark}
      />
    </group>
  );
}

useGLTF.preload(cauldron);
