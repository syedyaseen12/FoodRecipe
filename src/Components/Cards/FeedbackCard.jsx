import { renderData } from "../../lib/data";
const Feedback = () => {
  return (
    <div className="flex flex-col items-center mt-20 pb-24">
      <h1 className="text-4xl font-bold font-playfair text-[#2c2f24] mb-10">
        What Our Customers Say
      </h1>

      <div className="flex justify-center gap-4 flex-wrap">
        {renderData.feedback.map((item, id) => (
          <div
            key={id}
            className=" review card w-[25%]  p-5 mt-4 rounded-lg bg-[#f9f9f7]"
          >
            <div className="text section flex flex-col justify-start items-start  gap-4 ">
              <span className="font-bold text-xl text-[#AD343E] mt-3">
                {item.title}
              </span>
              <p className="text-wrap font-medium text-[#414536]">
                {item.body}
              </p>
            </div>
            <hr className="h-px bg-[#E4E7Dc] border-0 mt-6" />
            <div className="profile flex   mt-6 gap-4">
              <img
                src={item.profile.profilepic}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div className="felx flex-col">
                <span className="font-bold text-base text-[#2C2F24]">
                  {item.profile.profilename}
                </span>
                <p className="font-normal text-[#2C2F24]">
                  {item.profile.place}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
