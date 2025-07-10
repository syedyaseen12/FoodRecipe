import svg1 from "../../Assets/1.svg";
import svg2 from "../../Assets/2.svg";
import svg3 from "../../Assets/3.svg";
import svg4 from "../../Assets/4.svg";
import follow1 from "../../Assets/follow1.png";
import follow2 from "../../Assets/follow2.png";
import follow3 from "../../Assets/follow3.png";
import follow4 from "../../Assets/follow4.png";
import Socialicon from "../UI/SocialIcon";
import CompanyLogo from "../UI/CompanyLogo";
const images = [follow1, follow2, follow3, follow4];
const navitem = ["About", "Menu ", "Pricing", "Blog", "Contact ", "Delivery"];
const navpages = [
  "Start here ",
  "Style Guide ",
  "Password ",
  " 404 Not Found",
  " Licenses",
  " Changelog ",
  "View More",
];
const Footer = () => {
  return (
    <div className="flex bg-[#474747] text-white px-10 py-10 gap-20 justify-around">
      <div className="bg-[#474747] flex flex-col   gap-2  pt-10">
        <CompanyLogo
          className="font-playfair italic text-3xl font-semibold text-white
"
        />
        <div>
          <p className="text-xs leading-normal  text-[#ADB29E] mt-3">
            Lorem ipsum dolor sit amet consectetur,
            <br /> adipisicing elit. Exercitationem, dignissimos.
            <br /> A, numquam suscipit repellendus nemo{" "}
          </p>
        </div>
        <div className="flex mr-20  text-white mt-3">
          <Socialicon className="bg-red-700 rounded-full w-6 h-6" />
        </div>
      </div>
      {/* footer menu section */}
      <div className="flex gap-32">
        <div className="flex flex-col  mt-10  ">
          <span className="font-semibold text-base pt-2 ">Pages</span>
          <ul className="flex flex-col gap-2 mt-6 text-[#DBDFD0] text-base items-start">
            {navitem.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col  mt-10  ">
          <span className=" text-base pt-2 font-semibold"> Utiltiy Pages</span>
          <ul className="flex flex-col gap-2 mt-6 font-normal text-[#DBDFD0] text-base items-start  ">
            {navpages.map((page) => (
              <li>{page}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* follow us section */}
      <div className="mt-12">
        <div className="flex  items-center   ">
          <span className="font-semibold text-base ">
            Follow Us on Instagram
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-8">
          {images.map((img) => (
            <div className="object-cover">
              <img
                src={img}
                alt="insta1"
                className="rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
