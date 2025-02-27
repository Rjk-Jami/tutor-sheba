"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserType } from "../../../../redux/auth/register/registerSlice";
import Image from "next/image";
import UserTypeBox from "@/components/ui/UserTypeBox";

const RegisterUserType = () => {
  const dispatch = useDispatch();
  const userOption = useSelector((state) => state.register.userOption);
  const handleToggle = (userType) => {
    dispatch(setUserType({ userType }));
  };
  // console.log(userOption);
  return (
    <UserTypeBox handleToggle={handleToggle} userOption={userOption}></UserTypeBox>
  );
};

export default RegisterUserType;
