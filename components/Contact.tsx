import React from 'react'
import {SiGmail} from 'react-icons/si'
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import { BsFillArrowUpCircleFill } from "react-icons/bs"
import Icons from "./Icons"

type Props = {}

const Contact = (props: Props) => {
  return (
    <div>
      <motion.div
    initial={{opacity:0, scale:0.9}}
    whileInView={{opacity:1, scale:1}}
    transition={{duration:1.2}}
    viewport={{once:true}}
    className="relative flex flex-col h-screen text-center justify-center items-center max-w-7xl px-10 space-y-10 mx-auto">

      <h3 className="absolute top-28 items-center uppercase tracking-[20px] text-gray-500 ml-3">Contact</h3>

      <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbtmMJWHgvrLQQLvsRgGbwBnvsJmLZFHtzNhXHcKqGtFckmWDMkGsCHlrfmbSqHDNwjbzh" target={"blank"}
       className="bg-[#303030] flex flex-col justify-center items-center p-10 rounded-2xl w-full h-[250px] opacity-70 hover:opacity-100 hover:bg-[#404040] transition-all hover:scale-110 cursor-pointer space-y-3 text-md font-thin tracking-widest">
        <SiGmail size={"100px"}/>
        <p>Write to me at<br/>kartik100100@gmail.com</p>
      </a>
      
      <Icons />

    </motion.div>
      
    <motion.a 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    href="#hero" className="flex sticky bottom-16 sm:bottom-5 justify-center cursor-pointer hover:scale-125 transition-all">
    <BsFillArrowUpCircleFill size={"30px"} color={"Gray"}/>
    </motion.a>
    </div>
  )
}

export default Contact