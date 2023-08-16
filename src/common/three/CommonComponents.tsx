"use client";

import { PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { Vector3 } from "three";

export const Common = ({
  cameraPosition = [0, 0, 6],
  cameraFov = 45,
  pointLightPosition = [20, 30, 10],
  pointLightIntensity = 1,
  ambientLightIntensity = 0.5,
}: {
  cameraPosition?: number[];
  cameraFov?: number;
  pointLightPosition?: number[];
  pointLightIntensity?: number;
  ambientLightIntensity?: number;
}) => (
  <Suspense fallback={null}>
    <ambientLight intensity={ambientLightIntensity} />
    <pointLight
      position={pointLightPosition as unknown as Vector3}
      intensity={pointLightIntensity}
    />
    <PerspectiveCamera
      makeDefault
      fov={cameraFov}
      position={cameraPosition as unknown as Vector3}
    />
  </Suspense>
);
