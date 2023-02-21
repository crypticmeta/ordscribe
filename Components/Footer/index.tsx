import React from 'react'
import {FaDiscord} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className=' text-white flex justify-between items-center px-4 fira'>
        <div className='flex cursor-pointer items-center w-4/12 text-4xl space-x-3'>
           <Link href=""><BsTwitter/></Link>
           <Link href=""><FaDiscord/></Link>
           <Link  href=""><img className='w-[40%] py-4' src='/assets/images/brand.png'/></Link>
        </div>
        <p className='text-3xl cursor-pointer'>BULK ORDER?</p>
    </div>
  )
}

export default Footer