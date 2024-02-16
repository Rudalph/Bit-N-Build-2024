import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <Link href="Signup">Navbar for signup</Link>
        <Link href="Login">Navbar for signin</Link>
    </div>
  )
}

export default Navbar