import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { HiClipboardList } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Card = ({element}) => {
   return (
      <motion.div className='rounded-xl border-2 border-neutral-300 shadow-xl overflow-hidden'
      initial={{y:100}}
      whileInView={{duration:1000 , y:0}}
      >
         <img src={`${element.image}`} alt="" className='w-full h-60' />
         <div className="p-5">
            <h4 className='text-2xl font-bold'>{element.name}</h4>
            <p className='flex items-center gap-1 text-neutral-500 font-semibold'><IoLocationOutline className='me-1' />{element.city}</p>
            <hr className='border border-neutral-400 my-4 rounded-xl' />
            <div className="flex justify-between items-center text-lg text-neutral-500">
               <div><p className='uppercase'>Cultural</p><span>Relax <button className='btn text-xs' style={{padding:'0px 3px'}}>+1</button></span></div>
               <h1 className='font-bold text-2xl text-neutral-700'>${element.price}</h1>
            </div>
            <hr className='border border-neutral-400 my-4 rounded-xl' />
            <p className='text-neutral-500 text-sm font-semibold mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum perspiciatis laboriosam esse sed asperiores distinctio fugiat odit tempora eaque praesentium!</p>
            <button className="btn">Details<HiClipboardList className='inline-block ms-1' /></button>
         </div>
      </motion.div>
   )
}

export default Card
