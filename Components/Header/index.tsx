import Link from 'next/link'
import React from 'react'

 const Header = () => {
  return (
    <div className='bg-black flex justify-between space-x-7 py-2 px-10 items-center'>
        <div className=' lg:w-3/12' >
        <Link href="/"> <img className='' src='/assets/images/logo.png'/> </Link>
        </div>
        <div className=' lg:w-5/12'>
            <img className='' src='/assets/images/Boi.png'/>
        </div>
    </div>
  )
}
export default Header