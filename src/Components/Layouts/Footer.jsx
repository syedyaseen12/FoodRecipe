// import svg1 from "../../Assets/1.svg";
// import svg2 from "../../Assets/2.svg";
// import svg3 from "../../Assets/3.svg";
// import svg4 from "../../Assets/4.svg";
import follow1 from "../../Assets/follow1.png";
import follow2 from "../../Assets/follow2.png";
import follow3 from "../../Assets/follow3.png";
import follow4 from "../../Assets/follow4.png";
import Socialicon from "../UI/SocialIcon";
import CompanyLogo from "../UI/CompanyLogo";
const images = [follow1, follow2, follow3, follow4];
const navitem = [
  "Home",
  "About ",
  "Menu",
  "Pricing",
  "Blog ",
  "Contact",
  "Delivery",
];
const navpages = [
  "Start Here ",
  "Styleguide ",
  <>
    Password,
    <br />
    Protected
  </>,

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
          <p className="text-sm leading-normal  font-sans text-[#ADB29E] mt-3">
            In the new era of technology we look a <br /> in the future with
            certainty and pride <br /> to for our company and.
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
          <ul className="flex flex-col gap-3 mt-6 text-[#DBDFD0] text-base items-start">
            {navitem.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col  mt-10  ">
          <span className=" text-base pt-2 font-semibold"> Utiltiy Pages</span>
          <ul className="flex flex-col gap-3 mt-6 font-normal text-[#DBDFD0] text-base items-start  ">
            {navpages.map((page, index) => (
              <li key={index}>{page}</li>
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
          {images.map((img, index) => (
            <div key={index} className="object-cover">
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
