import pic from "../assets/Screenshot 2024-10-24 204619.png";
import data from "../data.json";

const HomeScreen = () => {
  return (
    <div>
      <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-5 xl:grid-cols-5 px-4 ">
        {data.map((el: any, i: any) => (
          <div>
            <div className=" h-[500px] border rounded-lg" key={el?.id3}>
              <div className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px]">
                {el?.title}
                {/* <div>{el?.Description}</div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
