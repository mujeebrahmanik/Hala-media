import React from 'react'
import video1 from '../assets/video1.MP4'
import video2 from '../assets/video2.MP4'


const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-10 gap-10" id='home'>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide text-center font-semibold">
            discover,connect,<br/>
            <span className='bg-gradient-to-r from-[#791BBA] to-blue-500 text-transparent bg-clip-text'>thrive online.</span>
        </h1>
        <p className='text-md lg:text-lg max-w-6xl text-center text-neutral-500 text-balance'>
            indulge in a bespoke digital journey designed exclusively for discerning clients. Elevate your online presence with tailored, cutting-edge solutions, where connection meets sophistication, and success becomes a refined experience.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
                <a className='bg-gradient-to-r from-[#791BBA] to-blue-500 rounded-md py-2 px-3 cursor-pointer'>Book your slot</a>
                <a className='border-2 border-[#791BBA] rounded-md py-2 px-3 hover:bg-[#791BBA] cursor-pointer'>Download Portfolio</a>
        </div>

        <div className="flex justify-center gap-6 mt-4 lg:flex-row flex-col">
            <video autoPlay loop muted className='lg:w-1/2 rounded-lg'>
              <source src={video2} type='video/mp4' />
                Your browser doesnt support video tag
            </video>
            <video autoPlay loop muted className='lg:w-1/2 rounded-lg'>
              <source src={video1} type='video/mp4' />
                Your browser doesnt support video tag
            </video>
        </div>
    </div>
  )
}

export default HeroSection