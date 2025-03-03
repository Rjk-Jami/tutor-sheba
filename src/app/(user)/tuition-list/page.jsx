"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetFilteredTuitionsQuery } from "../../../../redux/api/rootApi";

const TuitionList = () => {
  const { page, limit } = useSelector((state) => state.filters.pagination);
  const filters = useSelector((state) => ({
    jobId: state.filters.jobId,
    district: state.filters.district,
    location: state.filters.area,
    medium: state.filters.medium,
    classOfMedium: state.filters.classOfMedium,
    startDate: state.dateFilter.startDate,
    endDate: state.dateFilter.endDate,
    tuitionTypes: Object.keys(state.tuitionType.tuitionTypes).filter((key) => state.tuitionType.tuitionTypes[key]),
    tutorPreferenceType: Object.keys(state.tutorPreference.tutorPreferenceType).filter((key) => state.tutorPreference.tutorPreferenceType[key]),
  }));
  

  console.log(filters, "filters");

  const { data, error, isLoading } = useGetFilteredTuitionsQuery({ filters, page, limit });

  useEffect(() => {
    if (data) {
      console.log("Tuition data:", data)
    }
    if (error) {
      console.error("Error fetching tuitions:", error)
    }
  }, [data, error])
  
  console.log(data, "data");
  return <div>TuitionList page</div>;
};

export default TuitionList;
