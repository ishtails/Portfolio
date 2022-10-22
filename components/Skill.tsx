import React from 'react'

type Props = {
  url: string,
  title: string;
}

const Skill = ({url, title}: Props) => {
  return (
    <img 
    title={title}
    className="group relative flex cursor-pointer w-24 lg:w-32 transition-transform hover:scale-125"
    src={url}>
    </img>
  )
}

export default Skill