// import db from "./data.json";

// import Card from "./Static/Card";
// import { iCard, iprops } from "./utils/interfaces";

// const App = () => {
//   return (
//     <div>
//       <div className=" uppercase font-semibold text-center text-[20px] my-16 h-[20px]">
//         Simple Project MMIGM
//       </div>

//       <div className="flex justify-center">
//         <main className="border rounded-md w-[800px] min-h-[180px] bg-slate-50 shadow-i">
//           <section className="p-4 flex items-center justify-between bg-slate-100 shadow-inner">
//             {/* {Object.keys(db)?.map((el:string, 1: number) => {

//             })} */}
//           </section>
//           <section className="p-4 flex items-center justify-between bg-slate-100 gap-2">
//             <h1 className="border-r flex-1">Task</h1>
//             <h1 className="border-r flex-1">Progress</h1>
//             <h1 className="border-r flex-1">Done</h1>
//           </section>
//           <section className="p-4">
//             <div className="w-[300px] h-[140px] border rounded-md p-2">
//               <Card />
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default App;

// APP

// APP

/**
 * The main React component for the application.
 * It manages the state of the application, including the task data, and provides functionality to add new tasks.
 * The component also renders the main UI elements, including the header, the task management section, and the task cards.
 */
import { useState } from "react";
import db from "./data.json";
import Card from "./Static/Card";
import { iCard, iProps } from "./utils/interfaces";
import { MdAdd, MdClose } from "react-icons/md";
import { v4 as uuid } from "uuid";

const App = () => {
  // console.log(Object.values(db));

  const [data, setData] = useState(db);
  // console.log("db", db);

  const [text, setText] = useState<string>("");

  const [toggle, setToggle] = useState<boolean>(false);

  const addTask = (str: string) => {
    data.task.data.push({ id: uuid(), title: str });

    setData({ ...data });
  };

  return (
    <div>
      <div className="uppercase font-semibold text-center text-[23px] my-16">
        Simple Project MNGM
      </div>

      <div className="flex justify-center">
        <main className="border rounded-md w-[1000px] min-h[400px] bg-slate-50 shadow-inner relative">
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
        </main>
      </div>
    </div>
  );
};

export default App;
