"use client";
import React from "react";
import { useDispatch } from "react-redux";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const dispatch = useDispatch();
  return (
    <div className="flex justify-center mt-4 shadow-xl w-fit mx-auto">
      <ul className="flex list-none ">
        <li>
          <button
            className={`px-3 py-1 border hover:bg-[#6c2a8c] transition-colors hover:text-white ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => dispatch(onPageChange(1))}
            disabled={currentPage === 1}
          >
            First
          </button>
        </li>
        <li>
          <button
            className={`px-3 py-1 border hover:bg-[#6c2a8c] transition-colors hover:text-white ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => dispatch(onPageChange(currentPage - 1))}
            disabled={currentPage === 1}
          >
            ⟨
          </button>
        </li>
        {[...Array(totalPages)].map((_, index) => (
          <li key={index}>
            <button
              className={`px-3 py-1 border hover:bg-[#6c2a8c] transition-colors hover:text-white ${
                currentPage === index + 1 ? "bg-[#6c2a8c] text-white" : ""
              }`}
              onClick={() => dispatch(onPageChange(index + 1))}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            className={`px-3 py-1 border hover:bg-[#6c2a8c] transition-colors hover:text-white ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => dispatch(onPageChange(currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            ⟩
          </button>
        </li>
        <li>
          <button
            className={`px-3 py-1 border hover:bg-[#6c2a8c] transition-colors hover:text-white ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => dispatch(onPageChange(totalPages))}
            disabled={currentPage === totalPages}
          >
            Last
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
