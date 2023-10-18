"use client"
import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Loader } from '@react-three/drei'
import { Html } from "@react-three/drei";

import LoadModel from "./loadingModel";

export function ModelViewer({ modelSrc, modelImg, cameraPosition, modelPosition }) {
    const [isVisibleImg, setIsVisibleImg,] = React.useState(true);
    const [isVisibleModel, setIsVisibleModel] = React.useState(false);

    function loadModel() {
        setIsVisibleImg(false)
        setIsVisibleModel(true)
    }

    return (
        <>
            <div className='d-flex justify-content-center'
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${modelImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                    // backgroundSize: 'cover',

                }}>

                {isVisibleModel &&
                    <>
                        <Canvas
                            shadows
                            camera={{
                                fov: 35,
                                position: cameraPosition,
                            }}
                            style={{ width: '100%', height: '100%' }}
                        >
                            <OrbitControls makeDefault />

                            <directionalLight intensity={1.5} />
                            <ambientLight intensity={4} />
                            <color args={['#121214']} attach="background" />
                            <Suspense fallback={<Html><Loader /></Html>}>
                                <LoadModel modelsrc={modelSrc} position={modelPosition} />
                            </Suspense>
                        </Canvas>
                    </>
                }
                {isVisibleImg && <div style={{
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                    {<button className={` btn btn-outline-light `} onClick={loadModel} style={{
                        backgroundColor: '#007bff',
                        marginTop: '28rem',
                        padding: '.375rem .75rem',
                        borderRadius: '0.25rem',
                        color: 'white',
                        borderColor: 'transparent',
                        fontWeight: '400',
                        fontSize: '1rem'
                    }}>Click to View</button>}
                </div>}


            </div>
        </>

    );
}

export default ModelViewer;