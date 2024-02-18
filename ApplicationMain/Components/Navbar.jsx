import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <Link href="Signup">Navbar for signup</Link>
        <Link href="Login">Navbar for signin</Link>
        <Link href="Flask">Flask</Link>
    </div>
  )
}

export default Navbar