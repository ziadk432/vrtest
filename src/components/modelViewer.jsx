"use client"
import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Loader, useGLTF, useAnimations } from '@react-three/drei'
import { Html } from "@react-three/drei";
import 'bootstrap/dist/css/bootstrap.css';
import platform from "platform";

import LoadModel from "./loadingModel";

export function ModelViewer({ modelSrc, modelImg, cameraPosition, modelPos }) {
    const [isVisibleImg, setIsVisibleImg,] = React.useState(true);
    const [isVisibleModel, setIsVisibleModel] = React.useState(false);
    const [isAnimating, setIsAnimating] = React.useState(false);
    const [isTexture, setIsTexture] = React.useState(modelSrc);
    const [isIntensity, setIsIntensity] = React.useState(1);


    function changeTex1() {
        setIsTexture('/Washing Machine + Animation Black.glb')
        setIsIntensity(4)
        setIsAnimating(false)
    }
    function changeTex2() {
        setIsTexture('/Washing Machine Silver.glb')
        setIsIntensity(1)
        setIsAnimating(false)

    }
    function changeTex3() {
        setIsTexture('/Washing Machine White00.glb')
        setIsIntensity(1)
        setIsAnimating(false)
    }


    function loadModel() {
        setIsVisibleImg(false)
        setIsVisibleModel(true)
    }

    function anime() {
        setIsAnimating(true)
    }

    console.log(platform)

    return (
        <>
            <div className='col-12'
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
                            style={{ width: '100%', height: '90%' }}
                        >
                            <OrbitControls makeDefault />

                            <directionalLight intensity={1.5} />
                            <ambientLight intensity={isIntensity} />
                            <color args={['#f5f9f9']} attach="background" />
                            <Suspense fallback={<Html><Loader /></Html>}>
                                {/* <LoadModel modelsrc={isTexture} modelPosition={modelPos} animating={isAnimating} texture={isTexture} /> */}
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
                    {<button className={` btn btn-primary `} onClick={loadModel} style={{ marginTop: '28rem' }}>Click to View</button>}




                </div>}
                {isVisibleModel && <div className="d-flex justify-content-center">
                    <button onClick={changeTex1} className="btn btn-primary mx-1">
                        Black
                    </button>
                    <button onClick={changeTex2} className="btn btn-primary mx-1">
                        Silver
                    </button>
                    <button onClick={changeTex3} className="btn btn-primary mx-1">
                        White
                    </button>
                    <button onClick={anime} className="btn btn-primary mx-1">
                        Play animation
                    </button>

                    {platform.os.family == "iOS" && <button className="btn btn-outline-dark mx-1">
                        <a className="" theme="dark" data-ar="true" rel="ar" href="/washing machine final animations final buttons.reality" style={{ textDecoration: 'none' }}>
                            View in AR for iOS
                        </a>
                    </button>}
                    {platform.os.family == "Android" &&
                        <button className="btn btn-outline-dark mx-1">
                            <a className="" theme="dark" data-ar="true" rel="ar" href='https//arvr.google.com/scene-viewer/1.0?file=https://firrnas-models.s3.eu-west-3.amazonaws.com/gltf/chair_swan.gltf#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;' style={{ textDecoration: 'none' }}>
                                View in AR for Android
                            </a>
                        </button>}



                </div>}

            </div >
        </>

    );
}

export default ModelViewer;