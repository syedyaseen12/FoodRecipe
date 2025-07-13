import { socialImages } from "../../lib/data";

const Socialicon = ({ className = "" }) => {
  return (
    <div className="flex mr-20 gap-2 text-white">
      {socialImages.map((icons, index) => (
        <img src={icons.imgUrl} key={index} className={className} />
      ))}
    </div>
  );
};

export default Socialicon;
