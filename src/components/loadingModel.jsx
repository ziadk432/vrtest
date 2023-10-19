
import React, { useEffect } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";

// var model;

export function LoadModel({ modelsrc, modelPosition, animating }) {

    const model = useGLTF(modelsrc)


    const animations = useAnimations(model.animations, model.scene)

    const { names } = {
        names: animations.names
    }

    useEffect(() => {

        const actions = animations.actions[names[0]]
        actions.repetitions = 1
        actions.clampWhenFinished = 1
        if (animating) {
            actions.play()
        }

    }, [animating])

    return (
        <>
            <mesh>
                <primitive object={model.scene} position={modelPosition} scale={1} />
            </mesh>
        </>
    );
}

export default LoadModel;