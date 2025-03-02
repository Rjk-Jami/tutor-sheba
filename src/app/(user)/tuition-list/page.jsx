"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useGetFilteredTuitionsQuery } from "../../../../redux/api/rootApi";

const TuitionList = () => {
  const { page, limit } = useSelector((state) => state.filters.pagination);
  const filters = {
    jobId: useSelector((state) => state.filters.jobId),
    district: useSelector((state) => state.filters.district),
    area: useSelector((state) => state.filters.area),
    medium: useSelector((state) => state.filters.medium),
    classOfMedium: useSelector((state) => state.filters.classOfMedium),
    startDate: useSelector((state) => state.dateFilter.startDate),
    endDate: useSelector((state) => state.dateFilter.endDate),
    tuitionTypes: useSelector((state) => state.tuitionType.tuitionTypes),
    tutorPreferenceType: useSelector(
      (state) => state.tutorPreference.tutorPreferenceType
    ),
    pagination: { page, limit },
  };


  console.log(filters, "filters");

  const { data, error, isLoading } = useGetFilteredTuitionsQuery({ filters, page, limit });

  console.log(data, "data");
  return <div>TuitionList page</div>;
};

export default TuitionList;
