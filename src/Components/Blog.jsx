import { blogdata } from "../lib/data";
import BlogCard from "./Cards/BlogCard";
import MiniCard from "./Cards/MiniCard";
const Blog = () => {
  return (
    <div className="flex flex-col items-start  p-10 pt-16 bg-[#F9F9F7]">
      <div className="flex justify-between items-center w-full px-10 mb-10">
        <h1 className="text-4xl font-playfair text-[#2c2f24]">
          Our Blog & Article
        </h1>
        <button className="bg-[#AD343E] text-white font-semibold px-6 py-4 rounded-full mr-6">
          Read All Articles
        </button>
      </div>

      <div className=" flex  gap-3 justify-center  ml-10">
        {blogdata.herosection.map((recipe, index) => (
          <BlogCard recipe={recipe} key={index} />
        ))}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogdata.recipes.map((recipe, id) => (
            <MiniCard recipe={recipe} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
