const Card = ({ info }) => {
  // if (!data) return null;

  return (
    <div className="flex justify-center flex-wrap gap-10 ">
      <div className="card w-[230px]  flex flex-col  bg-white border border-[#DBDFD0]  rounded-xl ">
        <div>
          <img
            src={info.img}
            className="h-44 w-60  rounded-t-md object-cover "
          />
        </div>

        <div className="flex flex-col  items-center gap-2  p-5">
          <h3 className="text-xl font-bold text-[#AD343E]">{info.price}</h3>
          <h3 className="text-xl font-bold py-1 text-[#2C2F24]">{info.name}</h3>
          <p className="text-center text-sm mr-1 ml-1 font-sans text-[#414536]">
            {info.Description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
