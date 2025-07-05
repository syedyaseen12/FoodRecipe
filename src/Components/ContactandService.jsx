import { eventsdata } from "../lib/data";
import shawrma from "../Assets/Shawrma.png";
import card from "../Assets/card.png";
import Events from "./Cards/EventsCard";
const Address = () => {
  return (
    <div>
      <div className="flex gap-14 items-center justify-evenly  bg-[#f9f9f7]  pb-24 ">
        <div className=" relative flex mt-24 ">
          <img src={shawrma} alt="" className="h-[566px] w-[550px] " />
          <img
            src={card}
            className="w-[400px] h-[320px] absolute left-[75%] top-1/2 transform -translate-x-1/2 "
          />
        </div>
        <div className=" flex flex-col text-wrap ">
          <div className=" text-wrap">
            <h1 className="text-5xl font-playfair font-medium  text-[#2C2F24] ">
              We Provide Healthy <br /> food for your family.
            </h1>
            <p className="font-medium  mt-6 text-[#2c2f24]  ">
              Our story began with a vision to create a unique dining experience
              <br />
              that merges fine dining, exceptional service, and a vibrant <br />
              ambiance. Rooted in city's rich culinary culture, we aim to honor
              <br />
              our local roots while infusing a global palate.
            </p>
            <p className="font-normal text-[#2c2f24]  mt-6  ">
              Our story began with a vision to create a unique dining experience
              <br />
              that merges fine dining, exceptional service, and a vibrant <br />
              ambiance. Rooted in city's rich culinary culture, we aim to honor
              <br />
            </p>
          </div>
          <div className="rounded-full border border-black px-5 py-4 flex justify-start mt-6 w-fit">
            <button className="font-semibold text-base">More About Us</button>
          </div>
        </div>
      </div>
      <div className="ml-20 mt-20">
        <h1 className="text-4xl font-playfair  ml-14 ">
          We also offer unique <br /> Services for your Events
        </h1>
      </div>
      <div className="mb-20 ml-20 mr-20 mt-2 flex flex-wrap justify-center gap-4 ">
        {eventsdata.map((item) => (
          <Events data={item} />
        ))}
      </div>
    </div>
  );
};

export default Address;
