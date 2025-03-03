"use client";
import React, { useEffect, useState } from "react";
import FilterHeader from "../../FilterHeader";
import FormSelect from "@/components/FormSelect/FormSelect";
import { useDispatch, useSelector } from "react-redux";
import { useGetClassesQuery } from "../../../../../redux/api/rootApi";
import { setClassOfMedium } from "../../../../../redux/filter/commonFilterSlice";

const SelectClass = () => {
  const selectedMedium = useSelector((state) => state.filters.medium);

  // RTK Query for Classes
  const { data: classes = [], isLoading: classesLoading } = useGetClassesQuery(
    selectedMedium,
    {
      skip: !selectedMedium || selectedMedium === "All", // Skip query if no  is selected
    }
  );
  const classOfMedium = useSelector((state) => state.filters.classOfMedium);
  const dispatch = useDispatch();

  return (
    <div>
      <FilterHeader>Select Class</FilterHeader>
      <FormSelect
        options={selectedMedium === "All" ? [] : classes}
        selectedValue={classOfMedium}
        onChange={(e) => dispatch(setClassOfMedium(e))}
      />
    </div>
  );
};

export default SelectClass;
