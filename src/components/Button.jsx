import React from 'react'

const Button = ({button, handleDownload, variant='primary'}) => {

    const baseStyles = "font-outfit font-bold text-lg px-6 py-4 rounded-xl uppercase"

    const variantStyles = {
        primary: "bg-primary text-white hover:bg-secondary duration-300 ease-in-out",
        secondary: "bg-secondary text-white hover:bg-primary",
        outline: "bg-tranpsarent border-2 border-primary text-primary hover:bg-primary hover:text-white duration-300 ease-in-out"
    }

    
  return (
    <div onClick={handleDownload}>
      <button className={`${baseStyles} ${variantStyles[variant]}`}>{button}</button>
    </div>
  )
}

export default Button
