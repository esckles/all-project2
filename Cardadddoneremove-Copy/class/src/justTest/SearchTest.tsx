import { useState } from "react";
import { BiMoon } from "react-icons/bi";
import { IoSunny } from "react-icons/io5";

interface Student {
  id: number;
  studentName: string;
}

const student: Student[] = [
  { id: 1, studentName: "Samuel" },
  { id: 2, studentName: "Mije" },
  { id: 3, studentName: "Isreal" },
  { id: 4, studentName: "Amaka" },
  { id: 5, studentName: "Xystus" },
  { id: 6, studentName: "Ibrahim" },
  { id: 7, studentName: "wisdom" },
  { id: 8, studentName: "emmanuel" },
  { id: 9, studentName: "austine" },
  { id: 10, studentName: "benita" },
];

const SearchTest: React.FC = () => {
  const [search, setsearch] = useState<string>("");
  const [text, settext] = useState<string>("");
  const [toggle, settoggle] = useState<boolean>(false);
  const [isdarkmode, setisdarkmode] = useState<boolean>(false);

  const togglemode = () => {
    setisdarkmode(!isdarkmode);
  };

  const herostyle: React.CSSProperties = {
    backgroundColor: isdarkmode ? "#333" : "#3fff",
    color: isdarkmode ? "#fff" : "#000",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.3s ease",
  };

  const FilterStudent = student.filter((fetch) =>
    fetch.studentName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={herostyle}>
      <button onClick={togglemode}>
        {isdarkmode ? <BiMoon /> : <IoSunny />}
      </button>

      <div className="border rounded-md w-[400px] min-h-[500px] shadow-md mt-3 m-2 p-2">
        <input
          type="text"
          className="border rounded-md outline-none focus:outline-none focus:border-blue-300 px-3 py-2  w-full border-b  "
          placeholder="Search..."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <br />
        <br />
        <div className=" flex gap-4">
          <input
            type="text"
            className="px-1 py-1 border rounded-md text-[10px] outline-none"
            placeholder="input your name"
            value={text}
            onChange={(e) => settext(e.target.value)}
          />
          <button
            className="rounded-md border text-[10px] px-2 py-2 font-semibold text-white bg-blue-400"
            onClick={() => {
              settoggle(true);
              const timer = setTimeout(() => {
                settoggle(false);
                clearTimeout(timer);
              }, 9000);
            }}
          >
            Submit
          </button>
        </div>
        <br />

        <p className="ml-2">Welcome back {toggle && text}</p>
        <br />

        <ul className="text-[14px] gap-3 flex flex-col font-semibold border p-2">
          {FilterStudent.map((fetch) => (
            <li key={fetch.id} className=" border hover:bg-gray-400">
              {fetch.studentName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchTest;
