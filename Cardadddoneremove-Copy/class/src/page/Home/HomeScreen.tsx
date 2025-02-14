import { useState } from "react";
import { v4 as uuid } from "uuid";
import db from "../data.json";
import { MdAdd, MdClose } from "react-icons/md";
import Card from "../Card/Card";
import { iCard, iProps } from "../utils/interface";

const HomeScreen = () => {
  const [data, setData] = useState(db);
  const [text, setText] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  const addTask = (str: string) => {
    data.task.data.push({ id: uuid(), title: str });
    setData({ ...data });
  };

  return (
    <div className=" items-center justify-center flex flex-col">
      <div className="uppercase font-semibold text-center text-[23px] my-16">
        Simple Project MNGM
      </div>
      <div className="w-[1000px] rounded-md border min-h-[400px] shadow-inner ">
        <section className="p-4 flex items-center justify-between bg-slate-100 gap-2">
          {Object.keys(data)?.map((el: string, i: number) => (
            <h1
              className="border-r flex-1 flex items-center justify-between uppercase font-semibold pr-6"
              key={i}
            >
              {el}

              {el === "task" && (
                <div
                  className="w-10 h-10  rounded-full hover:bg-slate-200 flex items-center justify-center text-[25px] transition-all duration-300 cursor-pointer"
                  onClick={() => setToggle(true)}
                >
                  <MdAdd />
                </div>
              )}
            </h1>
          ))}
        </section>
        {toggle && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center rounded-md backdrop-blur-sm ">
            {" "}
            <div className="w-[600px] h-[300px] border rounded-md p-4 bg-white flex flex-col">
              <div className="flex justify-end">
                <div
                  className="w-10 h-10  rounded-full hover:bg-red-100 flex items-center justify-center text-[25px] transition-all duration-300 cursor-pointer "
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  <MdClose />
                </div>
              </div>
              <input
                className="w-[90%] border rounded-md outline-none h-[45px] pl-2 my-10"
                placeholder="Enter today's task"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />

              <div className="flex ">
                <button
                  className="text-white px-8 py-3 rounded-md bg-blue-950 "
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
        <section className="p-4 flex justify-between">
          {Object.values(data).map((el: iProps, idx: number) => {
            console.log("id", idx);
            return (
              <div key={idx} className="">
                {el.data.map((el: iCard) => (
                  <Card
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
        </section>
      </div>
    </div>
  );
};

export default HomeScreen;
