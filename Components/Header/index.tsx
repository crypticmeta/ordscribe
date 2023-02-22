import Link from 'next/link'
import React from 'react'

 const Header = () => {
  return (
    <div className='bg-black flex justify-between space-x-7 py-2 px-10 items-center'>
        <div className=' lg:w-3/12' >
        <Link href="/"> <img className='' src='/assets/images/logo.png'/> </Link>
        </div>
        <div className='text-white  lg:text-3xl fira lg:w-5/12'>
            <p>Bitcoin Ordinal Inscription</p>
        </div>
    </div>
  )
}
export default Header