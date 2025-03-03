import React from "react";

const Button = ({children ,className}) => {
  return (
    <button className={`before:ease relative  py-1.5 px-4 overflow-hidden font-semibold rounded-md bg-gradient-to-r from-[#540654] via-[#cc0d85] to-[#540654] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0   before:rotate-6 before:bg-white before:opacity-10 before:duration-700  ${className}`}>
      <span className="relative">{children}</span>
    </button>
  );
};

export default Button;
// before:h-12 before:w-6