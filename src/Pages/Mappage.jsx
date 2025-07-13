import Map from "../Components/Sections/MapForm";
import Location from "../Components/UI/Location";
import Navbar from "../Components/Layouts/Navbar";
const MapPage = () => {
  return (
    <div>
      <div className="bg-[#f9f9f9] pb-10 ">
        <Navbar />
      </div>
      <Map />
      <Location />
    </div>
  );
};

export default MapPage;
