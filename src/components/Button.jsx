import React from "react";

const Button = ({
  button,
  type,
  disabled = false,
  handleClick,
  variant = "primary",
}) => {
  const baseStyles =
    "font-outfit font-bold text-lg px-4 py-3 rounded-full uppercase";

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-secondary duration-300 ease-in-out",
    secondary: "bg-secondary text-white hover:bg-primary",
    outline:
      "bg-tranpsarent border-2 border-primary text-primary hover:bg-secondary hover:border-white hover:text-white duration-300 ease-in-out",
    contactForm:
      "w-full rounded-md mb-10 bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-secondary duration-200 ease-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      type={type}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {button}
    </button>
  );
};

export default Button;
