import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../public/images/logo.png"

function Navbar() {
  return (
    <header className='border-b flex justify-between '>
          <Link href={`/`}>
              <Image src={logo} alt='logo' priority/>
          </Link>  
          
          <nav>
              <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>How It Works</li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
          </nav>
    </header>
  )
}

export default Navbar