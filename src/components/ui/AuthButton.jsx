import Link from "next/link";
import React from "react";

const AuthButton = ({children, className, href}) => {
  return (
    <Link
      href={href}
      className={`${className} rounded-md border border-white px-4 py-1.5  text-white flex items-center space-x-1 transition-all duration-[250ms] transform hover:-translate-y-[3px] hover:ease-[cubic-bezier(0.02,0.01,0.47,1)]`}
    >
      {children}
    </Link>
  );
};

export default AuthButton;
