import React from "react";

const FilterToggle = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`ml-2 mt-2 absolute top-2 cursor-pointer ${
        isOpen ? "hidden" : "block"
      }`}
      onClick={() => {
        setIsOpen(true);
      }}
    >
      <img className="w-10 h-6" src="/images/toggleIcon.png" alt="" />
    </div>
  );
};

export default FilterToggle;
