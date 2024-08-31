import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"


function Card({ data ,reference }) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={1.1} dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] text-white  bg-zinc-900/90 py-10 px-8 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0  w-full left-0 '>
                <motion.div className='flex items-center justify-between py-3   px-8  mb-3'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 rounded-full bg-zinc-600 flex items-center justify-center'>
                        {data.close ? <IoCloseSharp /> : <LuDownload size="0.7em" color='#fff' />}
                    </span>
                </motion.div>

                {
                    data.tag.isOpen && (
                        <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                            <h3 className='text-sm font-semibold flex items-center justify-center'>{data.tag.tagTitle}</h3>
                        </div>
                    )}

            </div>

        </motion.div>
    )
}

export default Card
