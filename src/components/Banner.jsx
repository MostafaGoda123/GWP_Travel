import React from 'react'
import vid from "../images/Sea, Cruise, Ocean. Free Stock Video.mp4"
import { FaLocationDot } from 'react-icons/fa6'

const Banner = () => {
   return (
      <div className='relative w-full'  style={{height : '90vh'}}>
         <video loop muted autoPlay className='bannerVideo z-20' >
            <source src={vid} type="video/mp4" />
         </video>
         <div className="content absolute z-30 w-full h-full">
            <div className=" container mx-auto flex flex-col justify-center h-full">
               <p className='text-white'>Our Packages</p>
               <h1 className='text-white font-bold text-3xl mb-10'>Search your holiday</h1>
               <form className='sm:p-10 p-5 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white rounded-xl'>
                  <div className="inp">
                     <label className='text-neutral-600 inline-block mb-2'>Search your destination :</label>
                     <div className='relative'>
                        <input type="text" placeholder='Enter name here ...' className='w-full h-10 bg-neutral-200 rounded-xl px-3'/>
                        <FaLocationDot className='absolute top-1/2 -translate-y-1/2 right-3 text-neutral-600'/>
                     </div>
                  </div>
                  <div className="inp">
                     <label className='text-neutral-600 inline-block mb-2'>Select your date :</label>
                     <input type="date" className='w-full h-10 bg-neutral-200 rounded-xl px-3'/>
                  </div>
                  <div className="inp">
                     <label className='text-neutral-600 mb-2 flex justify-between'><span>Max price :</span><span className='text-neutral-600 font-bold'>$5000</span></label>
                     <div className='relative bg-neutral-200 h-10 rounded-xl px-3'>
                        <input type="range" className='w-full h-10 bg-neutral-200 rounded-xl'/>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Banner
