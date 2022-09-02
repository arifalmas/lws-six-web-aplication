import React from "react";
import { useDispatch } from "react-redux";
import { clearFilter } from "../../features/filter/filterSlice";

export default function ClearFilter() {
  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(clearFilter());
  };
  return (
    <button
      onClick={handleFilter}
      className="bg-red-600 rounded px-3 py-2 text-white font-bold tracking-wide hover:bg-red-800"
    >
      Clear Filter
    </button>
  );
}
