import chef from "../Assets/chef.png";
import fish from "../Assets/fishshells.png";
import bbq from "../Assets/bbq.png";
import timeicon from "../Assets/past.png";
import cart from "../Assets/cart.png";
import offer from "../Assets/offer.png";
const Fooddelivery = () => {
  return (
    <div className=" flex justify-evenly pt-32 pb-20 bg-[#f9f9f7] items-center ">
      <div className="flex gap-3 ">
        <div>
          <img src={chef} />
        </div>
        <div className=" flex flex-col gap-3 mt-8">
          <img src={fish} />
          <img src={bbq} />
        </div>
      </div>
      <div className="flex flex-col  items-start gap-6 text-wrap">
        <div className="text-wrap flex flex-col gap-6">
          <h1 className="text-5xl font-playfair ">
            Fastest Food <br /> Delivery in City
          </h1>
          <p className="text-sm">
            Our visual designer lets you quickly and of drag a down <br />
            your way to customapps for both keep desktop.
          </p>
        </div>

        <ul className="space-y-4  mt-5  ">
          <li className="flex  gap-2 items-center">
            <img src={timeicon} />
            <span className="font-medium">Delivery within 30 minutes</span>
          </li>
          <li className="flex  gap-2">
            <img src={cart} />
            <span className="font-medium">Best Offer & Prices</span>
          </li>
          <li className="flex  gap-2">
            <img src={offer} />
            <span className="font-medium">Online Service Available</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Fooddelivery;
