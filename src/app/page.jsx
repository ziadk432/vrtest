import Image from 'next/image'
import styles from './page.module.css'
import ModelViewer from '@/components/modelViewer'

export default function Home() {
  return (
    <main className={styles.main}>
      <>
        <div className='d-flex justify-content-center' style={{
          width: '100%',
          height: '100vh',
          backgroundRepeat: 'no-repeat'
        }}>
          <ModelViewer className='gx-5 px-5' modelImg={"https://firrnas-models.s3.eu-west-3.amazonaws.com/pix/chair-removebg-preview.png"} modelSrc={"https://firrnas-models.s3.eu-west-3.amazonaws.com/gltf/sneaker_airforce.gltf"} cameraPosition={[0, 0, -60]} modelPosition={[0, -5, 0]}></ModelViewer>
        </div>
      </>

    </main>
  )
}
