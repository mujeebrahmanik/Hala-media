import React, { useState } from 'react'
import logo from '../assets/HM-Dots_white.png'
import {Menu,X} from 'lucide-react'
import { Link } from "react-scroll";

const Navbar = () => {
    const [drawerOpen,setDrawerOpen]=useState(false)

    const toggleNavbar=()=>{
        setDrawerOpen(!drawerOpen)
    }
  return (
    <>
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-900">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrik-0">
                        <img src={logo} alt="Logo" className='h-15 lg:w-full'/>
                    </div>

                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        <li><Link to='home' smooth={true} duration={500} className='cursor-pointer'>Home</Link></li>
                        <li><Link to='services' smooth={true} duration={500} className='cursor-pointer'>Services</Link></li>
                        <li><Link to='testimonials' smooth={true} duration={500} className='cursor-pointer'>Testmonials</Link></li>
                    </ul>

                    <div className="hidden lg:flex justify-center items-center">
                        <Link to='contact' smooth={true} duration={500}  href="" className='bg-gradient-to-r from-[#791BBA] to-blue-500 py-2 px-3 rounded-md cursor-pointer'>Contact</Link>
                    </div>

                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar} className='cursor-pointer'>
                            {drawerOpen ?<X/> : <Menu />}
                        </button>
                    </div>
                </div>

                {drawerOpen &&
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden gap-3">
                        <ul className='flex flex-col gap-3'>
                            <li><a href="about">About</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Testmonials</a></li>
                            <li><a href="">Book Call</a></li>
                        </ul>

                        <div className="flex justify-center items-center">
                            <a href="" className='bg-gradient-to-r from-[#791BBA] to-blue-500 py-2 px-3 rounded-md'>Contact</a>
                        </div>
                    </div>
                }
            </div>
        </nav>
    </>
  )
}

export default Navbar