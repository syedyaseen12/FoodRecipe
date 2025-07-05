import { buttondata } from "../../lib/data";

import Button from "../UI/Button";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-32">
        <h1 className="font-playfair text-7xl text-[#2C2F24]">Our Menu</h1>
        <p className="font-medium  mt-5 text-center text-[#495460]">
          We consider all the drivers of change gives you the components <br />
          you need to change to create a truly happens.
        </p>
      </div>
      <div className=" flex justify-center mt-12  gap-3">
        {buttondata.map((btn) => (
          <Button
            title={btn}
            className="rounded-full px-8 py-1.5 border-2  border-[#DBDFD0] font-semibold  hover:bg-[#AD343E] hover:text-white text-[#2C2F24]"
          />
        ))}
      </div>
    </div>
  );
};
export default Header;
