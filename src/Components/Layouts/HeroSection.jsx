import React from "react";
import Herocard from "../../Assets/HeroCard.png";
import Button from "../UI/Button";

const HeroSection = () => {
  return (
    <div>
      <div
        className="w-full min-h-screen bg-center bg-cover mt-10  flex flex-col items-center justify-center  "
        style={{ backgroundImage: `url(${Herocard})` }}
      >
        <div className="textarea flex flex-col justify-center items-center mb-2">
          <h1 className="text-7xl font-playfair  text-center text-[#2C2F24] ">
            Best food for <br /> your taste
          </h1>
          <p className="text-center mt-4 text-[#2C2F24] font-medium">
            Discover delectable cuisine and unforgettable moments <br /> in our
            welcoming, culinary haven.
          </p>
        </div>
        <div className="button flex justify-center gap-4 mt-7">
          <div className="rounded-full  px-5 py-3 bg-[#FDFDFD] border border-black hover:bg-[#AD343E]">
            <Button
              title=" Book A table"
              className="text-black font-bold hover:text-[#ffff]"
            />
          </div>
          <div className="rounded-full  px-5 py-3 border border-black bg-[#FDFDFD] hover:bg-[#AD343E]">
            <Button
              title="Explore Menu"
              className="text-black font-bold hover:text-[#ffff]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-12">
        <h1 className="text-4xl font-playfair font-medium">Browse Our Menu</h1>
      </div>
    </div>
  );
};

export default HeroSection;
