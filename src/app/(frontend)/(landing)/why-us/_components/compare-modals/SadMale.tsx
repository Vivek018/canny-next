import { useLayoutEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import sadMaleGLB from "@/assets/modals/sad-male.glb";

type Props = {
  index: number;
  props?: any;
};

export function SadMale({ index, ...props }: Props) {
  const group = useRef<any>();
  const { nodes, materials, animations } = useGLTF(sadMaleGLB) as any;

  const { actions, mixer } = useAnimations(animations, group);

  useLayoutEffect(() => {
    actions[`sad${index}`]?.play();
    return () => {
      mixer.stopAllAction();
    };
  }, [actions, mixer, index]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='Sad' rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorig10Hips} />
          <skinnedMesh
            name='Ch28_Body'
            geometry={nodes.Ch28_Body.geometry}
            material={materials.Ch28_body}
            skeleton={nodes.Ch28_Body.skeleton}
          />
          <skinnedMesh
            name='Ch28_Eyelashes'
            geometry={nodes.Ch28_Eyelashes.geometry}
            material={materials.Ch28_hair}
            skeleton={nodes.Ch28_Eyelashes.skeleton}
          />
          <skinnedMesh
            name='Ch28_Hair'
            geometry={nodes.Ch28_Hair.geometry}
            material={materials.Ch28_hair}
            skeleton={nodes.Ch28_Hair.skeleton}
          />
          <skinnedMesh
            name='Ch28_Hoody'
            geometry={nodes.Ch28_Hoody.geometry}
            material={materials.Ch28_body}
            skeleton={nodes.Ch28_Hoody.skeleton}
          />
          <skinnedMesh
            name='Ch28_Pants'
            geometry={nodes.Ch28_Pants.geometry}
            material={materials.Ch28_body}
            skeleton={nodes.Ch28_Pants.skeleton}
          />
          <skinnedMesh
            name='Ch28_Sneakers'
            geometry={nodes.Ch28_Sneakers.geometry}
            material={materials.Ch28_body}
            skeleton={nodes.Ch28_Sneakers.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(sadMaleGLB);
