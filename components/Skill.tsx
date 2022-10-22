import Image from "next/image";
import React from 'react'

type Props = {
  url: string,
  title: string;
}

const Skill = ({url, title}: Props) => {
  return (
    <Image 
    title={title}
    className="group relative flex cursor-pointer w-24 lg:w-32 transition-transform hover:scale-125"
    src={url} alt={title}>
    </Image>
  )
}

export default Skill