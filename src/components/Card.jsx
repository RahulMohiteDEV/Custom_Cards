import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';
import { motion } from "framer-motion";


const Card = ({data, constraintsRef }) => {
  return (
    <motion.div 
    drag
    dragConstraints={constraintsRef }
    dragElastic={0.2}
    dragMomentum={false}
     whileHover={{ scale: 1.1 }}
    className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-gray-200 text-black px-8 py-10 overflow-hidden shadow-lg'>
      <FaRegFileAlt className='text-2xl text-blue-500 ' />
      <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
      <div className='footer absolute bottom-0 w-full left-0 '>
        <div className='flex items-center justify-between px-8 mb-3 '>
          <h5>{data.filesize}</h5>
          <span className='w-7 h-7 rounded-full flex items-center justify-center'>
            {data.close ? <IoClose /> : < LuDownload size=".9em" />}
          </span>
        </div>
        {
          data.tag.isOpen && (
            <div className='tag w-full py-4 bg-gray-300 flex items-center justify-center '>
          <h3 className='text-sm font-semibold'>{data.tag.TagTitle}</h3>
        </div>
          ) }
        
      </div>
    </ motion.div>
  )
}

export default Card
