import React from 'react'
import {motion} from "framer-motion"

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0,
    }}
    animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius:["20%","20%","50%","80%","20%"],
    }}
    transition={{
        duration:2.5,
    }}
    className="relative flex justify-center items-center"
    >
        <motion.div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] animate-ping mt-52" />
        <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52" />
        <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52" />
        <div className="absolute border border-[#e8af33] rounded-full h-[650px] w-[650px] mt-52 animate-pulse opacity-20" />
    </motion.div>
  )
}

export default BackgroundCircles