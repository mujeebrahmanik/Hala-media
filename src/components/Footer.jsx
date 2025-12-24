import React from 'react'
import logo from '../assets/HM-Dots_white.png'
import { Phone,Mail,MapPin,Instagram,Facebook,Twitter } from 'lucide-react'
import { Link } from "react-scroll";


const Footer = () => {
  return (
    <div className='mt-20 grid grid-cols-1 border-t border-neutral-800 sm:grid-cols-2 lg:grid-cols-4 items-start px-3 py-8 gap-6 lg:gap-2'>
        <div className="flex">
            <img src={logo} alt="" srcset="" className='h-20 lg:w-1/2 w-[150px]'/>
        </div>

        <div className="flex flex-col gap-6">
            <h6 className='font-medium'>Quick Links</h6>
            <ul className='text-sm text-neutral-300 space-y-2'>
                <li className='underline'><Link to='home' smooth={true} duration={500} className='cursor-pointer'>Home</Link></li>
                <li className='underline'><Link to='services' smooth={true} duration={500} className='cursor-pointer'>Services</Link></li>
                <li className='underline'><Link to='testimonials' smooth={true} duration={500} className='cursor-pointer'>Testimonials</Link></li>
            </ul>
        </div>

        

        <div className="flex flex-col gap-6">
            <h6 className='font-medium'>Follow Us</h6>
            <div className='flex text-sm text-neutral-300 gap-3'>
                <div><Instagram/></div>
                <div><Facebook/></div>
                <div><Twitter/></div>
            </div>
        </div>

        <div className="flex flex-col gap-6">
            <h6 className='font-medium'>Contact Us</h6>
            <ul className='text-sm text-neutral-300 space-y-3'>
                <li>
                    <div className='flex gap-3'>
                        <div><Phone/></div>
                        <p>+971 4 552 8454</p>
                    </div>
                </li>
                <li>
                    <div className='flex gap-3'>
                        <div><Mail/></div>
                        <p>info@halamedia.ae</p>
                    </div>
                </li>
                <li>
                    <div className='flex gap-3'>
                        <div><MapPin/></div>
                        <div className="ml-0">
                            <p className="text-neutral-300">Next to Dubai Mall / Burj Khalifa Metro Station</p>
                            <p className="text-neutral-300">Dubai, United Arab Emirates</p>
                        </div>
                    </div>
                </li>
                
            </ul>
        </div>

    </div>
  )
}

export default Footer