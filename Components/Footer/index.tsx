import React from 'react'
import {FaDiscord} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className=' text-white  flex justify-between items-center  fira'>
        <div className='flex cursor-pointer items-center w-7/12 md:w-4/12 text-xl lg:text-4xl px-10 space-x-3'>
           <Link href=""><BsTwitter/></Link>
           <Link href=""><FaDiscord/></Link>
           <Link  href=""><img className=' w-[80%]  md:w-full lg:w-[130px] lg:h-[53px] py-4' src='/assets/images/brand.png'/></Link>
        </div>
        <p className=' text-xl lg:text-3xl cursor-pointer pr-10'>BULK ORDER?</p>
    </div>
  )
}

export default Footer