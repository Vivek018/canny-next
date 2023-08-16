"use client";
import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Image,
  ScrollControls,
  Scroll,
  useScroll,
  Center,
  Html,
} from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import { primaryColor } from "@/constants";
import { LandingTitle } from "@/common/LandingTitle";
import { LandingDescription } from "@/common/LandingDescription";
import defaultBg from "@/assets/images/0.jpg";

const damp = THREE.MathUtils.damp;
const material = new THREE.LineBasicMaterial({ color: primaryColor });
const geometry = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(0, -0.5, 0),
  new THREE.Vector3(0, 0.5, 0),
]);
const state = proxy({
  clicked: null,
  urls: Array(15).fill(defaultBg.src),
});

export default function PortfolioPage() {
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
          <Items />
        </Canvas>
      </section>
    </main>
  );
}

function Items({ w = 0.7, gap = 0.15 }) {
  const { urls } = useSnapshot(state);
  const { width } = useThree((state) => state.viewport);
  const xW = w + gap;

  return (
    <ScrollControls
      horizontal
      damping={0.1}
      pages={(width - xW + urls.length * xW) / width}
    >
      <Minimap />
      <Scroll>
        {urls.map((url, i) => (
          <Item
            key={i}
            index={i}
            position={[i * xW, 0, 0]}
            scale={[w, 4, 1]}
            url={url}
          />
        ))}
      </Scroll>
    </ScrollControls>
  );
}

function Minimap() {
  const ref = useRef();
  const scroll = useScroll();
  const { urls } = useSnapshot(state);
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

function Item({ index, position, scale, c = new THREE.Color(), ...props }) {
  const ref = useRef();
  const scroll = useScroll();
  const { clicked, urls } = useSnapshot(state);
  const [hovered, hover] = useState(false);
  const click = () => (state.clicked = index === clicked ? null : index);
  const over = () => hover(true);
  const out = () => hover(false);

  useFrame((state, delta) => {
    const y = scroll.curve(
      index / urls.length - 1.5 / urls.length,
      4 / urls.length
    );
    ref.current.material.scale[1] = ref.current.scale.y = damp(
      ref.current.scale.y,
      clicked === index ? 5 : 4 + y,
      8,
      delta
    );
    ref.current.material.scale[0] = ref.current.scale.x = damp(
      ref.current.scale.x,
      clicked === index ? 4.7 : scale[0],
      6,
      delta
    );
    if (clicked !== null && index < clicked)
      ref.current.position.x = damp(
        ref.current.position.x,
        position[0] - 2,
        6,
        delta
      );
    if (clicked !== null && index > clicked)
      ref.current.position.x = damp(
        ref.current.position.x,
        position[0] + 2,
        6,
        delta
      );
    if (clicked === null || clicked === index)
      ref.current.position.x = damp(
        ref.current.position.x,
        position[0],
        6,
        delta
      );
    ref.current.material.grayscale = damp(
      ref.current.material.grayscale,
      hovered || clicked === index ? 0 : Math.max(0, 1 - y),
      6,
      delta
    );
    ref.current.material.color.lerp(
      c.set(hovered || clicked === index ? "white" : "#aaa"),
      hovered ? 0.3 : 0.1
    );
  });

  return (
    <Image
      ref={ref}
      {...props}
      position={position}
      scale={scale}
      onClick={click}
      onPointerOver={over}
      onPointerOut={out}
      alt='portfolio'
    />
  );
}
