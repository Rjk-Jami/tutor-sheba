import RegisterUserType from "@/components/RegisterSegments/RegisterUserType/RegisterUserType";
import Underline from "@/components/ui/Underline";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-normal text-center">Register</h1>
      <Underline className="h-[1px] !bg-[#cf1da3] mb-6 mt-3 !w-1/2 mx-auto"></Underline>
      <div className="">
        <RegisterUserType></RegisterUserType>
      </div>
      <div className="">
        
      </div>
    </div>
  );
};

export default RegisterPage;
