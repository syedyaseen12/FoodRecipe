import Address from "../Components/Sections/ContactAndService";
import BrowseCard from "../Components/Cards/BrowseCard";
import HeroSection from "../Components/Layouts/HeroSection";
import Navbar from "../Components/Layouts/Navbar";
import Events from "../Components/Cards/EventsCard";
import FoodDelivery from "../Components/Sections/FoodDelivery";
import Feedback from "../Components/Cards/FeedbackCard";
import Blog from "../Components/Sections/Blog";
import Footer from "../Components/Layouts/Footer";
import { browseData } from "../lib/data";

const LandingPage = () => {
  return (
    <div>
      <div className="pb-14 bg-[#f9f9f9]">
        <Navbar />
      </div>
      <HeroSection />
      <div className="m-20 mt-10 flex justify-center items-center gap-4 flex-wrap ">
        {browseData.map((item, index) => {
          return <BrowseCard data={item} key={index} />;
        })}
      </div>
      <Address />
      <Events />
      <FoodDelivery />
      <Feedback />
      <Blog />
      <Footer />
    </div>
  );
};

export default LandingPage;
