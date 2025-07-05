import React from "react";
import Map from "../Components/MapForm";
import Location from "../Components/UI/Location";
import Navbar from "../Components/Layouts/Navbar";
const Mappage = () => {
  return (
    <div>
      <Navbar />
      <Map />
      <Location />
    </div>
  );
};

export default Mappage;
