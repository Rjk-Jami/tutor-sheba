"use client";
import React, { useEffect, useState } from "react";
import FilterHeader from "../../FilterHeader";
import FormSelect from "@/components/FormSelect/FormSelect";
import { useGetLocationsQuery } from "../../../../../redux/api/rootApi";
import { useDispatch, useSelector } from "react-redux";
import { setArea } from "../../../../../redux/filter/commonFilterSlice";

const SelectArea = () => {
  const selectedDistrict = useSelector((state) => state.filters.district);

  // RTK Query for Location for selected district
  const { data: locations = [], isLoading: locationsLoading } =
    useGetLocationsQuery(selectedDistrict, {
      skip: !selectedDistrict && selectedDistrict !== "All", // Skip query if no district is selected
    });
  const dispatch = useDispatch();
  const area = useSelector((state) => state.filters.area);


  return (
    <div>
      <FilterHeader>Select Area</FilterHeader>
      <FormSelect
        options={selectedDistrict === "All" ? [] : locations}
        selectedValue={area}
        onChange={(e) => dispatch(setArea(e))}
      />
    </div>
  );
};

export default SelectArea;
