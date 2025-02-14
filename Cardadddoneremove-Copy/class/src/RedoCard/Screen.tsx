import { useState } from "react";
import db from "../RedoCard/data1.json";
import { v4 as uuid } from "uuid";
import { MdAdd, MdClose } from "react-icons/md";
import { iCard, iProps } from "./interface1";
import CardProps1 from "./CardProps1";

const Screen = () => {
  const [data, setData] = useState(db);
  const [text, setText] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  const addTask = (str: string) => {
    data.task.data.push({ id: uuid(), title: str });
    setData({ ...data });
  };

  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center flex-col">
        <div className="w-full flex items-center justify-center mb-3">
          <p className="text-[25px] font-semibold">SIMPLE MGN</p>
        </div>
        <div className="w-[900px] min-h-[450px] rounded-md border shadow-xl ">
          <div className="w-full h-[90px] bg-slate-200 rounded-md shadow-inner flex justify-between p-4 items-center ">
            {Object.keys(data)?.map((el: string, i: number) => (
              <h1
                className="border-r font-semibold uppercase flex-1 pr-6 flex items-center justify-between"
                key={i}
              >
                {el}

                {el === "task" && (
                  <div
                    className="w-10 h-10  rounded-full hover:bg-slate-200 flex items-center justify-center text-[25px] transition-all duration-300 cursor-pointer"
                    onClick={() => {
                      setToggle(true);
                    }}
                  >
                    <MdAdd />
                  </div>
                )}
              </h1>
            ))}
          </div>
          {toggle && (
            <div className="w-full h-full  backdrop-blur absolute left-0 top-0 flex items-center justify-center">
              <div className="w-[600px] rounded-md h-[400px] bg-white">
                <div className="flex justify-end p-4">
                  <MdClose
                    size={20}
                    className="cursor-pointer"
                    onClick={() => setToggle(false)}
                  />
                </div>
                <div className="flex items-center justify-center p-7">
                  <input
                    type="text"
                    className="w-[600px] py-4 border-[2px] mt-10 rounded-md p-2 outline-none focus:outline-none focus:border-blue-500"
                    placeholder="Enter Today's  Task..."
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
                <div className="p-8">
                  <button
                    className="px-3 py-3 rounded-md border text-white bg-blue-600"
                    onClick={() => {
                      addTask(text);
                      setText("");
                      setToggle(false);
                    }}
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-between p-4">
            {Object.values(data).map((el: iProps, idx: number) => {
              console.log("id", idx);
              return (
                <div key={idx}>
                  {el.data.map((el: iCard) => (
                    <CardProps1
                      key={el.id}
                      el={el}
                      idx={idx}
                      data={data}
                      setData={setData}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
