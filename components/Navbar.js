import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import {BiSearch} from "react-icons/bi"
import {BsBellFill} from "react-icons/bs"
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
        <div className='container flex justify-between'>
            <div className='flex items-center space-x-2 md:space-x-10'>
                <Link href="/">
                    <Logo style="h-auto w-[100px]" />
                </Link>
                <ul className='hidden space-x-4 md:flex'>
                    <li className='headerLink cursor-pointer font-semibold text-white hover:text-white'>
                        Home
                    </li>
                    <li className='headerLink'>TV Show</li>
                    <li className='headerLink'>Movies</li>
                    <li className='headerLink'>New & Popular</li>
                    <li className='headerLink'>My List</li>


                </ul>
            </div>

            <div className='flex items-center space-x-4 text-sm font-light'>
                <BiSearch className="sm hidden h-6 w-6 sm:inline"/>
                <p className='hidden lg:inline'>Kids</p>
                <BsBellFill className="h-6 w-6"/>

                <Image src="/dp.png" alt="dp" width={60} height={60} className="cursor-pointer rounded w-auto h-auto" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar