import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { pageSelected } from "../../features/filter/filterSlice";

export default function Pagination({ pageNumber }) {
  const dispatch = useDispatch();
  const { pagination } = useSelector((state) => state.filter);
  const pageSelectedhandler = () => {
    dispatch(pageSelected(pageNumber + 1));
  };

  let className =
    pageNumber + 1 === pagination.selectedPage
      ? "bg-red-600 text-white px-4 py-1 rounded-full cursor-pointer"
      : "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer";

  return (
    <div onClick={pageSelectedhandler} className={className}>
      {pageNumber + 1}
    </div>
  );
}
