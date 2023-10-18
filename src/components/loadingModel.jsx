
import React from "react";
import { useGLTF } from "@react-three/drei";


export function LoadModel({ modelsrc, modelPosition }) {

    console.log(modelPosition)
    const model = useGLTF(modelsrc)

    return (
        <>
            <primitive object={model.scene} position={modelPosition} scale={1} />

        </>
    );
}

export default LoadModel;