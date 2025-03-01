"use client";
import React from "react";
import { useSelector } from "react-redux";
import RegisterTutor from "./RegisterTutor";
import Link from "next/link";
import RegisterStudent from "./RegisterStudent";

const RegisterField = () => {
  const userOption = useSelector((state) => state.register.userOption);

  return (
    <div className="mt-5">
      {userOption.tutor ? (
        <div className="">
          <RegisterTutor />
        </div>
      ) : userOption.student ? (
        <div className="">
          <RegisterStudent />
        </div>
      ) : (
        <div className="">
          <RegisterTutor />
        </div>
      )}
      <p className="my-2 text-center text-muted">
        Already have an account?{" "}
        <Link href={"/auth/login"} className="font-medium text-black">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default RegisterField;
