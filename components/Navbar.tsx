import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
          <Image src="/next.svg" alt="logo" width={80} height={30}/> 
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/ninjas">Ninja listing</Link>
    </nav>
  )
}

export default Navbar