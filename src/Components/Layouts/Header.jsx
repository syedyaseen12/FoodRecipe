import { useState } from "react";
import { buttondata } from "../../lib/data";
import { cardData } from "../../lib/data";
import Button from "../UI/Button";
import RecipeCard from "../Cards/RecipeCard";
import { useEffect } from "react";
const Header = () => {
  const [filteredCards, setFilteredCards] = useState(cardData);
  const [searchterm, setSearchterm] = useState("");

  const handleFilter = (type) => {
    const filter =
      type === "All" ? cardData : cardData.filter((item) => item.type === type);
    setFilteredCards(filter);
  };

  useEffect(() => {
    // Filter data when search term changes
    const filtered = cardData.filter((item) =>
      item.name.toLowerCase().includes(searchterm.toLowerCase())
    );
    setFilteredCards(filtered);
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-32 text-sm ">
        <h1 className="font-playfair text-7xl text-[#2C2F24]">Our Menu</h1>
        <p className="font-medium  mt-5 text-center text-[#495460]   ">
          We consider all the drivers of change gives you the components <br />
          you need to change to create a truly happens.
        </p>
      </div>
      <input
        type="text"
        value={searchterm}
        placeholder="Search"
        onChange={(e) => setSearchterm(e.target.value)}
        class="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm"
      />

      <div className=" flex justify-center mt-12  gap-3">
        {buttondata.map((btn) => (
          <Button
            onClick={() => handleFilter(btn)}
            title={btn}
            className="rounded-full px-8 py-1.5 border-2  border-[#DBDFD0] font-semibold  hover:bg-[#AD343E] hover:text-white text-[#2C2F24]"
          />
        ))}
      </div>
      <div className="flex justify-center gap-4 flex-wrap m-20">
        {filteredCards.map((card) => (
          <RecipeCard key={card.id} info={card} />
        ))}
      </div>
    </div>
  );
};
export default Header;
