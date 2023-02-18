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
   className='bg-black min-h-screen
   '
   >
       <Head>
         <title>Ordscribe</title>
       </Head>
       <div  className=''>
          <Header/>
          <Hero1/>
          <Footer/>
       </div>
    </div>
  )
}

export default Home
