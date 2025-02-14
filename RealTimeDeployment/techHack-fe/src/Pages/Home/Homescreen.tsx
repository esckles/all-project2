import ProfileCard from "../../components/ProfileCard";
import data from "../../data.json";

const App = () => {
  return (
    <div className="w-full h-[80rem] sm:h-screen  bg-[gray] ">
      <div className="w-[100%] h-[100%]   sm:flex justify-center items-center">
        <div className="w-[100%] h-[80rem] sm:w-[90%]  sm:h-[90%]   justify-center items-center sm:flex rounded-md">
          <div className="sm:flex grid grid-cols-1   w-[100%] items-center  justify-center sm:justify-between h-[100%]">
            {" "}
            {data.map((profileCard) => (
              <ProfileCard CardObj={profileCard} key={profileCard.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
