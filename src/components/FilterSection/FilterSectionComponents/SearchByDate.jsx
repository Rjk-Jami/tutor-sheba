"use client";
import { useState, useEffect } from "react";
import FilterHeader from "../FilterHeader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const SearchByDate = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // this is for  he start date picker 
  const handleSearchStartDate = (e) => {
    setStartDate(e.target.value);
  };
// this is for  he end date picker
  const handleSearchEndDate = (e) => {
    setEndDate(e.target.value);
  };


  useEffect(() => {
    const fetchData = async () => {
      console.log("Start Date:", startDate, "End Date:", endDate);
    };

    fetchData();
  }, [startDate, endDate]);

  return (
    <div>
      <FilterHeader>Search By Date</FilterHeader>
      <div className="grid grid-cols-2 gap-3 xl:gap-5 mt-4">
        <div>
          <input
            id="start-date"
            type="date"
            value={startDate}
            onChange={handleSearchStartDate}
            className="w-full  px-5 py-1.5 font-thin border rounded-md border-gray-300"
          />
        </div>

        <div>
          <input
            id="end-date"
            type="date"
            value={endDate}
            onChange={handleSearchEndDate}
            className="w-full px-5 py-1.5 font-thin border rounded-md border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchByDate;
