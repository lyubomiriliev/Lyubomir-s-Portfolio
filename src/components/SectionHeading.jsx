import React from 'react'

const SectionHeading = ({title, subTitle}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h3 className='uppercase font-outfit font-light text-lg tracking-tight'>{subTitle}</h3>
        <h1 className='uppercase font-outfit font-bold text-5xl tracking-wide text-primary'>{title}</h1>
    </div>
  )
}

export default SectionHeading
