import Image from 'next/image'
import styles from './page.module.css'
import ModelViewer from '@/components/modelViewer'
import platform from 'platform'






export default function Home() {


  console.log(platform.os)

  return (
    <main className={styles.main}>
      <>
        <div className='d-flex justify-content-center align-items-center' style={{
          width: '100%',
          height: '100vh',
          backgroundRepeat: 'no-repeat'
        }}>
          <ModelViewer className='gx-5 px-5' modelImg={"/12-twt-tln12lwt-removebg-preview-removebg-preview.png"} modelSrc={"/Washing Machine White00.glb"} cameraPosition={[0, 1, 3]} modelPos={[0, -0.5, 0]}></ModelViewer>
        </div>


      </>

    </main>
  )
}
