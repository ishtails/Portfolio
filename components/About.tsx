import { motion } from "framer-motion"
import React from 'react'
import Link from "next/link"

type Props = {}

export default function About({}: Props) {
  return (
    <div className="relative flex flex-col h-screen text-center justify-evenly items-center max-w-7xl px-10 mx-auto md:text-left md:flex-row">

      <h3 className="absolute top-28 items-center uppercase tracking-[20px] text-gray-500 ml-3">About</h3>

      <motion.img 
      initial={{opacity:0, x:-200}}
      whileInView={{x:0, opacity:1}}
      transition={{duration:1.2}}
      viewport={{once:true}}
      className="relative top-16 md:top-0 flex-shrink-0 rounded-full w-44 sm:w-52 object-cover md:rounded-lg md:w-72 xl:w-[400px]" src={'./dp2.jpg'}/>

      <motion.div
      initial={{opacity:0, scale:0.9}}
      whileInView={{opacity:1, scale:1}}
      transition={{duration:1.2}}
      viewport={{once:true}}
      className="relative space-y-8 px-0 md:px-10">
        <h4 className="tracking-wide text-2xl sm:text-4xl font-bold">Here's a <span className="underline decoration-[#ffae00] hover:underline-offset-8 cursor-pointer">little</span> background</h4>

        <p className="text-md sm:text-lg font-extralight lg:text-xl tracking-wide text-left">I am passionate about new and emerging technologies, trying to dive into all the exciting possibilities. Currently I'm exploring the world of Web Development but I'm also really fascinated by Blockchain, Machine Learning & Artificial Intelligence.I am also proficient in Graphic Designing and have been designing for quite a while now.<br/><br/> Apart from that, I am a Music Producer, Composer & Mixing Engineer open to work / collaborate on projects. You may check out my music on Youtube / Instagram / Spotify @ishtails. 💛
</p>
      </motion.div>

    </div>
  )
}