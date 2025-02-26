import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterStudent = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      phone: Yup.string()
        .matches(/^01[3-9]\d{8}$/, "Enter a valid Bangladeshi phone number")
        .required("Phone number is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      rePassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm your password"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted with values:", values);
    },
  });

  const { values, touched, errors, handleChange, handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 grid-cols-1 gap-5">
      {/* Name */}
      <div className="form-control">
        <label className="mb-2 font-bold">
          Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="w-full px-5 py-1.5 font-thin border rounded-md border-gray-300"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Name.."
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

      {/* Re-Password */}
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
      <button
        type="submit"
        className="lg:col-span-2 w-full bg-[#b40c7b] border border-black text-white py-2 rounded-md font-bold transition-all duration-[250ms] transform hover:-translate-y-[3px] hover:ease-[cubic-bezier(0.02,0.01,0.47,1)]"
      >
        Submit & Register
      </button>
    </form>
  );
};

export default RegisterStudent;
