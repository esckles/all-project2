import { FC, useState } from "react";
import { BiMoon } from "react-icons/bi";
import { IoSunny } from "react-icons/io5";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

interface iProps {
  id: number;
  name: string;
  state: boolean;
}

const AllTogether: FC = () => {
  const [search, setsearch] = useState<string>("");
  const [ismode, setisdarkmode] = useState<boolean>(false);
  const [data, setData] = useState<Array<iProps>>([
    {
      id: 1,
      name: "Samuel",
      state: false,
    },
    {
      id: 2,
      name: "Mije",
      state: false,
    },
    {
      id: 3,
      name: "Isreal",
      state: false,
    },
    {
      id: 4,
      name: "benita",
      state: false,
    },
    {
      id: 5,
      name: "amaka",
      state: false,
    },
  ]);
  const TouchSwitch = () => {
    setisdarkmode(!ismode);
  };

  const styleDIV: React.CSSProperties = {
    backgroundColor: ismode ? "#333" : "white",
    color: ismode ? "white" : "black",
    width: "100%",
    height: "100vh",
    transition: "background-color 0.5s ease",
  };

  const changeState = (id: number) => {
    const stateData = data.find((el: iProps) => el.id === id);
    if (stateData) {
      stateData.state = !stateData.state;
    }
    setData([...data]);
  };

  const filterData = data.filter((fetch: iProps) =>
    fetch.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styleDIV}>
      <div className="flex items-center  w-full h-screen flex-col">
        <div className="w-full h-[80px] border flex items-center justify-center">
          <div className="w-[90%] h-full flex justify-between items-center">
            <div className="w-[30%] text-center font-semibold items-center justify-center flex">
              StudenName
            </div>
            <div>
              {" "}
              <input
                type="text"
                placeholder="Search..."
                className=" rounded-md border-[2px] w-[300px] h-[40px] mt-2 m-3 focus:outline-none focus:border-blue-400 "
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              />
            </div>
            <div className="w-[30%]">
              <button onClick={TouchSwitch}>
                {ismode ? <IoSunny /> : <BiMoon />}
              </button>
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[350px] rounded-md shadow-md border mt-4">
          {filterData.map((el: iProps) => (
            <div className="flex justify-between items-center m-4 ">
              <div className="">{el.name}</div>
              <button
                onClick={() => {
                  changeState(el.id);
                  console.log("Clicked", el);
                }}
              >
                {el.state ? (
                  <MdFavorite size={30} className="text-red-500" />
                ) : (
                  <MdFavoriteBorder className="" size={30} />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTogether;
