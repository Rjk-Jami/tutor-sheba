"use client";
import React from "react";
import FilterHeader from "../FilterHeader";
import { useDispatch, useSelector } from "react-redux";
import { setJobId } from "../../../../redux/filter/commonFilterSlice";

const SearchByJobId = () => {
  const jobId = useSelector((state) => state.filters.jobId);
  const dispatch = useDispatch();

  return (
    <div>
      <FilterHeader>Search By Job Id</FilterHeader>

      <form className="mt-4">
        <input
          type="number"
          name="jobId"
          placeholder="Enter job id here..."
          onChange={(e) => dispatch(setJobId(e.target.value))}
          value={jobId}
          className={` w-full px-5 py-1.5 font-thin border rounded-md border-gray-300
           [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
        />
      </form>
    </div>
  );
};

export default SearchByJobId;
