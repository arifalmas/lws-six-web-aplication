import React from "react";
import { useSelector } from "react-redux";

export default function FilterBy() {
  const { filter } = useSelector((state) => state);
  const { authors } = filter;
  let authorsContent;

  authorsContent =
    authors.length > 0
      ? authors.map((autgor) => (
          <div
            className="flex justify-center items-center ml-1 font-medium cursor-pointer"
            key={autgor}
          >
            {autgor}
          </div>
        ))
      : "ALL";

  return (
    <div>
      <div className="flex text-dark text-md w-fit items-center">
        <div className="flex ml-1 bg-blue-200 rounded px-2 py-1">
          Author: {authorsContent}
        </div>
      </div>
    </div>
  );
}
