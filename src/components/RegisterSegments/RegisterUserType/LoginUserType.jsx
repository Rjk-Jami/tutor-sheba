"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserType } from "../../../../redux/auth/register/registerSlice";
import Image from "next/image";
import tutorImage from "../../../../public/teacher.webp";
import studentImage from "../../../../public/student.webp";
import { setLoginUserType } from "../../../../redux/auth/login/loginSlice";
import UserTypeBox from "@/components/ui/UserTypeBox";
const LoginUserType = () => {
  const dispatch = useDispatch();
  const userOption = useSelector((state) => state.login.userOption);
  const handleToggle = (userType) => {
    dispatch(setLoginUserType({ userType }));
  };
  // console.log(userOption);
  return (
    <UserTypeBox handleToggle={handleToggle} userOption={userOption}></UserTypeBox>

  );
};

export default LoginUserType;
