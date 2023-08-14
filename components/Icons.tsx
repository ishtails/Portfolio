import React from 'react'
import { SocialIcon } from "react-social-icons"

const Icons = () => {
    return (
        <div>
            <SocialIcon className="hover:scale-125 transition-all" target="_blank" url="https://www.instagram.com/ishtails/" title="Instagram" fgColor="gray" bgColor="transparent" />
            <SocialIcon className="hover:scale-125 transition-all" target="_blank" url="https://www.youtube.com/ishtails" title="Youtube" fgColor="gray" bgColor="transparent" />
            <SocialIcon className="hover:scale-125 transition-all" target="_blank" url="https://twitter.com/ishtails" title="Twitter" fgColor="gray" bgColor="transparent" />
            <SocialIcon className="hover:scale-125 transition-all" target="_blank" url="https://github.com/ishtails" title="Github" fgColor="gray" bgColor="transparent" />
            <SocialIcon className="hover:scale-125 transition-all" target="_blank" url="https://www.linkedin.com/in/ishtails/" fgColor="gray" title="LinkedIn" bgColor="transparent" />
        </div>
    )
}

export default Icons