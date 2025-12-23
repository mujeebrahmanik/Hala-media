import React from 'react'
import { features } from '../items'

const Services = () => {
  return (
    <div className='flex flex-col border-b border-neutral-800 min-h-[650px] mt-20' id='services'>
        <div className="text-center">
            <span className='text-[#791BBA] bg-neutral-900 rounded-full h-6 py-1 px-2 text-sm font-medium uppercase'>
                services
            </span>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl mt-8 lg:mt-8 tracking-wide font-medium'>What we 
                <span className='bg-gradient-to-r from-[#791BBA] to-blue-500 text-transparent bg-clip-text'>
                    {" "}Offer
                </span> 
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 lg:mt-15">
            {features.map((i,index)=>(
                <div key={index} className="bg-neutral-900 px-4 py-6 rounded-lg shadow-lg shadow-black">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex h-15 w-15 p-2 bg-neutral-800 justify-center items-center rounded-full text-[#791BBA]">
                            {i.icon}
                        </div>
                        <div>
                            <h5 className='mt-3 mb-3 lg:text-xl text-md text-center'>{i.text}</h5>
                            <p className="text-sm text-neutral-400 lg:p-2 text-center text-pretty">
                                {i.description}
                            </p>
                            <h6 className='text-xs my-3 px-2 text-neutral-400'>Deliverables</h6>
                            <ul className='list-disc text-xs text-neutral-400 px-5 text-start text-pretty'>
                                {i.deliverables.map((i,index)=>(
                                    <li key={index}>{i}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className='flex justify-center items-center my-10 lg:my-15'>
            <a className='border-2 border-[#791BBA] rounded-md py-2 px-3 hover:bg-[#791BBA] cursor-pointer'>Book a Strategy Call</a>
        </div>
    </div>
  )
}

export default Services