"use client";

import * as THREE from "three";

import { Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { proxy, useSnapshot } from "valtio";
import { Project } from "./Project";
import { useRef } from "react";
import { primaryColor } from "@/constants";

const damp = THREE.MathUtils.damp;
const material = new THREE.LineBasicMaterial({ color: primaryColor });
const geometry = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(0, -0.5, 0),
  new THREE.Vector3(0, 0.5, 0),
]);

export function Projects({ w = 0.7, gap = 0.15, state }) {
  const { urls } = useSnapshot(state);
  const { width } = useThree((state) => state.viewport);
  const xW = w + gap;

  return (
    <ScrollControls
      horizontal
      damping={0.1}
      pages={(width - xW + urls.length * xW) / width}
    >
      <Minimap urls={urls} />
      <Scroll>
        {urls.map((url, i) => (
          <Project
            key={i}
            index={i}
            state={state}
            position={[i * xW, 0, 0]}
            scale={[w, 4, 1]}
            url={url}
            damp={damp}
          />
        ))}
      </Scroll>
    </ScrollControls>
  );
}

function Minimap({ urls }) {
  const ref = useRef();
  const scroll = useScroll();
  const { height } = useThree((state) => state.viewport);

  useFrame((state, delta) => {
    ref.current.children.forEach((child, index) => {
      const y = scroll.curve(
        index / urls.length - 1.5 / urls.length,
        4 / urls.length
      );
      child.scale.y = damp(child.scale.y, 0.1 + y / 6, 8, delta);
    });
  });

  return (
    <group ref={ref}>
      {urls.map((_, i) => (
        <line
          key={i}
          geometry={geometry}
          material={material}
          position={[i * 0.09 - urls.length * 0.03, -height / 2 + 0.6, 0]}
        />
      ))}
    </group>
  );
}
