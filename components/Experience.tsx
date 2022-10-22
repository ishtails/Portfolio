import React from "react";
import ExperienceCardUthaan from "./ExperienceCardUthaan";
import ExperienceCardGDSC from "./ExperienceCardGDSC";
import ExperienceCardishtails from "./ExperienceCardishtails";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

type Props = {};

export default function Experience({}: Props) {
  return (
    <div>
      <div className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly items-center space-x-5 space-y-5">

<h3 className="absolute top-28 items-center uppercase tracking-[20px] text-gray-500 ml-7">Experience</h3>

        <div className="w-full flex overflow-x-scroll xl:overflow-x-auto space-x-5 py-10 snap-x snap-mandatory xl:justify-center xl:items-center xl:space-x-10 scrollbar-hide">
          <ExperienceCardishtails />
          <ExperienceCardUthaan />
          <ExperienceCardGDSC />
        </div>
    </div>

    <motion.a 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    href="#hero" className="flex sticky bottom-10 sm:bottom-5 justify-center cursor-pointer hover:scale-125 transition-all">
    <BsFillArrowUpCircleFill size={"30px"} color={"Gray"}/>
    </motion.a>

    </div>
  );
}
