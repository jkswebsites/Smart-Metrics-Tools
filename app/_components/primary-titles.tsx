import React from 'react'
import { IconType } from 'react-icons';

export interface PrimaryTitlesProps {
    title: string;
    icon: IconType;
    subtitle: string;
}

const PrimaryTitles = ({title, icon: Icon, subtitle} : PrimaryTitlesProps) => {
  return (
    <div className="px-2 w-95% mx-auto text-center">
    <h1 className="text-5xl flex items-center justify-center">
          {title.split(' ')[0]} <Icon className="text-yellow-600"/> {title.split(' ')[1]}
        </h1>
        <h2 className="text-neutral-500 mr-6 -mt-2">{subtitle}</h2>
    </div>
  )
}

export default PrimaryTitles