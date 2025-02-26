"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), { ssr: false });
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
const customStyle = {
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? "1px solid #000000" : "1px solid #d1d5db",
      
      padding: "0.1rem",
      boxShadow: "none",
      lineHeight: "1.25rem",
      fontSize: "0.875rem",
      fontWeight: "100",
      outline: state.isFocused ? "1px solid #000000" : "none",
      "&:hover": {
        borderColor: "",
      },
    }),
    
    option: (base, state) => ({
      ...base,
      padding: "0.5rem",
      cursor: "pointer",
      backgroundColor: state.isFocused ? "#1967D2" : "white",
      color: state.isFocused ? "#ffffff" : "#000000",
      "&:hover": {
        backgroundColor: "",
      },
    }),
  };
const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  gender: Yup.string().required("Select your gender"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^01[3-9]\d{8}$/, "Enter a valid Bangladeshi phone number")
    .required("Phone number is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  rePassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
  preferredArea: Yup.array()
    .min(1, "Select at least one area")
    .required("Preferred area is required"),
});
const areaOptions = [
  { value: "area1", label: "Area 1" },
  { value: "area2", label: "Area 2" },
  { value: "area3", label: "Area 3" },
  { value: "area4", label: "Area 4" },
];
const RegisterTutor = () => {
  const userOption = useSelector((state) => state.register.userOption);

  const formik = useFormik({
    initialValues: {
      name: "",
      gender: "",
      email: "",
      phone: "",
      district: "",
      location: "",
      preferredArea: [],
      password: "",
      rePassword: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      console.log("Form Submitted with values:", values);
    },
  });

  const { values, touched, errors, handleChange, handleSubmit } = formik;

  const handlePreferredAreaChange = (selectedOptions) => {
    formik.setFieldValue(
      "preferredArea",
      selectedOptions ? selectedOptions.map((option) => option.value) : []
    );
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" grid  md:grid-cols-2 grid-cols-1 gap-5"
    >
      <div className="form-control">
        {/* name */}
        <label className="mb-2 font-bold">
          Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className={`w-full px-5 py-1.5 font-thin border rounded-md border-gray-300 `}
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Name.."
        />
      </div>
      {/* Gender */}
      <div className="form-control">
        <label className="mb-2 font-bold">
          Gender<span className="text-red-500">*</span>
        </label>
        <select
          className="w-full px-5 py-1.5 font-thin border rounded-md border-gray-300"
          name="gender"
          value={values.gender}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* Email */}
      <div className="form-control">
        <label className="mb-2 font-bold">
          Email<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          className="w-full px-5 py-1.5 font-thin border rounded-md border-gray-300"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email.."
        />
      </div>

      {/* Phone */}
      <div className="form-control">
        <label className="mb-2 font-bold">
          Phone<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="w-full px-5 py-1.5 font-thin border rounded-md border-gray-300"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          placeholder="Phone.."
        />
      </div>
      {/* Tuition District */}
      <div className="form-control">
        <label className="mb-2 font-bold">
          Tuition District<span className="text-red-500">*</span>
        </label>
        <select
          className="w-full px-5 py-1.5 font-thin border rounded-md border-gray-300"
          name="district"
          value={values.district}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select district
          </option>
          <option value="dhaka">dhaka</option>
          <option value="Bogura">Bogura</option>
        </select>
      </div>
      {/* Your Location */}
      <div className="form-control">
        <label className="mb-2 font-bold">
          Your Location<span className="text-red-500">*</span>
        </label>
        <select
          className="w-full px-5 py-1.5 font-thin border rounded-md border-gray-300"
          name="location"
          value={values.location}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select location
          </option>
          <option value="dhaka">dhaka</option>
          <option value="Bogura">Bogura</option>
        </select>
      </div>
      {/* Preferred Tuition Area (Multi-Select) */}
      <div className="form-control md:col-span-2">
        <label className="mb-2 font-bold">
          Preferred Tuition Area<span className="text-red-500">*</span>
        </label>
        <Select
          isMulti
          styles={customStyle}
          name="preferredArea"
          options={areaOptions}
          value={areaOptions.filter((option) =>
            values.preferredArea.includes(option.value)
            
          )}
          onChange={handlePreferredAreaChange}
          className=""
          classNamePrefix="select"
        />
        <p className="text-sm text-muted">Set your preferred tuition area.</p>
      </div>
       {/* Password */}
       <div className="form-control">
            <label className="mb-2 font-bold">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className="w-full px-5 py-1.5 font-thin border rounded-md border-gray-300"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password.."
            />
            
          </div>

          {/* Confirm Password */}
          <div className="form-control">
            <label className="mb-2 font-bold">
              Confirm Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className="w-full px-5 py-1.5 font-thin border rounded-md border-gray-300"
              name="rePassword"
              value={values.rePassword}
              onChange={handleChange}
              placeholder="Confirm Password.."
            />
           
          </div>
          {/* Submit Button */}
          <button type="submit" className="md:col-span-2 w-full bg-[#b40c7b] border border-black text-white py-2 rounded-md font-bold transition-all duration-[250ms] transform hover:-translate-y-[3px] hover:ease-[cubic-bezier(0.02,0.01,0.47,1)]">
            Submit & Register
          </button>
    </form>
  );
};

export default RegisterTutor;
