import React from "react";
import japanese from "../../Assets/japanese-food.svg";

const CompanyLogo = ({ className = "" }) => {
  return (
    <div className="flex gap-3 items-center">
      <img src={japanese} alt="logo" className="w-12 h-12" />
      <h1 className={`${className}`}>Bistro Bliss</h1>
    </div>
  );
};

export default CompanyLogo;
