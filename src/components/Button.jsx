import React from "react";

const Button = ({ button, handleDownload, variant = "primary" }) => {
  const baseStyles =
    "font-outfit font-bold text-lg px-4 py-3 rounded-full uppercase";

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-secondary duration-300 ease-in-out",
    secondary: "bg-secondary text-white hover:bg-primary",
    outline:
      "bg-tranpsarent border-2 border-primary text-primary hover:bg-secondary hover:border-white hover:text-white duration-300 ease-in-out",
  };

  return (
    <div onClick={handleDownload}>
      <button className={`${baseStyles} ${variantStyles[variant]}`}>
        {button}
      </button>
    </div>
  );
};

export default Button;
