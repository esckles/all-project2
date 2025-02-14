import { FC, useState } from "react";
import { MdFavorite, MdFavoriteBorder, MdPlayCircle } from "react-icons/md";

interface iProps {
  id: number;
  title: string;
  state: boolean;
}

const TVid: FC = () => {
  const [toggle, settoggle] = useState<boolean>(false);
  const [text, settext] = useState<string>("");
  const [data, setData] = useState<Array<iProps>>([
    {
      id: 1,
      title: "First video",
      state: false,
    },
    {
      id: 2,
      title: "Second video",
      state: false,
    },
    {
      id: 3,
      title: "Third video",
      state: false,
    },
  ]);

  const changeState = (id: number) => {
    const stateData = data.find((el: iProps) => el.id === id);
    if (stateData) {
      stateData.state = !stateData.state;
    }
    setData([...data]);
  };

  const filterData = data.filter((fetch: iProps) =>
    fetch.title.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <div>
      <div className=" flex items-center justify-center w-full h-screen">
        <div className="w-[400px] min-h-[500px] border rounded-md shadow-lg">
          <div className="flex justify-between m-4 ">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-md  outline-none p-2"
              value={text}
              onChange={(e) => settext(e.target.value)}
            />
            <button
              className="px-2 py-2 text-[10px] font-semibold rounded-md border"
              onClick={() => {
                settoggle(true);
                const timer = setTimeout(() => {
                  clearTimeout(timer);
                  settoggle(false);
                }, 5000);
              }}
            >
              Submit
            </button>
          </div>
          <br />
          <p className="m-4 font-semibold">{toggle && text}......</p>
          <br />

          <div>
            {filterData.map((el: iProps) => (
              <div className="flex justify-between m-4">
                <p>{el.title}</p>
                <div className="w-[100px] h-[100px] rounded-md border items-center justify-center flex bg-green-400">
                  <MdPlayCircle size={30} className="text-white" />
                </div>
                <button
                  onClick={() => {
                    changeState(el.id);
                    console.log("Clicked", el);
                  }}
                >
                  {el.state ? (
                    <MdFavorite className="text-red-500" size={30} />
                  ) : (
                    <MdFavoriteBorder size={30} />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVid;
