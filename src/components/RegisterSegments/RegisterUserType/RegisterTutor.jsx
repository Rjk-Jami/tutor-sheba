"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), { ssr: false });
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetDistrictsQuery,
  useGetLocationsQuery,
} from "../../../../redux/api/rootApi";
import { customStyle } from "@/components/ui/selectCustomStyle";
import { useRegistrationMutation } from "../../../../redux/auth/authApi";
import { useRouter } from "next/navigation";

// form validation
const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  gender: Yup.string().required("Select your gender"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^01[3-9]\d{8}$/, "Enter a valid Bangladeshi phone number")
    .required("Phone number is required"),
  district: Yup.string().required("Select your district"),
  location: Yup.string().required("Select your location"),
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

const RegisterTutor = () => {
  const router = useRouter();
  const userOption = useSelector((state) => state.register.userOption);
  // RTK Query for District
  const { data: districts = [], isLoading: districtsLoading } =
    useGetDistrictsQuery();

  const [selectedDistrict, setSelectedDistrict] = useState("");

  // RTK Query for Location for selected district
  const { data: locations = [], isLoading: locationsLoading } =
    useGetLocationsQuery(selectedDistrict, {
      skip: !selectedDistrict, // Skip query if no district is selected
    });
  // RTK mutation for Register
  const [registration, { isLoading, isError, error }] =
    useRegistrationMutation();


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
      // console.log("Form Submitted with values:", values);
      const userInfo = {
        userDetails: {
          name: values.name,
          email: values.email,
          phone: values.phone,
          gender: values.gender,
          district: values.district,
          location: values.location,
          preferredArea: values.preferredArea,
          password: values.password,
        },
        role: "tutor",
      };
      try {
        // console.log(userInfo, "userInfo");
        const result = await registration({userInfo}).unwrap();
        // console.log(result)
        if (result?.success) {
         router.push("/");
        }
      } catch (error) {
        // console.error("Registration failed:", error?.error?.data || error);
        toast.error(error?.data?.message);
      }
    },
  });

  const { values, touched, errors, handleChange, handleSubmit } = formik;
  // this is for toast notification
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!userOption.tutor && !userOption.student) {
      toast.error("Select user type!");
      return;
    }
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
  // catch location
  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  //catch preferred area and put them in an array
  const handlePreferredAreaChange = (selectedOptions) => {
    formik.setFieldValue(
      "preferredArea",
      selectedOptions ? selectedOptions.map((option) => option.value) : []
    );
  };
  // console.log(locations);
  return (
    <form
      onSubmit={handleFormSubmit}
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
          placeholder="ex: user@gmail.com"
          type="email"
          className="w-full px-5 py-1.5 font-thin border rounded-md border-gray-300"
          name="email"
          value={values.email}
          onChange={handleChange}
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
          onChange={(e) => {
            handleChange(e);
            handleDistrictChange(e);
          }}
        >
          <option value="" disabled>
            Select district
          </option>
          {districtsLoading ? (
            <option>Loading districts...</option>
          ) : (
            districts.map((district) => (
              <option key={district._id} value={district._id}>
                {district.name}
              </option>
            ))
          )}
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
          {locations?.map((location) => (
            <option key={location._id} value={location._id}>
              {location.name}
            </option>
          ))}
        </select>
      </div>
      {/* Preferred Tuition Area (Multi-Select) */}
      <div className="form-control md:col-span-2">
        <label className="mb-2 font-bold">
          Preferred Tuition Area<span className="text-red-500">*</span>
        </label>
        <Select
          isMulti
          // imported styles
          styles={customStyle}
          name="preferredArea"
          placeholder="Select preferred tuition areas"
          // select options
          options={locations?.map((location) => ({
            value: location._id,
            label: location.name,
          }))}
          // select value
          value={locations
            ?.filter((location) =>
              formik.values.preferredArea.includes(location._id)
            )
            .map((location) => ({
              value: location._id,
              label: location.name,
            }))}
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
      <button
        type="submit"
        className="md:col-span-2 w-full bg-[#b40c7b] border border-black text-white py-2 rounded-md font-bold transition-all duration-[250ms] transform hover:-translate-y-[3px] hover:ease-[cubic-bezier(0.02,0.01,0.47,1)]"
      >
        Submit & Register
      </button>
    </form>
  );
};

export default RegisterTutor;
