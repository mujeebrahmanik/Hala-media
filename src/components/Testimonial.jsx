import React from 'react'
import { testimonials } from '../items'

const Testimonial = () => {
  return (
    <div className='flex flex-col mt-20 border-b border-neutral-900' id='testimonials'>
        <div className="text-center">
            <span className='text-[#791BBA] bg-neutral-900 rounded-full h-6 py-1 px-2 text-sm font-medium uppercase'>
                testimonials
            </span>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl mt-8 lg:mt-8 tracking-wide font-medium'>What People are
                <span className='bg-gradient-to-r from-[#791BBA] to-blue-500 text-transparent bg-clip-text'>
                    {" "}Saying
                </span> 
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:mt-15">
            {testimonials.map((i,index)=>(
                <div key={index} className='bg-neutral-900 p-4 rounded-lg text-md border border-neutral-800 font-thin'>
                    <p>{i.text}</p>
                    <div className="flex mt-8 items-start">
                        <img src={i.image} alt={i.user} className='w-12 h-12 rounded-full mr-6 border border-neutral-300'/>
                        <div className="flex flex-col gap-0.5">
                            <h6 className='font-medium'>{i.user}</h6>
                            <p className='text-sm font-normal italic text-neutral-500'>{i.company}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className='flex justify-center items-center my-10 lg:my-15'>
            <a className='border-2 border-[#791BBA] rounded-md py-2 px-3 hover:bg-[#791BBA] cursor-pointer'>Join Now</a>
        </div>
    </div>
  )
}

export default Testimonial