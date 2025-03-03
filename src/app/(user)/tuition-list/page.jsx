"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetFilteredTuitionsQuery } from "../../../../redux/api/rootApi";
import Pagination from "@/components/Pagination/Pagination";
import { setLimit, setPage } from "../../../../redux/filter/commonFilterSlice";
import { IoMdArrowDropdown } from "react-icons/io";
import TuitionCard from "@/components/TuitionJobs/TuitionCard/TuitionCard";
import FilterDrawer from "@/components/FilterSection/FilterDrawer/FilterDrawer";
import FilterSection from "@/components/FilterSection/FilterSection";

const TuitionList = () => {
  const dispatch = useDispatch();
  const { page, limit } = useSelector((state) => state.filters.pagination);
  const filters = useSelector((state) => ({
    jobId: state.filters.jobId,
    district: state.filters.district,
    location: state.filters.area,
    medium: state.filters.medium,
    classOfMedium: state.filters.classOfMedium,
    startDate: state.dateFilter.startDate,
    endDate: state.dateFilter.endDate,
    tuitionTypes: Object.keys(state.tuitionType.tuitionTypes).filter(
      (key) => state.tuitionType.tuitionTypes[key]
    ),
    tutorPreferenceType: Object.keys(
      state.tutorPreference.tutorPreferenceType
    ).filter((key) => state.tutorPreference.tutorPreferenceType[key]),
  }));

  const { data, error, isLoading } = useGetFilteredTuitionsQuery({
    filters,
    page,
    limit,
  });
  const totalPages = Math.ceil(data?.meta?.totalPages / limit);
  const startIndex = (data?.meta?.currentPage - 1) * limit + 1;
  const endIndex = Math.min(startIndex + limit - 1, data?.meta?.totalTuitions);
  console.log(data, "data");
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block  mt-4 col-span-1 overflow-y-scroll h-screen scrollbar-hide">
            {/*  */}
            <FilterSection />
          </div>
          {/* filter drawer for small screen */}
          <div className="flex lg:hidden  items-center justify-between">
            <h1 className="text-xl font-bold after:content-[''] after:w-[10rem] after:block after:h-[2px] after:bg-[#9e0a72]">
              Tuition Jobs
            </h1>
            <div className="mt-2">
              <FilterDrawer></FilterDrawer>
            </div>
          </div>

          <div className="mt-4 lg:col-span-3 lg:mx-0 overflow-y-scroll h-screen scrollbar-hide">
            <div className="mb-20">
              <div>
                {data?.meta && (
                  <div className=" flex items-center justify-between w-full">
                    <div className="">
                      <p className="text-sm text-muted">
                        {" "}
                        Showing{" "}
                        <span className="font-bold">
                          {startIndex}-{endIndex}
                        </span>{" "}
                        of{" "}
                        <span className="font-bold">
                          {data.meta.totalTuitions}
                        </span>{" "}
                        jobs
                      </p>
                    </div>
                    <div className="">
                      <div className="dropdown  dropdown-bottom dropdown-end">
                        <div
                          tabIndex={0}
                          role="button"
                          className="flex items-center gap-2 text-muted border border-muted px-2 py-1.5 rounded-md "
                        >
                          <span className="text-sm font-semibold ">
                            Show: {limit}
                          </span>
                          <IoMdArrowDropdown className="text-sm " />
                        </div>
                        <div
                          tabIndex={0}
                          className="dropdown-content join w-full  join-vertical z-20"
                        >
                          <button
                            onClick={() => dispatch(setLimit(5))}
                            className="btn btn-sm join-item"
                          >
                            5
                          </button>
                          <button
                            onClick={() => dispatch(setLimit(10))}
                            className="btn btn-sm join-item"
                          >
                            10
                          </button>
                          <button
                            onClick={() => dispatch(setLimit(15))}
                            className="btn btn-sm join-item"
                          >
                            15
                          </button>
                          <button
                            onClick={() => dispatch(setLimit(20))}
                            className="btn btn-sm join-item"
                          >
                            20
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-4 mt-4">
                {data?.data?.map((tuition, tuitionIndex) => (
                  <TuitionCard  tuition={tuition} key={tuitionIndex} />
                ))}
              </div>
              {/* Pagination Controls */}
              {data?.meta && (
                <Pagination
                  totalPages={data.meta.totalPages}
                  currentPage={data.meta.currentPage}
                  onPageChange={setPage}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitionList;
