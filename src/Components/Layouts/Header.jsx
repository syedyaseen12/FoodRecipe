import { useState } from "react";
import { buttondata } from "../../lib/data";
import { cardData } from "../../lib/data";
import Button from "../UI/Button";
import RecipeCard from "../Cards/RecipeCard";
import { useEffect } from "react";
const Header = () => {
  const [filteredCards, setFilteredCards] = useState(cardData);
  const [searchterm, setSearchterm] = useState("");
  const [currentpage, setCurrentpage] = useState(1);
  const itemsPerPage = 8;

  const handleFilter = (option) => {
    if (option === "All") {
      setFilteredCards(cardData);
    } else {
      const filter = cardData.filter((item) => item.type === option);
      setFilteredCards(filter);
    }
  };
  // search bar..
  // useEffect(() => {
  //   const filtered = cardData.filter((item) =>
  //     item.name.toLowerCase().includes(searchterm.toLowerCase())
  //   );
  //   setFilteredCards(filtered);
  // }, [searchterm]);

  // pagination section...
  // const startindex = (currentpage - 1) * itemsPerPage;
  // const endindex = startindex + itemsPerPage;

  // const data = filteredCards.slice(startindex, endindex);
  // const totalPages = Math.ceil(filteredCards.length / itemsPerPage);

  return (
    <div>
      <header className="flex flex-col items-center justify-center mt-32 text-sm ">
        <h1 className="font-playfair text-7xl text-[#2C2F24]">Our Menu</h1>
        <p className="font-sans  mt-5 text-center text-[#495460]   ">
          We consider all the drivers of change gives you the components <br />
          you need to change to create a truly happens.
        </p>
      </header>

      {/* input bar */}
      {/* <input
        type="text"
        value={searchterm}
        placeholder="Search"
        onChange={(e) => setSearchterm(e.target.value)}
        className="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm"
      /> */}

      <div className=" flex justify-center mt-12  gap-3">
        {buttondata.map((btn, index) => (
          <Button
            key={index}
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
      {/* Pagination */}
      {/* <div className="flex justify-center gap-2 mb-10">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            title={index + 1}
            onClick={() => setCurrentpage(index + 1)}
            className="px-4 py-2 border rounded-full"
          />
        ))}
      </div> */}
    </div>
  );
};
export default Header;
