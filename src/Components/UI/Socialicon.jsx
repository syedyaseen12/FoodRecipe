import { socialImages } from "../../lib/data";

const Socialicon = ({ className = "w-6 h-6" }) => {
  return (
    <div className="flex mr-20 gap-3 text-white">
      {socialImages.map((icons, index) => (
        <img src={icons.imgUrl} key={index} className={`$className`} />
      ))}
    </div>
  );
};

export default Socialicon;
