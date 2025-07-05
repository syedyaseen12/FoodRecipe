import Header from "../Components/Layouts/Header";
import Navbar from "../Components/Layouts/Navbar";
import Card from "../Components/Cards/RecipeCard";
import Footer from "../Components/Layouts/Footer";
import Social from "../Components/OrderingApps";
import { cardData } from "../lib/data";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="flex justify-center gap-4 flex-wrap m-20">
        {cardData.map((item) => (
          <Card info={item} />
        ))}
      </div>

      <Social />
      <Footer />
    </div>
  );
};

export default Homepage;
