/* eslint-disable @typescript-eslint/no-explicit-any */
import data from "./Data.json";

const LandingPage = () => {
  return (
    <div>
      <div className="w-full h-[calc(100vh-90px)] bg-white flex items-center justify-center mt-10">
        <div className="w-[90%] h-[100%] gap-10  flex">
          {data.map((el: any, i: any) => (
            <div className="w-[250px] h-[500px] border-2 border-gray-200     flex flex-col items-center justify-center shadow-xl rounded-md ">
              <img
                src={el.img}
                alt=""
                className=" rounded-md w-[70%] h-[40%]"
              />
              <p className="w-[80%] text-[12px] font-normal"> {el.title}</p>
              <div className="mt-4 mr-[90px] flex flex-col gap-2">
                <p className="text-[13px]">{el.Stars}</p>
                <p className="font-semibold text-[12px]">{el.Price}</p>
                <div className="flex gap-2">
                  <p className="font-semibold text-[12px] text-gray-500">
                    {el.from}
                  </p>
                  <p className="font-semibold">{el.mainprice}</p>
                </div>
              </div>
              <button className="px-9 py-3 bg-green-600 rounded-md text-white font-semibold mt-4">
                {" "}
                <p>{el.Selectoptions}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
