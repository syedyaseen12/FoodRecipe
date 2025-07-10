const BlogCard = ({ recipe }) => {
  return (
    <div className=" card1 w-[600px] ">
      <div>
        <img src={recipe.img} />
      </div>
      <div className="text-content text-wrap flex flex-col p-6 gap-3 bg-white">
        <p className="text-sm text-[#737865] ">{recipe.date}</p>
        <p className="font-semibold  text-[#2C2F24]">
          The secret tips & tricks to prepare a perfect burger & pizza for our
          customers
        </p>
        <p className="font-normal text-[#414536] ">{recipe.body}</p>
      </div>
    </div>
  );
};

export default BlogCard;
