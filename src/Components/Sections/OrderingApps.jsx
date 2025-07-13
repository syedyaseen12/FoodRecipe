import img1 from "../../Assets/img1.png";
import img2 from "../../Assets/img2.png";
import market2 from "../../Assets/market2.png";
import market4 from "../../Assets/market4.png";
import market5 from "../../Assets/market5.png";
import market6 from "../../Assets/market6.png";
import market7 from "../../Assets/market7.png";

const socialdata = {
  social1: [img1, img2, market2],
  social2: [market4, market5, market2],
  social3: [img1, market6, market7],
};

const Social = () => {
  return (
    <div className="flex items-center gap-28 justify-center bg-gray-100  p-20 ">
      <section className="flex flex-col items-center justify-center ml-20 mb-8 ">
        <h1 className="font-playfair text-4xl font-medium leading-snug text-[#2C2F24] pl-10">
          You Can order <br /> through apps
        </h1>
        <p className="text-sm mt-4 pl-12">
          Lorem ipsum dolor sit amet consectetur,
          <br /> adipisicing elit. Placeat, neque! ,
        </p>
      </section>

      <div className="flex flex-col ">
        <div className="flex   gap-3 mb-6 justify-center items-center ">
          {socialdata.social1.map((icon, index) => (
            <div key={index} className="rounded-md bg-white px-6 py-5  ">
              <img src={icon} />
            </div>
          ))}
        </div>
        <div className="flex   gap-3 mb-6 justify-center items-center ">
          {socialdata.social2.map((icon, index) => (
            <div key={index} className="rounded-md bg-white px-8 py-5 ">
              <img src={icon} />
            </div>
          ))}
        </div>
        <div className="flex   gap-3 mb-6 justify-center items-center ">
          {socialdata.social3.map((icon, index) => (
            <div key={index} className="rounded-md bg-white px-6 py-5  ">
              <img src={icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Social;
