import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <h1>Ninja List</h1>
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/ninjas">Ninja listing</Link>
    </nav>
  )
}

export default Navbar