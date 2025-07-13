const Events = ({ data }) => {
  if (!data) return null;
  return (
    <div>
      <div className="card w-[270px] rounded-2xl   mt-12 ">
        <img src={data.img} className="w-64 object-cover rounded-2xl" />
        <div className="mt-3 px-3 text-[#2c2f24]">
          <h1 className="font-bold text-lg">{data.title}</h1>
          <p className="font-sans text-base mt-2 text-[#414536] ">
            {data.desciption}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
