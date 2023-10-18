"use client"
import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Loader } from '@react-three/drei'
import { Html } from "@react-three/drei";
import 'bootstrap/dist/css/bootstrap.css'



import LoadModel from "./loadingModel";

export function ModelViewer({ modelSrc, modelImg, cameraPosition, modelPos }) {
    const [isVisibleImg, setIsVisibleImg,] = React.useState(true);
    const [isVisibleModel, setIsVisibleModel] = React.useState(false);
    // const [Texture1, setTexture1] = useState('')
    // const [Texture2, setTexture2] = useState('')



    function loadModel() {
        setIsVisibleImg(false)
        setIsVisibleModel(true)
    }



    // function Terrain() {
    //     const colorTexture = useTexture(Texture)
    //     return (
    //         // <Plane>
    //         <mesh>
    //             <boxGeometry />
    //             <meshStandardMaterial map={colorTexture} />
    //         </mesh>

    //         // {/* </Plane> */ }
    //     )
    // }

    // function ChangeTexure1() {
    //     setTexture1('')
    //     SourceTextModule1()
    // }
    // function ChangeTexure1() {
    //     setTexture2('')
    //     SourceTextModule2()
    // }

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
                            <ambientLight intensity={4} />
                            <color args={['#f5f9f9']} attach="background" />
                            <Suspense fallback={<Html><Loader /></Html>}>
                                <LoadModel modelsrc={modelSrc} modelPosition={modelPos} />
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
                    <button className="btn btn-primary mx-1">
                        Change texture 1
                    </button>
                    <button className="btn btn-primary mx-1">
                        Change texture 1
                    </button>
                    <button className="btn btn-primary mx-1">
                        Play animation
                    </button>
                    <button className="btn btn-primary mx-1">
                        View in VR
                    </button>
                </div>}

            </div>
        </>

    );
}

export default ModelViewer;