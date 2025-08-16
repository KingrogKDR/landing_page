"use client";

import { useGLTF } from "@react-three/drei";
import { JSX } from "react";

type ModelProps = JSX.IntrinsicElements["group"];

export default function Model(props: ModelProps) {
  const { scene } = useGLTF("/landing_page_motor.glb");

  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/landing_page_motor.glb");
