import { FC, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
interface iProps {
  id: number;
  name: string;
  state: boolean;
}

const Any: FC = () => {
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
      name: "Boyden",
      state: false,
    },
  ]);

  const [search, setsearch] = useState<string>("");

  const filterData = data.filter((fetch) =>
    fetch.name.toLowerCase().includes(search.toLowerCase())
  );

  const changeState = (id: number) => {
    const stateData = data.find((el: iProps) => el.id === id);
    if (stateData) {
      stateData.state = !stateData.state;
    }
    setData([...data]);
  };

  return (
    <div>
      <div className="w-full h-screen bg-slate-200 flex items-center justify-center">
        <div className="w-[300px] h-[400px] rounded-md border shadow-xl">
          <input
            type="text"
            placeholder="Search..."
            className=" rounded-md px-3 py-2 m-4 focus:border-blue-500  focus:outline-none border-[2px]"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
          <div>
            {filterData.map((el: iProps) => (
              <div className=" flex justify-between">
                <div className="p-3 ">{el.name}</div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    changeState(el.id);
                    console.log("clicked", el);
                  }}
                >
                  {el.state ? (
                    <MdFavorite size={30} className="text-red-600" />
                  ) : (
                    <MdFavoriteBorder size={30} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Any;
