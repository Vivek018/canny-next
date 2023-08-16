"use client";

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

import palm from "@/assets/modals/palm-detailed-long/model.gltf";

export function Palm(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(palm);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh
          geometry={nodes.Group_152.geometry}
          material={materials["wood.011"]}
          position={[-0.65, 0, 0.59]}
          scale={0.77}
        />
        <mesh
          geometry={nodes.Group_154.geometry}
          material={materials["leaves.001"]}
          position={[0, 1.72, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(palm);
