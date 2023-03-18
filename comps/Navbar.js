import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  /* <img src='/ninjas.png'/> */


  return (
    <nav>
    <div className='logo'>
    <Image src='/ninjas.png' width={'128'} height={128}/>
    </div>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/ninjas">ninjas Listing</Link>
 
    </nav>
  )
}

export default Navbar