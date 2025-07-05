import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Footer from "../Layouts/Footer";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
const Location = () => {
  const position = [12.294646864691561, 76.65194834615971];

  return (
    <div className="transform -translate-y-[250px] h-[500px] w-full">
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "700px", width: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Hello from Mysore! 🌍</Popup>
        </Marker>
      </MapContainer>
      <Footer />
    </div>
  );
};

export default Location;
