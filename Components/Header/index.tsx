import Link from 'next/link'
import React from 'react'

 const Header = () => {
  return (
    <div className='bg-black flex justify-between space-x-7 py-4 px-10 items-center'>
        <div className='lg:w-5/12 md:w-5/12  ' >
        <Link href="/"> <img className='w-[50%]' src='/assets/images/logo.png'/> </Link>
        </div>
        <div className='text-white  flex justify-end  lg:text-3xl fira lg:w-7/12'>
            <p className=''>Bitcoin Ordinal Inscription</p>
        </div>
    </div>
  )
}
export default Header