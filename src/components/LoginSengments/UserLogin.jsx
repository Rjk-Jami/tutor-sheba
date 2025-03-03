"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import Link from "next/link";
import { toast } from "react-toastify";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useLoginMutation } from "../../../redux/auth/authApi";
import { useRouter } from "next/navigation";

const schema = Yup.object({
  password: Yup.string().min(6).required(),
});
const UserLogin = () => {
  const [hide, setHide] = useState(true);
  const userOption = useSelector((state) => state.login.userOption);
  const [login, { isLoading, isError, error }] = useLoginMutation();

  const router = useRouter();
  // console.log(userOption);
  const formik = useFormik({
    initialValues: {
      emailOrPhone: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      if (!userOption.tutor && !userOption.student) {
        toast.error("Select user type!");
        return;
      }
      if (!values.emailOrPhone || !values.password) {
        toast.error("All fields are required!");
        return;
      }

      try {
        const role = userOption.tutor
          ? "tutor"
          : userOption.student
          ? "student"
          : null;

        if (role) {
          const userInfo = {
            userDetails: {
              [userOption.tutor ? "email" : "phone"]: values.emailOrPhone,
              password: values.password,
            },
            role,
          };

          const result = await login({ userInfo }).unwrap();
          // console.log(result);
          if (result?.success) {
            router.back();
          }
          
        }
      } catch (error) {
        // console.error("Login failed:", error?.error?.data || error);
        toast.error(error?.data?.message);
      }
    },
  });

  const { values, touched, errors, handleChange, handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* emailOrPhone */}
      <div className="form-control">
        <label className="mb-2 font-bold">
          Email or Phone<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className={` w-full  px-5 py-1.5 font-thin border rounded-md ${
            errors.emailOrPhone && touched.emailOrPhone
              ? "border-red-500"
              : "border-gray-300"
          }`}
          name="emailOrPhone"
          value={values.emailOrPhone}
          onChange={handleChange}
          placeholder="emailOrPhone.."
        />
      </div>
      {/* Password */}
      <div className="relative">
        <div className="form-control">
          <label className="mb-2 font-bold">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type={hide ? "password" : "text"} // Toggle between password and text
            className=" w-full px-5 py-1.5 font-thin border rounded-md border-gray-300"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Password.."
          />
        </div>
        <button
          type="button"
          onClick={() => setHide(!hide)}
          className="absolute inset-y-4 right-4 mt-0.5  items-center justify-center "
          aria-label={hide ? "Show password" : "Hide password"}
        >
          {hide ? (
            <IoEyeOff className="mt-[1.5rem] " size={20} />
          ) : (
            <IoEye className="mt-[1.5rem] " size={20} />
          )}
        </button>
      </div>
      <button
        type="submit"
        className=" w-full bg-[#b40c7b] border border-black text-white py-2 rounded-md font-bold transition-all duration-[250ms] transform hover:-translate-y-[3px] hover:ease-[cubic-bezier(0.02,0.01,0.47,1)]"
      >
        {userOption.tutor
          ? "Login as Tutor"
          : userOption.student
          ? "Login as Student"
          : "Login"}
      </button>

      <div className=" flex justify-between text">
        {/* remember me */}
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="rememberMe"
            onChange={handleChange}
            checked={values.rememberMe}
            className="peer hidden "
          />
          <div className="w-5 h-5 border-2 border-[#6C2A8C] rounded-md peer-checked:bg-[#6C2A8C] transition-colors"></div>

          <span className="ml-2  font-normal  ">Remember me</span>
        </label>
        {/* lost section */}
        <div className="">
          <Link
            className="font-normal hover:text-blue-500"
            href={"/forget-password"}
          >
            Forgot Password
          </Link>
        </div>
      </div>
    </form>
  );
};

export default UserLogin;
