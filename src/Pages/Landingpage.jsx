import Address from "../Components/ContactandService";
import Browsecard from "../Components/Cards/Browsecard";
import HeroSection from "../Components/Layouts/HeroSection";
import Navbar from "../Components/Layouts/Navbar";
import Events from "../Components/Cards/EventsCard";
import Fooddelivery from "../Components/Fooddelivery";
import Feedback from "../Components/Cards/FeedbackCard";
import Blog from "../Components/Blog";
import { browseData } from "../lib/data";

const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="m-20 mt-10 flex justify-center items-center gap-4 flex-wrap ">
        {browseData.map((item) => {
          return <Browsecard data={item} />;
        })}
      </div>
      <Address />
      <Events />
      <Fooddelivery />
      <Feedback />

      <Blog />
    </div>
  );
};

export default Landingpage;
