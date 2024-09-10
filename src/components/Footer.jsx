import React from 'react'
import vid from '../images/seaFooter.mp4'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa6'
import { FaInstagramSquare } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import { motion } from 'framer-motion';

const Footer = () => {
   return (
      <footer className='relative bg-red-400 w-full' style={{minHeight : '80vh'}}>
         <video loop muted autoPlay className='bannerVideo z-20' >
            <source src={vid} type="video/mp4" />
         </video>
         <div className="absolute z-30 w-full h-full py-10">
            <div className="container mx-auto flex flex-col gap-8 justify-center h-full">
               <motion.section className="flex gap-5 flex-wrap justify-center items-center"
               initial={{y:100}}
               whileInView={{duration:1000 , y:0}}>
                  <p className='text-white'>
                     <span>Keep in touch</span>
                     <span className="block font-bold text-3xl">Travel with us</span>
                  </p>
                  <input type="text" className='bg-transparent rounded-3xl px-3 py-2 border-2 border-neutral-500 outline-none text-white' placeholder='Enter email address' />
                  <button className="btn">Send</button>
               </motion.section>
               <motion.section className="rounded-3xl bg-white overflow-hidden"
               initial={{y:100}}
               whileInView={{duration:1000 , y:0}}>
                  <div className="py-6 px-3 flex flex-wrap">
                     <div className="sm:w-1/2 w-full p-3 flex flex-col gap-3">
                        <h1 className="font-bold text-2xl">Travel.</h1>
                        <p className='text-neutral-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maiores ipsa doloremque, veritatis saepe ipsum unde nihil quaerat, deserunt illum, eaque veniam? Ipsa, expedita quia dolore illum magnam sequi illo?</p>
                        <span className="icons flex gap-3 text-2xl text-neutral-600">
                           <FaTwitter className='hover:text-[#09b4c6] duration-300 cursor-pointer'/>
                           <FaYoutube className='hover:text-[#09b4c6] duration-300 cursor-pointer'/>
                           <FaInstagramSquare className='hover:text-[#09b4c6] duration-300 cursor-pointer'/>
                           <FaFacebook className='hover:text-[#09b4c6] duration-300 cursor-pointer'/>
                        </span>
                     </div>
                     <div className="sm:w-1/2 w-full p-3 grid grid-cols-3 gap-3">
                        <ul>
                           <li className='font-semibold mb-2 text-2xl'>Our Agency</li>
                           <li className='flex items-center py-1 ps-3 gap-1 duration-300 hover:text-[#09b4c6] hover:ps-5 cursor-pointer'><IoIosArrowForward />Services</li>
                           <li className='flex items-center py-1 ps-3 gap-1 duration-300 hover:text-[#09b4c6] hover:ps-5 cursor-pointer'><IoIosArrowForward />Insurance</li>
                           <li className='flex items-center py-1 ps-3 gap-1 duration-300 hover:text-[#09b4c6] hover:ps-5 cursor-pointer'><IoIosArrowForward />Agency</li>
                           <li className='flex items-center py-1 ps-3 gap-1 duration-300 hover:text-[#09b4c6] hover:ps-5 cursor-pointer'><IoIosArrowForward />Tourism</li>
                           <li className='flex items-center py-1 ps-3 gap-1 duration-300 hover:text-[#09b4c6] hover:ps-5 cursor-pointer'><IoIosArrowForward />Payment</li>
                        </ul>
                        <ul>
                           <li className='font-semibold mb-2 text-2xl'>Partners</li>
                           <li className='flex items-center py-1 ps-3 gap-1 duration-300 hover:text-[#09b4c6] hover:ps-5 cursor-pointer'><IoIosArrowForward />Booking</li>
                           <li className='flex items-center py-1 ps-3 gap-1 duration-300 hover:text-[#09b4c6] hover:ps-5 cursor-pointer'><IoIosArrowForward />RentalCar</li>
                           <li className='flex items-center py-1 ps-3 gap-1 duration-300 hover:text-[#09b4c6] hover:ps-5 cursor-pointer'><IoIosArrowForward />HostelWorld</li>
                           <li className='flex items-center py-1 ps-3 gap-1 duration-300 hover:text-[#09b4c6] hover:ps-5 cursor-pointer'><IoIosArrowForward />Trivago</li>
                           <li className='flex items-center py-1 ps-3 gap-1 duration-300 hover:text-[#09b4c6] hover:ps-5 cursor-pointer'><IoIosArrowForward />TripAdvisor</li>
                        </ul>
                        <ul>
                           <li className='font-semibold mb-2 text-2xl'>Last Minute</li>
                           <li className='flex items-center py-1 ps-3 gap-1 duration-300 hover:text-[#09b4c6] hover:ps-5 cursor-pointer'><IoIosArrowForward />London</li>
                           <li className='flex items-center py-1 ps-3 gap-1 duration-300 hover:text-[#09b4c6] hover:ps-5 cursor-pointer'><IoIosArrowForward />California</li>
                           <li className='flex items-center py-1 ps-3 gap-1 duration-300 hover:text-[#09b4c6] hover:ps-5 cursor-pointer'><IoIosArrowForward />Indonesia</li>
                           <li className='flex items-center py-1 ps-3 gap-1 duration-300 hover:text-[#09b4c6] hover:ps-5 cursor-pointer'><IoIosArrowForward />Europe</li>
                           <li className='flex items-center py-1 ps-3 gap-1 duration-300 hover:text-[#09b4c6] hover:ps-5 cursor-pointer'><IoIosArrowForward />Oceania</li>
                        </ul>
                     </div>
                  </div>
                  <div className="bg-[#09B4C6] flex justify-between items-center px-5 py-3 text-white">
                     <p className="">Best travel website theme</p>
                     <p className="">Copyrights reserved - <span className="font-semibold">Eng \ Mostafa</span></p>
                  </div>
               </motion.section>
            </div>
         </div>
      </footer>
   )
}

export default Footer
