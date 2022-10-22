import { motion } from "framer-motion"
import React from 'react'
import Skill from "./Skill"

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div 
    initial={{opacity:0, scale:0.9}}
    whileInView={{opacity:1, scale:1}}
    transition={{duration:1.2}}
    viewport={{once:true}}
    className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly items-center space-x-5 space-y-5">
        
        <h3 className="absolute top-28 items-center uppercase tracking-[20px] text-gray-500 ml-7">Tech</h3>
        <div className="grid grid-cols-4 gap-7 xl:gap-14 lg:grid-cols-8">
          <Skill url="https://camo.githubusercontent.com/37368c07ba573d5b2ecc8b6b724e847541a281c0fc135ee41fdd4aae61cda243/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f642f64352f5461696c77696e645f4353535f4c6f676f2e737667" title="TailwindCSS"/>
          <Skill url="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg" title="React"/>
          <Skill url="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg" title="JavaScript"/>
          <Skill url="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg" title="CSS 3"/>
          <Skill url="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg" title="HTML 5"/>
          <Skill url="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mysql/mysql-original-wordmark.svg" title="MySQL"/>
          <Skill url="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/cplusplus/cplusplus-original.svg" title="C++"/>
          <Skill url="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/c/c-original.svg" title="C"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" title="Adobe Photoshop"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" title="Adobe Illustrator"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg" title="Adobe Premiere Pro"/>
          <Skill url="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/canva/canva-original.svg" title="Canva"/>
          <Skill url="/fl.svg" title="FL Studio"/>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg" title="Bash"/>
          <Skill url="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-original.svg" title="Git"/>
          <Skill url="/github.svg" title="GitHub"/>
        </div>

    </motion.div>
  )
}

export default Skills