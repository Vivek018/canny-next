"use client";

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

import fence from "@/assets/modals/fence/model.gltf";

export function Fence(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(fence);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cylinder095.geometry}
        material={materials["Black.011"]}
      />
      <mesh
        geometry={nodes.Cylinder095_1.geometry}
        material={materials["Stone.003"]}
      />
    </group>
  );
}

useGLTF.preload(fence);
