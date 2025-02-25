import React from "react";
import FilterHeader from "../FilterHeader";
import { useFormik } from "formik";
import * as Yup from "yup";

const SearchByJobId = () => {
  const formik = useFormik({
    initialValues: {
      jobId: "",
    },
    validationSchema: Yup.object({
      jobId: Yup.number()
        .typeError("Job ID must be a number")
        .required("Job ID is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <FilterHeader>Search By Job Id</FilterHeader>

      <form onChange={formik.handleSubmit}>
        <input
          type="number"
          name="jobId"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.jobId}
          className="border-2 border-gray-300 p-2 rounded"
        />
        {formik.touched.jobId && formik.errors.jobId ? (
          <div className="text-red-500">{formik.errors.jobId}</div>
        ) : null}
      </form>
    </div>
  );
};

export default SearchByJobId;

