"use client";
import React, { useState } from "react";
import FilterHeader from "../FilterHeader";

const SearchByJobId = () => {
  const [jobId, setJobId] = useState("");

  const handleChange = (e) => {
    setJobId(e.target.value);
    console.log("Current Value:", e.target.value); // Logs value on change
  };
  const Tutors = false;

  return (
    <div>
      <FilterHeader>Search By Job Id</FilterHeader>

      <form className="mt-5">
        <input
          type="number"
          name="jobId"
          placeholder="Enter job id here..."
          onChange={handleChange}
          value={jobId}
          className={` w-full px-5 py-1.5 font-thin border rounded-md ${
            Tutors ? "border-red-500" : "border-gray-300"
          } [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
        />
      </form>
    </div>
  );
};

export default SearchByJobId;
