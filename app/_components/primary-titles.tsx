import React from 'react'
import { IconType } from 'react-icons';

export interface PrimaryTitlesProps {
    title: string;
    icon: IconType;
    subtitle: string;
}

const PrimaryTitles = ({title, icon: Icon, subtitle} : PrimaryTitlesProps) => {
  return (
    <div className="px-2 w-95% mx-auto text-center m-[50px]">
        
        <h2 className="text-4xl sm:text-5xl  flex items-center justify-center">
          <Icon className='text-yellow-600'/>
          {title}
          <span className='text-yellow-500'>.</span>
        </h2>
        <h2 className="text-neutral-500 font-semibold">{subtitle}</h2>
    </div>
  )
}

export default PrimaryTitles