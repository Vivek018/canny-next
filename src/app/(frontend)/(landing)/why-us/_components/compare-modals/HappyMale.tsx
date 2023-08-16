import { useLayoutEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import happyMaleGLB from "@/assets/modals/happy-male.glb";

type Props = {
  index: number;
  props?: any;
};

export function HappyMale({ index, ...props }: Props) {
  const group = useRef<any>();
  const { nodes, materials, animations } = useGLTF(happyMaleGLB) as any;
  const { actions, mixer } = useAnimations(animations, group);

  useLayoutEffect(() => {
    actions[`dance${index}`]?.play();
    return () => {
      mixer.stopAllAction();
    };
  }, [actions, mixer, index]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='Armature' rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorig7Hips} />
          <skinnedMesh
            name='Ch33_Belt'
            geometry={nodes.Ch33_Belt.geometry}
            material={materials.Ch33_body}
            skeleton={nodes.Ch33_Belt.skeleton}
          />
          <skinnedMesh
            name='Ch33_Body'
            geometry={nodes.Ch33_Body.geometry}
            material={materials.Ch33_body}
            skeleton={nodes.Ch33_Body.skeleton}
          />
          <skinnedMesh
            name='Ch33_Eyelashes'
            geometry={nodes.Ch33_Eyelashes.geometry}
            material={materials.Ch33_hair}
            skeleton={nodes.Ch33_Eyelashes.skeleton}
          />
          <skinnedMesh
            name='Ch33_Hair'
            geometry={nodes.Ch33_Hair.geometry}
            material={materials.Ch33_hair}
            skeleton={nodes.Ch33_Hair.skeleton}
          />
          <skinnedMesh
            name='Ch33_Pants'
            geometry={nodes.Ch33_Pants.geometry}
            material={materials.Ch33_body}
            skeleton={nodes.Ch33_Pants.skeleton}
          />
          <skinnedMesh
            name='Ch33_Shirt'
            geometry={nodes.Ch33_Shirt.geometry}
            material={materials.Ch33_body}
            skeleton={nodes.Ch33_Shirt.skeleton}
          />
          <skinnedMesh
            name='Ch33_Shoes'
            geometry={nodes.Ch33_Shoes.geometry}
            material={materials.Ch33_body}
            skeleton={nodes.Ch33_Shoes.skeleton}
          />
          <skinnedMesh
            name='Ch33_Suit'
            geometry={nodes.Ch33_Suit.geometry}
            material={materials.Ch33_body}
            skeleton={nodes.Ch33_Suit.skeleton}
          />
          <skinnedMesh
            name='Ch33_Tie'
            geometry={nodes.Ch33_Tie.geometry}
            material={materials.Ch33_body}
            skeleton={nodes.Ch33_Tie.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(happyMaleGLB);
