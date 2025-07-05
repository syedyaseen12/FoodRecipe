import React from "react";

const MiniCard = ({ recipe, key }) => {
  return (
    <div key={key} className="card2 w-[270px] flex flex-col text-wrap">
      <img src={recipe.img} alt="card" className="rounded-t-lg" />
      <div className="flex flex-col gap-3 p-6 bg-white rounded-b-lg">
        <p className="text-[#737865] text-sm">{recipe.date}</p>
        <p className="font-semibold text-[#2C2F24]">{recipe.body}</p>
      </div>
    </div>
  );
};

export default MiniCard;
