import { FC, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

interface iProps {
  id: number;
  name: string;
  state: boolean;
}

const StateTest: FC = () => {
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
      name: "xystus",
      state: false,
    },
    {
      id: 5,
      name: "amaka",
      state: false,
    },
    {
      id: 6,
      name: "emmanuel",
      state: false,
    },
    {
      id: 7,
      name: "benita",
      state: false,
    },
    {
      id: 8,
      name: "emmanuel",
      state: false,
    },
    {
      id: 9,
      name: "wisdom",
      state: false,
    },
    {
      id: 10,
      name: "austine",
      state: false,
    },
    {
      id: 11,
      name: "ibrahim",
      state: false,
    },
  ]);

  const [search, setsearch] = useState<string>("");
  const [toggl, settoggl] = useState<boolean>(false);
  const [text, settext] = useState<string>("");

  const changeState = (id: number) => {
    const stateData = data.find((el: iProps) => el.id === id);
    if (stateData) {
      stateData.state = !stateData.state;
    }
    setData([...data]);
  };

  const filterName = data.filter((fetch) =>
    fetch.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <div className=" flex items-center justify-center w-full h-screen">
        <div className="w-[700px] min-h-[500px] rounded-md border shadow-lg">
          <div className="flex gap-2 mt-2 m-1 p-1">
            <input
              type="text"
              placeholder="Search..."
              className="border
             rounded-md outline-none focus:outline-none focus:border-blue-500 px-4 py-2 w-full"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
            <div>
              <input
                type="text"
                className="border
             rounded-md outline-none p-2"
                placeholder="input name"
                value={text}
                onChange={(e) => settext(e.target.value)}
              />
              <button
                className="px-1 py-1 text-[10px] border rounded-md bg-blue-200 text-white font-semibold"
                onClick={() => {
                  settoggl(true);
                  const timer = setTimeout(() => {
                    clearTimeout(timer);
                    settoggl(false);
                  }, 1000);
                }}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="w-full">
            <p className="ml-3 text-[13px] font-semibold mt-2">
              Welcome back {toggl && text}
            </p>
          </div>

          <div className="w-[650px] mt-3 min-h-[400px] ml-3 rounded-md border ">
            {filterName.map((el: iProps) => (
              <div className="flex justify-between items-center m-3  text-[16px] font-semibold">
                <p className="gap-6 flex" key={el.id}>
                  {el.name}
                </p>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    changeState(el.id);
                    console.log("clicked", el);
                  }}
                >
                  {el.state ? (
                    <MdFavorite size={30} className=" text-red-500" />
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

export default StateTest;
