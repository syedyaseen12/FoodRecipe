import Button from "./UI/Button";
import InputFeild from "./UI/InputFeild";

const map = () => {
  return (
    <div className="bg-[#f9f9f7]">
      <div className="flex  flex-col justify-center items-center  mt-10 text-[#2c2f24] text-wrap  ">
        <h1 className="text-[77px] font-playfair text-[#2c2f24]">
          Book A Table
        </h1>
        <p className="text-[#495460] text-center ">
          We consider all the drivers of change gives you the components <br />{" "}
          you need to change to create a truly happens.
        </p>
      </div>

      <div className="flex justify-center items-center mt-10  ">
        <form className="w-[650px] h-[520px]  flex flex-col justify-center items-center gap-5 rounded-xl z-10 bg-white">
          {/* Date & Time */}
          <div className="flex gap-4 ">
            <div className="flex flex-col">
              <label
                htmlFor="date"
                className="mb-1 text-base text-[#2C2F24] font-semibold pl-4"
              >
                Date
              </label>
              <InputFeild
                id="date"
                defaultValue="25-02-2003"
                type="date"
                className="w-[270px]  text-[#737865] rounded-full border border-[#DBDFD0] px-5 py-3"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="time"
                className="mb-1 text-base text-[#2C2F24] font-semibold pl-4"
              >
                Time
              </label>
              <select
                id="time"
                defaultValue="10:00 AM"
                className="w-[270px] rounded-full border border-[#DBDFD0] px-4 py-3 text-[#737865] pl-4"
              >
                <option value="" disabled>
                  Choose a time
                </option>
                <option value="10:00">10:00 AM</option>
                <option value="10:30">10:30 AM</option>
                {/* ...other times */}
              </select>
            </div>
          </div>

          {/* Name & Phone */}
          <div className="flex gap-4 mt-4">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="mb-1 text-base font-semibold text-[#2C2F24] pl-4"
              >
                Full Name
              </label>
              <InputFeild
                id="name"
                type="text"
                placeholder="Enter Your Name"
                className="w-[270px] outline-none text-[#737865] rounded-full border border-[#DBDFD0] px-4 py-3"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="mb-1 text-base font-semibold text-[#2C2F24] pl-4"
              >
                Phone Number
              </label>
              <InputFeild
                id="phone"
                type="number"
                placeholder="x-xxx-xxx-xxx"
                className="w-[270px] outline-none text-[#737865] rounded-full border border-[#DBDFD0] px-4 py-3"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="flex flex-col w-[80%]">
            <label
              htmlFor="guests"
              className="mb-1 text-base font-semibold text-[#2C2F24]"
            >
              Number of Guests
            </label>
            <select
              id="guests"
              className="outline-none text-[#737865] rounded-full border border-[#DBDFD0] px-4 py-3"
            >
              <option value="">1 person</option>
              <option value="1 Seat">1 Seat</option>
              <option value="2 Seat">2 Seat</option>
              <option value="3 Seat">3 Seat</option>
              <option value="4 Seat">4 Seat</option>
            </select>
          </div>

          {/* Button */}
          <div className="px-4 py-3 rounded-full border border-[#DBDFD0] w-[80%] flex justify-center text-white font-semibold bg-[#AD3432]">
            <Button title="Book A Table" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default map;
