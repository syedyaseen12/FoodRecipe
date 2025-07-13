import japanesefood from "../../Assets/japanese-food.svg";
import phone from "../../Assets/phone.png";
import icon from "../../Assets/Icon.png";

import Socialicon from "../UI/SocialIcon";
import Button from "../UI/Button";
import CompanyLogo from "../UI/CompanyLogo";
const renderdata = {
  navitems: [
    {
      label: "Home",
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
const details = {
  userdetails: [
    {
      phonenumber: 9901133211,
      img: phone,
    },
    {
      gmail: "yaseen@gmail.com",
      img: icon,
    },
  ],
};
const Navbar = () => {
  return (
    <div>
      <div className="bg-[#474747] flex justify-between p-1.5">
        <div className="flex ml-32 gap-4 text-white items-center ">
          {details.userdetails.map((user, index) => (
            <div key={index} className="flex items-center gap-1 justify-center">
              <img src={user.img} alt="" className="w-3 h-3 " />
              <p className="font-normal"> {user.phonenumber}</p>
              <p className="font-normal">{user.gmail}</p>
            </div>
          ))}

          {/* <div className="flex items-center gap-2">
            <img src={icon} alt="" className="w-3 h-3" />
            <p className="font-normal">Yaseen@gmail.com</p>
          </div> */}
        </div>
        <Socialicon />
      </div>
      {/* header component */}
      <div className="header flex justify-evenly items-center mt-6 sm:flex-row">
        <div className="flex items-center  gap-2 mr-24">
          <CompanyLogo className="font-playfair italic text-4xl font-semibold text-[#474747]  sm:text-4x" />
        </div>
        <nav className="flex items-center gap-14">
          <div className="nav flex flex-col sm:flex-row items-center gap-4 sm:gap-14">
            <ul className="flex gap-5 font-sans font-medium sm:flex-row  sm:gap-5">
              {renderdata.navitems.map((item, index) => (
                <li
                  key={index}
                  className="hover:bg-[#DBDFD0] px-3 py-1 rounded-full text-[#2C2F24] "
                >
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <Button
            title="Book A Table"
            className="rounded-full px-5 py-2 border-2 border-black font-semibold"
          />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
