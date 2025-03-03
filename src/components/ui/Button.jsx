import React from "react";

const Button = ({children}) => {
  return (
    <button className="before:ease relative  py-1.5 px-4 overflow-hidden font-semibold rounded-md bg-gradient-to-r from-[#540654] via-[#cc0d85] to-[#540654] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-20 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
      <span className="relative">{children}</span>
    </button>
  );
};

export default Button;
