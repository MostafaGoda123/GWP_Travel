import React, { useContext, useState } from 'react'
import { MobileHandlerContext } from '../context/MobileHandler'
import { TbGridDots } from 'react-icons/tb';
import { IoIosCloseCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navbar = () => {
   const { isMobile } = useContext(MobileHandlerContext);
   const [openMenu, setOpenMenu] = useState(false)   
   return (
      <nav className='relative container mx-auto flex items-center justify-between' style={{height : '10vh'}}>
         <Link to='/' className='font-semibold text-3xl cursor-pointer'>Travel.</Link>
         <div>
            {isMobile ?
               <div>
                  <TbGridDots className='text-3xl cursor-pointer' onClick={()=>setOpenMenu(true)}/>
                  {openMenu && 
                     <ul className='bg-neutral-200 absolute z-50 top-60 left-1/2 -translate-x-1/2 flex flex-col items-center gap-7 text-2xl text-neutral-600 font-semibold py-10 rounded-xl w-96'>
                     <li className='ms-auto me-10 cursor-pointer hover:text-[#0077A3]' style={{color: '#09B4C6'}}><IoIosCloseCircle className='text-5xl ms-auto' onClick={()=>setOpenMenu(false)}/></li>
                     <li className='w-full flex justify-center cursor-pointer' onClick={()=>setOpenMenu(false)}><Link className='hover:text-neutral-800' to="/">Home</Link></li>
                     <li className='w-full flex justify-center cursor-pointer' onClick={()=>setOpenMenu(false)}><Link className='hover:text-neutral-800' to="/packages">Packages</Link></li>
                     <li className='w-full flex justify-center cursor-pointer' onClick={()=>setOpenMenu(false)}><Link className='hover:text-neutral-800' to="/shop">Shop</Link></li>
                     <li className='w-full flex justify-center cursor-pointer' onClick={()=>setOpenMenu(false)}><Link className='hover:text-neutral-800' to="/about">About</Link></li>
                     <li className='w-full flex justify-center cursor-pointer' onClick={()=>setOpenMenu(false)}><Link className='hover:text-neutral-800' to="/pages">Pages</Link></li>
                     <li className='w-full flex justify-center cursor-pointer' onClick={()=>setOpenMenu(false)}><Link className='hover:text-neutral-800' to="/news">News</Link></li>
                     <li className='w-full flex justify-center cursor-pointer' onClick={()=>setOpenMenu(false)}><Link className='hover:text-neutral-800' to="/contact">Contact</Link></li>
                     <li><button className='btn'>Book Now</button></li>
                  </ul>
                  }
               </div>
            :
               <ul className='flex items-center gap-5 text-neutral-500'>
                  <li><Link className='hover:text-neutral-800' to="/">Home</Link></li>
                  <li><Link className='hover:text-neutral-800' to="/packages">Packages</Link></li>
                  <li><Link className='hover:text-neutral-800' to="/shop">Shop</Link></li>
                  <li><Link className='hover:text-neutral-800' to="/about">About</Link></li>
                  <li><Link className='hover:text-neutral-800' to="/pages">Pages</Link></li>
                  <li><Link className='hover:text-neutral-800' to="/news">News</Link></li>
                  <li><Link className='hover:text-neutral-800' to="/contact">Contact</Link></li>
                  <li><button className='btn'>Book Now</button></li>
               </ul>
            }
         </div>
      </nav>
   )
}

export default Navbar
