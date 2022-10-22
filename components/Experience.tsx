import React from "react";
import ExperienceCardUthaan from "./ExperienceCardUthaan";
import ExperienceCardGDSC from "./ExperienceCardGDSC";
import ExperienceCardishtails from "./ExperienceCardishtails";

type Props = {};

export default function Experience({}: Props) {
  return (
    <div className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly items-center space-x-5 space-y-5">

<h3 className="absolute top-28 items-center uppercase tracking-[20px] text-gray-500 ml-7">Experience</h3>

        <div className="w-full flex overflow-x-scroll xl:overflow-x-auto space-x-5 py-10 snap-x snap-mandatory xl:justify-center xl:items-center xl:space-x-10 scrollbar-hide">
          <ExperienceCardishtails />
          <ExperienceCardUthaan />
          <ExperienceCardGDSC />
        </div>
    </div>
  );
}
