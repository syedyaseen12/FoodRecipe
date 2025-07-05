import japanesefood from "../../Assets/japanese-food.svg";
import phone from "../../Assets/phone.png";
import icon from "../../Assets/Icon.png";

import Socialicon from "../UI/Socialicon";
import Button from "../UI/Button";
import CompanyLogo from "../UI/CompanyLogo";
const renderdata = {
  navitems: [
    {
      label: "home",
      link: "/",
    },
    {
      label: "About",
      link: "/About",
    },
    {
      label: "Menu",
      link: "/menu",
    },
    {
      label: "Pages",
      link: "/Landingpage",
    },
    {
      label: "Contact",
      link: "/Mappage",
    },
  ],
};

const Navbar = () => {
  return (
    <div>
      <div className="bg-[#474747] flex justify-between p-1.5">
        <div className="flex ml-32 gap-6 text-white items-center">
          <div className="flex items-center gap-2">
            <img src={phone} alt="" className="w-3 h-3" />
            <p className="font-normal"> +91 9901133212</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={icon} alt="" className="w-3 h-3" />
            <p className="font-normal">Yaseen@gmail.com</p>
          </div>
        </div>
        <Socialicon />
      </div>
      {/* header component */}
      <div className="header flex justify-evenly items-center mt-6  ">
        <div className="flex items-center  gap-2 mr-24">
          <CompanyLogo
            className="font-playfair italic text-4xl font-semibold text-[#474747]
"
          />
        </div>
        <div className="flex items-center gap-14">
          <div className="nav ">
            <ul className="flex gap-5 font-semibold">
              {renderdata.navitems.map((item) => (
                <li className="hover:bg-[#DBDFD0] px-3 py-1 rounded-full text-[#2C2F24] ">
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <Button
            title="Book A table"
            className="rounded-full px-5 py-2 border-2 border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
