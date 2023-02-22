import Link from 'next/link'
import React from 'react'
import { SlPicture } from "react-icons/sl";
const Hero1 = () => {
  return (
    <div
    className=''>
        <div className='text-white text-center font-bold flex justify-center   md:text-3xl lg:text-4xl xl:text-5xl '>
            <p className='fira py-10 lg:w-10/12'>
            IMMUTABLE DATA STORAGE ON THE MOST DECENTRALIZED NETWORK IN THE WORLD 
            </p>
        </div>
        <div className='text-white fira'>
            <p className='text-center pb-10 xl:pb-20 md:text-xl lg:text-3xl xl:text-4xl'>Select Content Type:</p>
            <div className='  flex flex-wrap pb-10 px-20 font-semibold justify-center items-center space-x-3 lg:px-10'>
              <div className='w-full  lg:w-3/12 cursor-pointer text-white fira  '>
                   <div className='flex justify-center'>
                      <img src='/assets/images/A.png'/>
                   </div>
                   <p className='text-center text-xl pt-6 md:pt-10 lg:pt-10 xl:pt-10 '>
                     TEXT
                   </p>
                </div>
                <div className='w-full lg:w-3/12 py-10  lg:py-0 cursor-pointer text-white fira md:space-y-2'>
                <div className='flex px-5  text-[220px] justify-center items-center'>
                    <Link href="/upload" ><SlPicture/></Link>
                   </div>
                   <Link href="/upload" ><p className='text-center text-xl  pt-6  '>IMAGE</p></Link>
                </div>
                <div className='w-full lg:w-3/12 cursor-pointer text-white fira '>
                <div className='flex justify-center items-center pt-10 '>
                      <img className='' src='/assets/images/audio.png'/>
                   </div>
                    <p className='text-center pt-8  text-xl  '>OTHER</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero1