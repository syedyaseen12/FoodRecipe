const Browsecard = ({ data }) => {
  if (!data) return null;

  return (
    <div
      className={`card  w-64 border-2 rounded-xl border-[#DBDFD0]   flex flex-col justify-center items-center p-6 `}
    >
      <div>
        <img src={data.img} className="m-5 " />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-medium text-xl text-[#2C2F24]">{data.name}</h1>
        <p className="text-center mt-2 font-normal text-[#414536]">
          {data.description}
        </p>
        <div>
          <button className="text-[#AD343E] mt-4 font-bold">
            {data.btnname}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Browsecard;
