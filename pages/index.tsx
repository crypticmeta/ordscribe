import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header'
import Hero1 from '../Components/Hero1'
import Footer from '../Components/Footer'
import bg from  "../public/assets/images/bg1.png"

const Home: NextPage = () => {
  return (
    <div
   className=' min-h-screen
   relative'
   >
     <div
          style={{ zIndex: -1 }}
          className="fixed top-0 bottom-0 right-0 left-0"
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity:"0.9" }}
            src="/assets/images/bg1.png"
            alt="bg"
          />
        </div>
       <Head>
         <title>Ordscribe</title>
       </Head>
       <div  className='relative z-[1] min-h-screen bg-black bg-opacity-60'>
          <Header/>
          <Hero1/>
          <Footer/>
       </div>
    </div>
  )
}

export default Home
