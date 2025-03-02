"use client";
import { useDispatch, useSelector } from "react-redux";
import FilterHeader from "../FilterHeader";
import { toast } from "react-toastify";
import { setEndDate, setStartDate } from "../../../../redux/filter/dateFilterSlice";

const SearchByDate = () => {
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector((state) => state.dateFilter);

  const today = new Date().toISOString().split("T")[0];



  // for start date
  const handleSearchStartDate = (e) => {
    const selectedDate = e.target.value;
    if (selectedDate > today) {
      toast.error("Start date cannot be in the future!");
      return;
    }
    dispatch(setStartDate(selectedDate));
  };

  // for end date
  const handleSearchEndDate = (e) => {
    const selectedDate = e.target.value;
    if (selectedDate > today) {
      toast.error("End date cannot be in the future!");
      return;
    }
    dispatch(setEndDate(selectedDate));
  };


  return (
    <div>
      <FilterHeader>Search By Date</FilterHeader>
      <div className="grid grid-cols-2 gap-3 xl:gap-5 mt-4">
        <div>
          <input
            id="start-date"
            type="date"
            value={startDate || ""}
            onChange={handleSearchStartDate}
            className="w-full px-5 py-1.5 font-thin border rounded-md border-gray-300"
          />
        </div>

        <div>
          <input
            id="end-date"
            type="date"
            value={endDate || ""}
            onChange={handleSearchEndDate}
            className="w-full px-5 py-1.5 font-thin border rounded-md border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchByDate;
