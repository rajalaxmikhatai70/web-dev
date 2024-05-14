import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className='w-full'>
        <img src='quiver.jpg' className='w-full' alt="Quiver" />
      </div>
      <nav className='bg-orange-600 flex flex-wrap justify-between items-center py-2 px-4 md:px-12'>
        <Link href="/" className="text-white px-3 py-2 text-lg md:text-2xl sm:text-1xl">
          Shree Jagannath
          </Link>
        <Link href="/about" className="text-white px-3 py-2 text-lg md:text-2xl sm:text-1xl">
          Politics
          </Link>
        <Link href="/contact" className="text-white px-3 py-2 text-lg md:text-2xl sm:text-1xl">
          Tech
          </Link>
        <Link href="/gallery" className="text-white px-3 py-2 text-lg md:text-2xl sm:text-1xl">
          Education
          </Link>
        <Link href="/faq" className="text-white px-3 py-2 text-lg md:text-2xl sm:text-1xl">
          Nature
          </Link>
        <Link href="/services" className="text-white px-3 py-2 text-lg md:text-2xl sm:text-1xl">
          News
          </Link>
        <Link href="/services" className="text-white px-3 py-2 text-lg md:text-2xl sm:text-1xl">
          10 min News
          </Link>
      </nav>
    </div>
  )
}
