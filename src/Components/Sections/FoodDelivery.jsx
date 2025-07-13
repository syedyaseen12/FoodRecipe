import chef from "../../Assets/chef.png";
import fish from "../../Assets/fishshells.png";
import bbq from "../../Assets/bbq.png";
import timeicon from "../../Assets/past.png";
import cart from "../../Assets/cart.png";
import offer from "../../Assets/offer.png";

const deliveryData = {
  deliveryservices: [
    {
      img: cart,
      body: "Delivery within 30 minutes",
    },
    {
      img: offer,
      body: "Best Offer & Prices",
    },
    {
      img: timeicon,
      body: "Online Services Available",
    },
  ],
};
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
        <section className="text-wrap flex flex-col gap-6">
          <h1 className="text-5xl font-playfair text-[#2c2f24] ">
            Fastest Food <br /> Delivery in City
          </h1>
          <p className="text-sm text-[#414536]">
            Our visual designer lets you quickly and of drag a down <br />
            your way to customapps for both keep desktop.
          </p>
        </section>

        <ul className="space-y-4  mt-5  ">
          {deliveryData.deliveryservices.map((item, index) => (
            <li key={index} className="flex  gap-2 items-center ">
              <img src={item.img} />
              <span className="font-medium text-[#2c2f24]">{item.body}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Fooddelivery;
