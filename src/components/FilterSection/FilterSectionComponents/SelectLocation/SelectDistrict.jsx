"use client";
import React, { useState } from "react";
import FilterHeader from "../../FilterHeader";
import FormSelect from "@/components/FormSelect/FormSelect";
import { useGetDistrictsQuery } from "../../../../../redux/api/rootApi";
import { useDispatch, useSelector } from "react-redux";
import { setDistrict } from "../../../../../redux/filter/commonFilterSlice";

const SelectDistrict = () => {
 const { data: districts = [], isLoading: districtsLoading } =
    useGetDistrictsQuery();
  const dispatch = useDispatch()
  const district = useSelector((state) => state.filters.district);

  
  return (
    <div>
      <FilterHeader>Select District</FilterHeader>
      <FormSelect
        options={districts}
        selectedValue={district}
        onChange={(e)=>dispatch(setDistrict(e))}
      />
    </div>
  );
};

export default SelectDistrict;
