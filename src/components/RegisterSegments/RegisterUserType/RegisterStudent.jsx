import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useRegistrationMutation } from "../../../../redux/auth/authApi";

const schema = Yup.object({
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
});

const RegisterStudent = () => {
  const [registration, { isLoading, isError, error }] =
    useRegistrationMutation();
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema: schema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      console.log("Form Submitted with values:", values);

      const userInfo = {
        userDetails: {
          name: values.name,
          phone: values.phone,
          password: values.password,
        },
        role: "student",
      };

      try {
        const result = await registration({ userInfo }).unwrap();
      } catch (error) {
        // console.error("Registration failed:", error?.data || error);
        toast.error(error?.data?.message);
      }finally{
        setSubmitting(false);
      }
    },
  });

  const { values, touched, errors, handleChange, handleSubmit } = formik;

  // this is for toast notification
  const handleFormSubmit = (e) => {
    e.preventDefault();
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length > 0) {
        Object.values(errors).forEach((error) => {
          toast.error(error, { position: "top-right" });
        });
      } else {
        formik.handleSubmit();
      }
    });
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="grid md:grid-cols-2 grid-cols-1 gap-5"
    >
      {/* Name */}
      <div className="form-control">
        <label className="mb-2 font-bold">
          Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className={`w-full px-5 py-1.5 font-thin border rounded-md ${
            errors.name && touched.name ? "border-red-500" : "border-gray-300"
          }`}
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
          className={`w-full px-5 py-1.5 font-thin border rounded-md ${
            errors.phone && touched.phone ? "border-red-500" : "border-gray-300"
          }`}
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
          className={`w-full px-5 py-1.5 font-thin border rounded-md ${
            errors.password && touched.password
              ? "border-red-500"
              : "border-gray-300"
          }`}
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
          className={`w-full px-5 py-1.5 font-thin border rounded-md ${
            errors.rePassword && touched.rePassword
              ? "border-red-500"
              : "border-gray-300"
          }`}
          name="rePassword"
          value={values.rePassword}
          onChange={handleChange}
          placeholder="Confirm Password.."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="md:col-span-2 w-full bg-[#b40c7b] border border-black text-white py-2 rounded-md font-bold transition-all duration-[250ms] transform hover:-translate-y-[3px] hover:ease-[cubic-bezier(0.02,0.01,0.47,1)]"
      >
        Submit & Register
      </button>
    </form>
  );
};

export default RegisterStudent;
