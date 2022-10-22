import { motion } from "framer-motion"
import Link from "next/link"
import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import BackgroundCircles from "./BackgroundCircles"

type Props = {}

function Hero({}: Props) {

    const [text] = useTypewriter({
        words: ["<hey-it's-kartik/>", 
        "<i-love-to-code/>", 
        "<i-also-love-to-design/>",
        "<and-jam-to-music/>"
    ],

        loop: true,
        delaySpeed: 2500,
    })

    return (
      <div className="h-screen relative top-24 flex flex-col space-y-8 my-auto items-center justify-center">
        <BackgroundCircles />

        <motion.img
          initial={{
            opacity:0,
        }}
        animate={{
            opacity:[0,0,0,0.5,1],
        }}
        transition={{
            duration:5,
        }}        
         className="relative w-32 h-32 rounded-full object-cover"
         src={'/dp1.jpg'} alt="image" />

         
        <motion.h2 
        initial={{
          opacity:0,
          scale:0.9,
        }}
        animate={{
          opacity:[0,0,0,0.5,1],
          scale:1,
        }}
        transition={{
            duration:5,
        }}
        className="ml-4 tracking-[15px] text-gray-500 z-20">STYLES</motion.h2>

        <motion.div className="z-20"
          initial={{
            opacity:0,
          }}
          animate={{
              opacity:[0,0,0,0.5,1],
          }}
          transition={{
              duration:5,
          }}>
          
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold px-10 font-mono">
            <span className="mr-1 text-gray-200">{text}</span>
            <Cursor cursorColor="#F7AB0A"/>
          </h1>
        </motion.div>

        <motion.div className="z-20"
        initial={{
          opacity:0,
          scale:0.8
        }}
        animate={{
          opacity:[0,0,0,0,1],
          scale:1,
        }}
        transition={{
            duration:5,
        }}>
          <Link href="#about">
            <button className="heroButton">
              About
            </button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">
              Experience
            </button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">
              Skills
            </button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">
              Projects
            </button>
          </Link>
        </motion.div>
      </div>
    )
}
export default Hero
