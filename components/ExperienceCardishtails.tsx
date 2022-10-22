import { motion } from "framer-motion";
import React from "react";
import {SiAdobepremierepro} from 'react-icons/si'
import {MdPiano} from 'react-icons/md'
import Image from "next/image";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="relative flex flex-col flex-shrink-0 justify-center items-center border px-5 py-9 rounded-3xl border-transparent bg-[#303030] transition-opacity duration-200 opacity-70 cursor-pointer hover:opacity-100 md:w-[450px] w-[400px] snap-center">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src={"/ishtails Logo.png"}
        alt="img"
        className="w-32 xl:w-[200px] object-cover object-center mb-4"
      />

      <div className="flex flex-col items-center justify-center">
        <h4 className="text-xl font-bold">Musician</h4>
        <a href="https://linktr.ee/ishtails" target={"blank"} className="py-1 font-semibold hover:scale-110 transition-all text-[#c89192]">ishtails</a>
      </div>
      
      <div className="flex flex-row space-x-3 my-3">
        <SiAdobepremierepro size={"1.5em"} color={"#8282e6"}  className="hover:scale-125 transition-all"/>
        <Image src={'/fl.svg'} alt="FL studio" className="w-6 hover:scale-125 transition-all"/>
        <MdPiano size={"1.5em"} color={"#d0a628"} className="hover:scale-125 transition-all"/>
      </div>

      <motion.div
      initial={{
        opacity: 0,
        scale:0.9
      }}
      whileInView={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{ once: true }} className="px-5 py-1 text-md font-light">
        <span className="text-lg font-semibold text-rose-400">I am</span> a musician under the title &quot;ishtails&quot;. I have been composing, producing, mixing and mastering tracks for past few years. Tap the label above to have a glance at my projects.
      </motion.div>
    </article>
  );
}

export default ExperienceCard;
