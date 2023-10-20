"use client"
import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Loader, useGLTF, useAnimations } from '@react-three/drei'
import { Html } from "@react-three/drei";
import 'bootstrap/dist/css/bootstrap.css';
import platform from "platform";
import Script from "next/script";
import Link from "next/link";

import LoadModel from "./loadingModel";

export function ModelViewer({ modelSrc, modelImg, cameraPosition, modelPos }) {
    const [isVisibleImg, setIsVisibleImg,] = React.useState(true);
    const [isVisibleModel, setIsVisibleModel] = React.useState(false);
    const [isAnimating, setIsAnimating] = React.useState(false);
    const [isTexture, setIsTexture] = React.useState(modelSrc);
    const [isIntensity, setIsIntensity] = React.useState(4);


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
        if (platform.os.family != "iOS") {
            setIsVisibleImg(false)
            setIsVisibleModel(true)
        }

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
                            style={{ width: '100%', height: '80%' }}
                        >
                            <OrbitControls makeDefault />

                            <directionalLight intensity={1.5} />
                            <ambientLight intensity={isIntensity} />
                            <color args={['#f5f9f9']} attach="background" />
                            <Suspense fallback={<Html><Loader /></Html>}>
                                <LoadModel modelsrc={isTexture} modelPosition={modelPos} animating={isAnimating} texture={isTexture} />
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
                    {platform.os.family != "iOS" && platform.os.family != "Android" && <button className={` btn btn-primary `} onClick={loadModel} style={{ marginTop: '28rem' }}>Click to View</button>}






                    {platform.os.family == "iOS" &&
                        <div class="d-flex mb-3  justify-content-center" style={{ marginTop: '28rem' }}>
                            <div className="d-flex flex-column col-3 mx-5">
                                <button className="btn btn-primary mx-1 my-1 align-self-center" style={{
                                    width: '100px'

                                }}>
                                    <a className="text-light" href="https://firrnas-models.s3.eu-west-3.amazonaws.com/elAraby/black+washing+.reality" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                        Black    </a>
                                </button>
                                <button className="btn btn-primary mx-1 my-1 align-self-center" style={{
                                    width: '100px'
                                }}>
                                    <a className="text-light" href="https://firrnas-models.s3.eu-west-3.amazonaws.com/elAraby/washing+machine+final+animations+final+buttons+(1)+(1).reality" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                        Silver
                                    </a>
                                </button>
                            </div>
                            <div className="d-flex flex-column col-3">
                                <button className="btn btn-primary mx-1 my-1 align-self-center" style={{
                                    width: '100px'
                                }}>
                                    <a className="text-light" href="https://firrnas-models.s3.eu-west-3.amazonaws.com/elAraby/2+scenes+1+washing+machine+final+2.reality" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                        Compare Black & Silver
                                    </a>
                                </button>

                            </div>

                        </div>

                    }

                    {platform.os.family == "Android" &&

                        <div class="d-inline   justify-content-center" style={{ marginTop: '28rem' }}>
                            <div className="d-flex flex-column col-3 ">
                                <button className={` btn btn-primary `} onClick={loadModel} style={{
                                    width: '150px'

                                }}>View in browser</button>

                                <button className="btn btn-primary my-1 " style={{
                                    width: '150px'

                                }}>
                                    <a className="text-light" href="intent://arvr.google.com/scene-viewer/1.0?file=https://firrnas-models.s3.eu-west-3.amazonaws.com/elAraby/Washing+Machine+Black+Huss.glb#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                        View in AR    </a>
                                </button>
                            </div>


                        </div>


                    }



                </div>}
                {isVisibleModel && <div className="container-fluid" >

                    <div class="d-flex mb-3  justify-content-center">
                        <div className="d-flex flex-column col-3 mx-5">
                            <button onClick={changeTex1} className="btn btn-primary mx-1 my-1 align-self-center" style={{
                                width: '100px'
                            }}>
                                Black
                            </button>
                            <button onClick={changeTex2} className="btn btn-primary mx-1 my-1 align-self-center" style={{
                                width: '100px'
                            }}>
                                Silver
                            </button>
                        </div>
                        <div className="d-flex flex-column col-3">
                            <button onClick={changeTex3} className="btn btn-primary mx-1 my-1 align-self-center" style={{
                                width: '100px'
                            }}>
                                White
                            </button>
                            <button onClick={anime} className="btn btn-primary mx-1 my-1  align-self-center" style={{
                                width: '100px'
                            }}>
                                Animate
                            </button>
                        </div>

                    </div>





                    {/* {platform.os.family == "iOS" && <button className="btn btn-outline-dark mx-1">
                            <a rel="ar" href="2 scenes 1 washing machine .reality" style={{ textDecoration: 'none' }}>
                                View in AR for iOS
                            </a>
                        </button>}
                        {platform.os.family == "Android" &&
                            <button className="btn btn-outline-dark mx-1">
                                <a className="" theme="dark" data-ar="true" rel="ar" href='intent://arvr.google.com/scene-viewer/1.0?file=/WashingMachineBlackHuss.glb#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;' style={{ textDecoration: 'none' }}>
                                    View in AR for Android
                                </a>
                            </button>} */}
                </div>
                }

            </div >
        </>

    );
}

export default ModelViewer;