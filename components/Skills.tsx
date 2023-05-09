import { motion } from "framer-motion"
import React from 'react'
import { BsFillArrowUpCircleFill } from "react-icons/bs"
import Skill from "./Skill"

type Props = {}

const Skills = (props: Props) => {
  return (
    <div>
      <motion.div 
    initial={{opacity:0, scale:0.9}}
    whileInView={{opacity:1, scale:1}}
    transition={{duration:1.2}}
    viewport={{once:true}}
    className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly items-center space-x-5 space-y-5">
        
        <h3 className="absolute top-28 items-center uppercase tracking-[20px] text-gray-500 ml-7">Skills</h3>
        <div className="grid grid-cols-4 gap-7 xl:gap-14 lg:grid-cols-8">
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" title="TailwindCSS"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" title="React"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" title="JavaScript"/>
          <Skill url="https://www.svgrepo.com/show/102011/css-3.svg" title="CSS 3"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" title="HTML 5"/>
          <Skill url="https://www.svgrepo.com/show/331760/sql-database-generic.svg" title="SQL"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" title="C++"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" title="C"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" title="Adobe Photoshop"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" title="Adobe Illustrator"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg" title="Adobe Premiere Pro"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg" title="Canva"/>
          <Skill url="/fl.svg" title="FL Studio"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg" title="Bash"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" title="Git"/>
          <Skill url="/github.svg" title="GitHub"/>
        </div>

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

export default Skills
